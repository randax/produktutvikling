# PROTOTYPE – throwaway. Renders Heima-boksen design directions in Blender.
# Usage: blender -b -P render.py -- <direction A|B|C> <scene product|shelf> <out.png> [samples]
import sys, math, random
import bpy
from mathutils import Vector

argv = sys.argv[sys.argv.index("--") + 1:]
DIRECTION, SCENE, OUT = argv[0], argv[1], argv[2]
SAMPLES = int(argv[3]) if len(argv) > 3 else 128
random.seed(7)

# ---------- reset ----------
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
scene.render.engine = "CYCLES"
scene.cycles.samples = SAMPLES
scene.cycles.use_denoising = True
scene.render.resolution_x, scene.render.resolution_y = int(argv[4]) if len(argv) > 4 else 1200, int(int(argv[4]) * 0.625) if len(argv) > 4 else 750
scene.render.film_transparent = False
try:
    prefs = bpy.context.preferences.addons["cycles"].preferences
    prefs.compute_device_type = "METAL"
    prefs.get_devices()
    for d in prefs.devices:
        d.use = True
    scene.cycles.device = "GPU"
except Exception as e:  # CPU fallback
    print("GPU setup failed:", e)

# ---------- helpers ----------
def mat(name, color, rough=0.5, coat=0.0, metallic=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*color, 1)
    b.inputs["Roughness"].default_value = rough
    b.inputs["Metallic"].default_value = metallic
    if coat:
        b.inputs["Coat Weight"].default_value = coat
    return m

def mat_emit(name, color=(1.0, 0.58, 0.2), strength=12.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*color, 1)
    b.inputs["Emission Color"].default_value = (*color, 1)
    b.inputs["Emission Strength"].default_value = strength
    return m

def mat_wood(name, light=(0.62, 0.42, 0.24), dark=(0.38, 0.22, 0.11), scale=(1, 1, 1), rough=0.42):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    tc = nt.nodes.new("ShaderNodeTexCoord")
    mp = nt.nodes.new("ShaderNodeMapping")
    mp.inputs["Scale"].default_value = scale
    wv = nt.nodes.new("ShaderNodeTexWave")
    wv.bands_direction = "Y"
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
    l = nt.links.new
    l(tc.outputs["Object"], mp.inputs["Vector"])
    l(mp.outputs["Vector"], wv.inputs["Vector"])
    l(mp.outputs["Vector"], nz.inputs["Vector"])
    l(wv.outputs["Fac"], mix.inputs[2])
    l(nz.outputs["Fac"], mix.inputs[3])
    l(mix.outputs[0], ramp.inputs["Fac"])
    l(ramp.outputs["Color"], b.inputs["Base Color"])
    b.inputs["Roughness"].default_value = rough
    b.inputs["Coat Weight"].default_value = 0.15
    return m

def finish(obj, material=None, bevel=0.004, segs=5):
    if bevel:
        mod = obj.modifiers.new("bevel", "BEVEL")
        mod.width = bevel
        mod.segments = segs
        mod.limit_method = "ANGLE"
    for p in obj.data.polygons:
        p.use_smooth = True
    try:
        bpy.context.view_layer.objects.active = obj
        obj.select_set(True)
        bpy.ops.object.shade_auto_smooth(angle=math.radians(35))
        obj.select_set(False)
    except Exception:
        pass
    if material:
        obj.data.materials.append(material)
    return obj

def cube(name, size, loc, material=None, bevel=0.004, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc, rotation=rot)
    o = bpy.context.active_object
    o.name = name
    o.scale = size
    bpy.ops.object.transform_apply(scale=True)
    return finish(o, material, bevel)

def cyl(name, r, h, loc, material=None, bevel=0.004, verts=96):
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=h, location=loc, vertices=verts)
    o = bpy.context.active_object
    o.name = name
    return finish(o, material, bevel)

def mesh_from(name, verts, faces, material=None, bevel=0.004):
    me = bpy.data.meshes.new(name)
    me.from_pydata(verts, [], faces)
    me.update()
    o = bpy.data.objects.new(name, me)
    bpy.context.collection.objects.link(o)
    return finish(o, material, bevel)

def area_light(name, loc, target, energy, size, color=(1, 1, 1)):
    bpy.ops.object.light_add(type="AREA", location=loc)
    lt = bpy.context.active_object
    lt.name = name
    lt.data.energy = energy
    lt.data.size = size
    lt.data.color = color
    d = Vector(target) - Vector(loc)
    lt.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()
    return lt

def camera(loc, target, lens=55):
    bpy.ops.object.camera_add(location=loc)
    cam = bpy.context.active_object
    cam.data.lens = lens
    d = Vector(target) - Vector(loc)
    cam.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()
    cam.data.dof.use_dof = True
    cam.data.dof.focus_distance = d.length
    cam.data.dof.aperture_fstop = 4.0
    scene.camera = cam
    return cam

def world(color, strength):
    w = bpy.data.worlds.new("world")
    w.use_nodes = True
    bg = w.node_tree.nodes["Background"]
    bg.inputs["Color"].default_value = (*color, 1)
    bg.inputs["Strength"].default_value = strength
    scene.world = w

# ---------- the three directions (all sit on z=0, centred on x=y=0) ----------
AMBER = mat_emit("amber")

def build_A():
    """A – «Boka»: a solid oak block the size of a book, standing on the shelf like a spine.
    A thin amber slit glows low on the front."""
    oak = mat_wood("oak", light=(0.55, 0.36, 0.2), dark=(0.3, 0.17, 0.08), scale=(1.5, 1.5, 0.12))
    w, d, h = 0.075, 0.21, 0.27
    cube("body", (w, d, h), (0, 0, h / 2), oak, bevel=0.006)
    cube("slit", (0.004, d * 0.62, 0.006), (w / 2 - 0.0012, 0, 0.045), AMBER, bevel=0.0015)
    cube("foot", (w * 0.86, d * 0.9, 0.006), (0, 0, 0.003), mat("felt", (0.05, 0.05, 0.05), 0.95), bevel=0.001)
    return h

def build_B():
    """B – «Lykta»: a matte wool-white ceramic lantern. The light leaks out of a gap between body and lid."""
    ceramic = mat("ceramic", (0.86, 0.85, 0.82), rough=0.38, coat=0.35)
    r = 0.078
    cyl("body", r, 0.165, (0, 0, 0.0825), ceramic, bevel=0.01)
    cyl("glow", r - 0.006, 0.012, (0, 0, 0.171), AMBER, bevel=0.0)
    cyl("lid", r, 0.05, (0, 0, 0.202), ceramic, bevel=0.012)
    return 0.227

def build_C():
    """C – «Huset»: a small house in evening-blue painted wood, with a lit window. The lamp in the window."""
    paint = mat("paint", (0.055, 0.085, 0.15), rough=0.55, coat=0.1)
    w, d, h, roof = 0.17, 0.12, 0.12, 0.07
    cube("walls", (w, d, h), (0, 0, h / 2), paint, bevel=0.004)
    hw, hd = w / 2 + 0.008, d / 2 + 0.006
    verts = [(-hw, -hd, h), (hw, -hd, h), (0, -hd, h + roof),
             (-hw, hd, h), (hw, hd, h), (0, hd, h + roof)]
    faces = [(0, 1, 2), (5, 4, 3), (0, 3, 4, 1), (1, 4, 5, 2), (2, 5, 3, 0)]
    mesh_from("roof", verts, faces, mat_wood("roofwood", light=(0.5, 0.33, 0.19), dark=(0.3, 0.18, 0.09), scale=(0.2, 3, 3)), bevel=0.003)
    # window on the front (-y)
    win = 0.05
    cube("window", (win, 0.004, win), (0.03, -d / 2 - 0.0005, 0.065), AMBER, bevel=0.0)
    frame = mat("frame", (0.85, 0.84, 0.8), rough=0.6)
    cube("bar_v", (0.004, 0.006, win), (0.03, -d / 2 - 0.002, 0.065), frame, bevel=0.0)
    cube("bar_h", (win, 0.006, 0.004), (0.03, -d / 2 - 0.002, 0.065), frame, bevel=0.0)
    cube("door", (0.03, 0.004, 0.06), (-0.045, -d / 2 - 0.0005, 0.03), mat("door", (0.035, 0.055, 0.1), 0.6), bevel=0.001)
    return h + roof

BUILD = {"A": build_A, "B": build_B, "C": build_C}

# ---------- scenes ----------
def product_scene():
    backdrop = mat("backdrop", (0.80, 0.80, 0.79), rough=0.95)
    # seamless sweep: floor + curved wall
    bpy.ops.mesh.primitive_plane_add(size=6, location=(0, 0, 0))
    floor = bpy.context.active_object
    floor.data.materials.append(backdrop)
    bpy.ops.mesh.primitive_cylinder_add(radius=1.0, depth=6, location=(0, 1.2, 1.0), rotation=(0, math.radians(90), 0), vertices=128)
    sweep = bpy.context.active_object
    sweep.data.materials.append(backdrop)
    bpy.ops.mesh.primitive_plane_add(size=6, location=(0, 2.2, 3), rotation=(math.radians(90), 0, 0))
    bpy.context.active_object.data.materials.append(backdrop)
    world((0.55, 0.57, 0.6), 0.15)
    area_light("key", (-0.9, -0.8, 1.0), (0, 0, 0.12), 40, 1.2, (1.0, 0.95, 0.9))
    area_light("fill", (1.0, -0.6, 0.5), (0, 0, 0.12), 10, 1.5, (0.85, 0.9, 1.0))
    area_light("rim", (0.3, 0.9, 0.8), (0, 0, 0.12), 22, 0.8)

def shelf_scene(height):
    world((0.03, 0.045, 0.09), 0.25)  # dusk outside
    wall = mat("wall", (0.36, 0.39, 0.38), rough=0.9)  # muted green-grey paint
    bpy.ops.mesh.primitive_plane_add(size=6, location=(0, 0.17, 1.0), rotation=(math.radians(90), 0, 0))
    bpy.context.active_object.data.materials.append(wall)
    oak = mat_wood("shelf", light=(0.66, 0.47, 0.29), dark=(0.45, 0.29, 0.15), scale=(0.15, 4, 4))
    cube("shelf", (1.6, 0.3, 0.03), (0, 0.02, -0.015), oak, bevel=0.002)
    # books
    palette = [(0.09, 0.17, 0.13), (0.42, 0.14, 0.08), (0.08, 0.1, 0.2), (0.72, 0.66, 0.55),
               (0.2, 0.2, 0.21), (0.55, 0.36, 0.12), (0.3, 0.08, 0.1), (0.62, 0.6, 0.58)]
    def row(x0, direction, n):
        x = x0
        for i in range(n):
            t = random.uniform(0.022, 0.045)
            hh = random.uniform(0.2, 0.29)
            dd = random.uniform(0.15, 0.2)
            x += direction * (t / 2)
            cube(f"book{x0}_{i}", (t, dd, hh), (x, 0.0, hh / 2),
                 mat(f"bm{x0}_{i}", random.choice(palette), rough=random.uniform(0.5, 0.8)), bevel=0.0025)
            x += direction * (t / 2 + 0.0015)
    row(-0.16, -1, 9)
    row(0.17, 1, 4)
    # a small stack lying flat, and a ceramic vase
    for i, c in enumerate([(0.62, 0.6, 0.58), (0.09, 0.17, 0.13), (0.42, 0.14, 0.08)]):
        cube(f"flat{i}", (0.2, 0.15, 0.025), (0.42, 0.0, 0.0125 + i * 0.026), mat(f"fm{i}", c, 0.7), bevel=0.002)
    cyl("vase", 0.04, 0.14, (0.42, 0.0, 0.078 + 0.07), mat("vase", (0.55, 0.5, 0.44), rough=0.5, coat=0.2), bevel=0.01)
    # warm lamp off-screen left, faint cool window light right
    area_light("lamp", (-0.8, -0.6, 0.6), (0, 0, 0.1), 40, 0.5, (1.0, 0.72, 0.45))
    area_light("window", (1.2, -0.9, 0.9), (0, 0, 0.15), 18, 1.5, (0.55, 0.65, 0.95))
    area_light("bounce", (0, -1.5, 0.3), (0, 0, 0.15), 6, 2.0, (1.0, 0.85, 0.7))

h = BUILD[DIRECTION]()
if SCENE == "product":
    product_scene()
    camera((0.68, -1.0, 0.42), (0, 0, h * 0.45), lens=50)
else:
    shelf_scene(h)
    camera((0.22, -1.25, 0.24), (0.04, 0, h * 0.5), lens=45)

scene.view_settings.view_transform = "AgX"
try:
    scene.view_settings.look = "AgX - Medium High Contrast"
except Exception:
    pass
scene.render.filepath = OUT
bpy.ops.render.render(write_still=True)
print("WROTE", OUT)
