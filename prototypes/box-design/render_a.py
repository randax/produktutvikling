# PROTOTYPE – final concept images for direction A «Boka».
# Usage: blender -b -P render_a.py -- <shot> <out.png> [samples] [width]
# Shots: hero, detail, shelf-evening, shelf-day, back, phone, size
import sys, math, random, os
import bpy
from mathutils import Vector

argv = sys.argv[sys.argv.index("--") + 1:]
SHOT, OUT = argv[0], argv[1]
SAMPLES = int(argv[2]) if len(argv) > 2 else 128
WIDTH = int(argv[3]) if len(argv) > 3 else 1600
HERE = os.path.dirname(os.path.abspath(__file__))
random.seed(7)

bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
scene.render.engine = "CYCLES"
scene.cycles.samples = SAMPLES
scene.cycles.use_denoising = True
scene.render.resolution_x, scene.render.resolution_y = WIDTH, int(WIDTH * 0.625)
prefs = bpy.context.preferences.addons["cycles"].preferences
prefs.compute_device_type = "METAL"
prefs.get_devices()
for dev in prefs.devices:
    dev.use = dev.type == "METAL"
scene.cycles.device = "GPU"
scene.view_settings.view_transform = "AgX"
try:
    scene.view_settings.look = "AgX - Medium High Contrast"
except Exception:
    pass

# ---------- materials ----------
def principled(name):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    return m, m.node_tree.nodes["Principled BSDF"]

def mat(name, color, rough=0.5, coat=0.0, metallic=0.0):
    m, b = principled(name)
    b.inputs["Base Color"].default_value = (*color, 1)
    b.inputs["Roughness"].default_value = rough
    b.inputs["Metallic"].default_value = metallic
    b.inputs["Coat Weight"].default_value = coat
    return m

def mat_emit(name, color, strength):
    m, b = principled(name)
    b.inputs["Base Color"].default_value = (*color, 1)
    b.inputs["Emission Color"].default_value = (*color, 1)
    b.inputs["Emission Strength"].default_value = strength
    return m

def mat_wood(name, light, dark, scale, direction="Y", rough=0.42):
    m, b = principled(name)
    nt = m.node_tree
    tc, mp = nt.nodes.new("ShaderNodeTexCoord"), nt.nodes.new("ShaderNodeMapping")
    mp.inputs["Scale"].default_value = scale
    wv = nt.nodes.new("ShaderNodeTexWave")
    wv.bands_direction = direction
    wv.inputs["Scale"].default_value = 3.0
    wv.inputs["Distortion"].default_value = 7.0
    wv.inputs["Detail"].default_value = 6.0
    nz = nt.nodes.new("ShaderNodeTexNoise")
    nz.inputs["Scale"].default_value = 60.0
    mix = nt.nodes.new("ShaderNodeMix")
    mix.data_type = "FLOAT"
    mix.inputs[0].default_value = 0.25
    ramp = nt.nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].color = (*dark, 1)
    ramp.color_ramp.elements[1].color = (*light, 1)
    ramp.color_ramp.elements[0].position = 0.25
    L = nt.links.new
    L(tc.outputs["Object"], mp.inputs["Vector"])
    L(mp.outputs["Vector"], wv.inputs["Vector"])
    L(mp.outputs["Vector"], nz.inputs["Vector"])
    L(wv.outputs["Fac"], mix.inputs[2])
    L(nz.outputs["Fac"], mix.inputs[3])
    L(mix.outputs[0], ramp.inputs["Fac"])
    L(ramp.outputs["Color"], b.inputs["Base Color"])
    b.inputs["Roughness"].default_value = rough
    b.inputs["Coat Weight"].default_value = 0.15
    return m

def mat_image(name, path, strength=1.2):
    m, b = principled(name)
    nt = m.node_tree
    tex = nt.nodes.new("ShaderNodeTexImage")
    tex.image = bpy.data.images.load(path)
    nt.links.new(tex.outputs["Color"], b.inputs["Base Color"])
    nt.links.new(tex.outputs["Color"], b.inputs["Emission Color"])
    b.inputs["Emission Strength"].default_value = strength
    b.inputs["Roughness"].default_value = 0.15
    return m

AMBER = mat_emit("amber", (1.0, 0.48, 0.1), 3.5)

# ---------- geometry helpers ----------
def finish(o, material=None, bevel=0.004, segs=5):
    if bevel:
        mod = o.modifiers.new("bevel", "BEVEL")
        mod.width, mod.segments, mod.limit_method = bevel, segs, "ANGLE"
    for p in o.data.polygons:
        p.use_smooth = True
    if material:
        o.data.materials.append(material)
    return o

def cube(name, size, loc, material=None, bevel=0.004, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc, rotation=rot)
    o = bpy.context.active_object
    o.name, o.scale = name, size
    bpy.ops.object.transform_apply(scale=True)
    return finish(o, material, bevel)

def cyl(name, r, h, loc, material=None, bevel=0.004, rot=(0, 0, 0), verts=96):
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=h, location=loc, rotation=rot, vertices=verts)
    o = bpy.context.active_object
    o.name = name
    return finish(o, material, bevel)

def mesh_from(name, verts, faces, material=None):
    me = bpy.data.meshes.new(name)
    me.from_pydata(verts, [], faces)
    me.update()
    o = bpy.data.objects.new(name, me)
    bpy.context.collection.objects.link(o)
    return finish(o, material, bevel=0)

def area_light(name, loc, target, energy, size, color=(1, 1, 1)):
    bpy.ops.object.light_add(type="AREA", location=loc)
    lt = bpy.context.active_object
    lt.name, lt.data.energy, lt.data.size, lt.data.color = name, energy, size, color
    lt.rotation_euler = (Vector(target) - Vector(loc)).to_track_quat("-Z", "Y").to_euler()
    return lt

def camera(loc, target, lens=50, fstop=4.0):
    bpy.ops.object.camera_add(location=loc)
    cam = bpy.context.active_object
    cam.data.lens = lens
    d = Vector(target) - Vector(loc)
    cam.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()
    cam.data.dof.use_dof = True
    cam.data.dof.focus_distance = d.length
    cam.data.dof.aperture_fstop = fstop
    scene.camera = cam

def world(color, strength):
    w = bpy.data.worlds.new("world")
    w.use_nodes = True
    bg = w.node_tree.nodes["Background"]
    bg.inputs["Color"].default_value = (*color, 1)
    bg.inputs["Strength"].default_value = strength
    scene.world = w

# ---------- Heima-boksen «Boka» (front face is +x, back is -x) ----------
W_, D_, H_ = 0.075, 0.21, 0.27
def heima_box(x=0.0, y=0.0, rotz=0.0):
    oak = mat_wood("oak", (0.55, 0.36, 0.2), (0.3, 0.17, 0.08), (1.5, 1.5, 0.12))
    parts = [cube("body", (W_, D_, H_), (0, 0, H_ / 2), oak, bevel=0.006),
             cube("slit", (0.004, D_ * 0.62, 0.005), (W_ / 2 - 0.0013, 0, 0.045), AMBER, bevel=0.0015),
             cube("foot", (W_ * 0.86, D_ * 0.9, 0.004), (0, 0, 0.002), mat("felt", (0.04, 0.04, 0.04), 0.95), bevel=0.001)]
    dark = mat("port", (0.02, 0.02, 0.025), 0.6)
    parts.append(cyl("power", 0.007, 0.006, (-W_ / 2 + 0.0015, -0.05, 0.035), dark, bevel=0.001, rot=(0, math.radians(90), 0), verts=48))
    parts.append(cube("lan", (0.006, 0.016, 0.013), (-W_ / 2 + 0.0015, 0.0, 0.035), dark, bevel=0.0008))
    bpy.ops.object.text_add(location=(-W_ / 2 - 0.0002, 0.024, 0.225), rotation=(math.radians(90), 0, math.radians(-90)))
    t = bpy.context.active_object
    t.data.body, t.data.size, t.data.extrude = "heima", 0.014, 0.0004
    t.data.materials.append(mat("engrave", (0.22, 0.12, 0.05), 0.7))
    parts.append(t)
    for p in parts:
        p.location.x += x
        p.location.y += y
    if rotz:
        bpy.ops.object.empty_add(location=(x, y, 0))
        pivot = bpy.context.active_object
        for p in parts:
            p.parent = pivot
            p.matrix_parent_inverse = pivot.matrix_world.inverted()
        pivot.rotation_euler.z = rotz

# ---------- environments ----------
def sweep(color=(0.80, 0.80, 0.79)):
    """Seamless curved studio backdrop."""
    prof = [(-3.0, 0.0), (1.0, 0.0)]
    for i in range(1, 17):
        t = math.radians(90 * i / 16)
        prof.append((1.0 + math.sin(t), 1.0 - math.cos(t)))
    prof.append((2.0, 3.0))
    verts = [(x, y, z) for x in (-3.0, 3.0) for (y, z) in prof]
    n = len(prof)
    faces = [(i, i + 1, n + i + 1, n + i) for i in range(n - 1)]
    mesh_from("sweep", verts, faces, mat("backdrop", color, rough=0.95))

def studio(key=40, fill=10, rim=22):
    sweep()
    world((0.55, 0.57, 0.6), 0.15)
    area_light("key", (-0.9, -0.8, 1.0), (0, 0, 0.12), key, 1.2, (1.0, 0.95, 0.9))
    area_light("fill", (1.0, -0.6, 0.5), (0, 0, 0.12), fill, 1.5, (0.85, 0.9, 1.0))
    area_light("rim", (0.3, 0.9, 0.8), (0, 0, 0.12), rim, 0.8)

def bookshelf(evening):
    wall = mat("wall", (0.30, 0.34, 0.32) if evening else (0.42, 0.46, 0.44), rough=0.9)
    bpy.ops.mesh.primitive_plane_add(size=6, location=(0, 0.17, 1.0), rotation=(math.radians(90), 0, 0))
    bpy.context.active_object.data.materials.append(wall)
    cube("shelf", (1.6, 0.3, 0.03), (0, 0.02, -0.015),
         mat_wood("shelfwood", (0.66, 0.47, 0.29), (0.45, 0.29, 0.15), (0.15, 4, 4), direction="X"), bevel=0.002)
    palette = [(0.09, 0.17, 0.13), (0.42, 0.14, 0.08), (0.08, 0.1, 0.2), (0.72, 0.66, 0.55),
               (0.2, 0.2, 0.21), (0.55, 0.36, 0.12), (0.3, 0.08, 0.1), (0.62, 0.6, 0.58)]
    def row(x0, direction, n):
        x = x0
        for i in range(n):
            t, hh, dd = random.uniform(0.022, 0.045), random.uniform(0.2, 0.29), random.uniform(0.15, 0.2)
            x += direction * (t / 2)
            cube(f"book{x0}_{i}", (t, dd, hh), (x, 0.0, hh / 2),
                 mat(f"bm{x0}_{i}", random.choice(palette), rough=random.uniform(0.5, 0.8)), bevel=0.0025)
            x += direction * (t / 2 + 0.0015)
    row(-0.07, -1, 9)
    row(0.075, 1, 4)
    for i, c in enumerate([(0.62, 0.6, 0.58), (0.09, 0.17, 0.13), (0.42, 0.14, 0.08)]):
        cube(f"flat{i}", (0.2, 0.15, 0.025), (0.36, 0.0, 0.0125 + i * 0.026), mat(f"fm{i}", c, 0.7), bevel=0.002)
    cyl("vase", 0.04, 0.14, (0.36, 0.0, 0.078 + 0.07), mat("vase", (0.55, 0.5, 0.44), rough=0.5, coat=0.2), bevel=0.01)
    heima_box()
    if evening:
        world((0.02, 0.03, 0.07), 0.08)
        area_light("lamp", (-0.7, -0.55, 0.55), (0, 0, 0.12), 22, 0.4, (1.0, 0.66, 0.38))
        area_light("dusk", (1.3, -1.0, 0.9), (0, 0, 0.15), 6, 1.5, (0.45, 0.55, 0.95))
    else:
        world((0.75, 0.8, 0.9), 0.35)
        area_light("window", (1.4, -1.0, 1.0), (0, 0, 0.15), 60, 1.8, (0.95, 0.97, 1.0))
        area_light("bounce", (-0.6, -1.4, 0.4), (0, 0, 0.15), 10, 2.0, (1.0, 0.95, 0.9))

def table_scene():
    world((0.7, 0.75, 0.82), 0.3)
    cube("table", (2.0, 1.2, 0.04), (0, 0.2, -0.02),
         mat_wood("tablewood", (0.30, 0.20, 0.13), (0.16, 0.10, 0.06), (0.1, 3, 3), direction="X"), bevel=0.002)
    bpy.ops.mesh.primitive_plane_add(size=6, location=(0, 0.75, 1.0), rotation=(math.radians(90), 0, 0))
    bpy.context.active_object.data.materials.append(mat("wall", (0.42, 0.46, 0.44), rough=0.9))
    area_light("window", (1.3, -0.9, 1.0), (0, 0.1, 0.1), 55, 1.8, (0.95, 0.97, 1.0))
    area_light("fill", (-0.9, -1.0, 0.6), (0, 0.1, 0.1), 12, 2.0, (1.0, 0.93, 0.85))

def phone(loc, rotz, tilt):
    body = cube("phone", (0.0715, 0.147, 0.0082), loc, mat("alu", (0.12, 0.13, 0.15), 0.3, metallic=0.8), bevel=0.006, rot=(tilt, 0, rotz))
    screen_path = os.path.join(HERE, "out", "phone_screen.png")
    bpy.ops.mesh.primitive_plane_add(size=1, location=loc, rotation=(tilt, 0, rotz))
    s = bpy.context.active_object
    s.scale = (0.0665, 0.1425, 1)
    bpy.ops.object.transform_apply(scale=True)
    s.location += s.matrix_world.to_3x3() @ Vector((0, 0, 0.0043))
    s.data.materials.append(mat_image("screen", screen_path))
    # flip UV vertically isn't needed: plane UVs map image upright along +y

def mug(loc):
    cer = mat("mug", (0.82, 0.8, 0.76), rough=0.35, coat=0.3)
    cyl("mug", 0.042, 0.095, (loc[0], loc[1], 0.0475), cer, bevel=0.004)
    cyl("coffee", 0.038, 0.002, (loc[0], loc[1], 0.09), mat("coffee", (0.08, 0.04, 0.02), 0.1), bevel=0)
    bpy.ops.mesh.primitive_torus_add(major_radius=0.026, minor_radius=0.0065, location=(loc[0] + 0.046, loc[1], 0.05), rotation=(math.radians(90), 0, 0))
    finish(bpy.context.active_object, cer, bevel=0)

# ---------- shots ----------
if SHOT == "hero":
    studio(); heima_box(rotz=math.radians(-8))
    camera((0.68, -1.0, 0.42), (0, 0, H_ * 0.45), lens=50)
elif SHOT == "detail":
    studio(key=30, fill=8, rim=14); heima_box()
    camera((0.40, -0.24, 0.12), (W_ / 2, -0.02, 0.06), lens=70, fstop=3.2)
elif SHOT == "shelf-evening":
    bookshelf(evening=True)
    camera((0.22, -1.25, 0.32), (0.04, 0, H_ * 0.62), lens=45)
elif SHOT == "shelf-day":
    bookshelf(evening=False)
    camera((0.22, -1.25, 0.32), (0.04, 0, H_ * 0.62), lens=45)
elif SHOT == "back":
    studio(); heima_box()
    camera((-0.75, -0.62, 0.33), (-W_ / 2, 0, H_ * 0.35), lens=55)
elif SHOT == "phone":
    table_scene(); heima_box(x=-0.09, y=0.16, rotz=math.radians(-15))
    phone((0.07, -0.03, 0.0041), math.radians(12), 0)
    camera((0.22, -0.6, 0.44), (-0.02, 0.04, 0.09), lens=36, fstop=4.5)
elif SHOT == "size":
    table_scene(); heima_box(x=0.0, y=0.1)
    mug((0.16, 0.02))
    cube("hardcover", (0.16, 0.235, 0.028), (-0.2, 0.05, 0.014), mat("cover", (0.09, 0.17, 0.13), 0.6), bevel=0.003)
    camera((0.15, -0.95, 0.28), (-0.01, 0.06, 0.11), lens=45)
else:
    raise SystemExit(f"unknown shot {SHOT}")

scene.render.filepath = OUT
bpy.ops.render.render(write_still=True)
print("WROTE", OUT)
