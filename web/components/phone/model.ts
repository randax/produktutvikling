// Screens, flows and state for the clickable Heima-appen prototype. Sample data only.

export type Tab = "Bilete" | "Dokument" | "Spør" | "Familie";

export type ScreenId =
  | "start-1"
  | "start-2"
  | "start-3"
  | "start-4"
  | "start-5"
  | "start-6"
  | "home"
  | "search-1"
  | "search-2"
  | "search-3"
  | "fam-1"
  | "fam-2"
  | "fam-3"
  | "fam-4"
  | "fam-5"
  | "brev-1"
  | "brev-2"
  | "brev-3"
  | "brev-4"
  | "brev-src"
  | "spor-1"
  | "spor-2"
  | "kven-1"
  | "kven-export";

interface ScreenMeta {
  /** Announced to screen readers when the screen changes. */
  title: string;
  /** Which tab is active in the tab bar. Screens without a tab show no tab bar. */
  tab?: Tab;
  /** Moves on by itself after `ms` (scanning, Face ID, sending…). */
  auto?: { to: ScreenId; ms: number };
}

export const SCREENS: Record<ScreenId, ScreenMeta> = {
  "start-1": { title: "Velkomen til Heima" },
  "start-2": { title: "Skann koden under boksen", auto: { to: "start-3", ms: 1800 } },
  "start-3": { title: "Lag familienøkkelen" },
  "start-4": { title: "Ser på deg", auto: { to: "start-5", ms: 1500 } },
  "start-5": { title: "Familienøkkelen er klar" },
  "start-6": { title: "Heima tek vare på bileta dine" },
  home: { title: "Bilete", tab: "Bilete" },
  "search-1": { title: "Finn bilete", tab: "Bilete" },
  "search-2": { title: "Fann 23 bilete", tab: "Bilete" },
  "search-3": { title: "Lagt til i Familiealbumet", tab: "Bilete" },
  "fam-1": { title: "Familien", tab: "Familie" },
  "fam-2": { title: "Kven vil du invitere?", tab: "Familie" },
  "fam-3": { title: "Invitasjonen er send", tab: "Familie", auto: { to: "fam-1", ms: 1900 } },
  "fam-4": { title: "Inviter bestemor", tab: "Familie" },
  "fam-5": { title: "Invitasjonen er send", tab: "Familie", auto: { to: "fam-1", ms: 1700 } },
  "brev-1": { title: "Dokument", tab: "Dokument" },
  "brev-2": { title: "Hald brevet inne i ramma", tab: "Dokument" },
  "brev-3": { title: "Heima les brevet", tab: "Dokument", auto: { to: "brev-4", ms: 1800 } },
  "brev-4": { title: "Vedtak om foreldrepengar", tab: "Dokument" },
  "brev-src": { title: "Originalbrevet", tab: "Dokument" },
  "spor-1": { title: "Spør Heima", tab: "Spør" },
  "spor-2": { title: "Spør Heima", tab: "Spør" },
  "kven-1": { title: "Hytta, juli 2019", tab: "Bilete" },
  "kven-export": { title: "Ta med deg alt", tab: "Bilete" },
};

export const FLOWS = [
  {
    id: "start",
    first: "start-1",
    title: "Kom i gang",
    desc: "Skann boksen og lag familienøkkelen",
  },
  {
    id: "fam",
    first: "fam-1",
    title: "Inviter familien",
    desc: "Ola og bestemor får kvar sin nøkkel",
  },
  {
    id: "search",
    first: "search-1",
    title: "Finn bilete",
    desc: "«bestemor på hytta sommaren 2019»",
  },
  { id: "brev", first: "brev-1", title: "Forstå eit brev", desc: "Eit brev frå NAV, forklart" },
  { id: "spor", first: "spor-1", title: "Spør om dokumenta", desc: "«Når går garantien ut?»" },
  {
    id: "kven",
    first: "kven-1",
    title: "Kven kan sjå dette?",
    desc: "Tilgang, Heima-lovnaden og eksport",
  },
] as const satisfies readonly { id: string; first: ScreenId; title: string; desc: string }[];

export type Flow = (typeof FLOWS)[number];
export type FlowId = Flow["id"];

/** The flow a screen belongs to. The home screen belongs to none. */
export function flowOf(screen: ScreenId): FlowId | null {
  const prefix = screen.split("-")[0];
  return FLOWS.find((f) => f.id === prefix)?.id ?? null;
}

export interface Member {
  name: string;
  role: string;
  color: string;
}

const KARI: Member = { name: "Kari", role: "Deg", color: "#B5690F" };
const OLA: Member = { name: "Ola", role: "Partnar", color: "#3E5468" };
const ANNE: Member = { name: "Anne", role: "Bestemor", color: "#4E6B53" };

export interface PhoneState {
  screen: ScreenId;
  members: Member[];
  /** Photos picked in the search result. */
  selected: number[];
  /** How many photos the last «Legg til» added. */
  lastAdded: number;
  toast: string | null;
  sheetOpen: boolean;
}

export type PhoneAction =
  | { type: "go"; to: ScreenId; toast?: string }
  | { type: "toggle"; index: number }
  | { type: "sheet"; open: boolean }
  | { type: "clearToast" }
  | { type: "reset"; to: ScreenId };

export function initialState(screen: ScreenId): PhoneState {
  return { screen, members: [KARI], selected: [], lastAdded: 0, toast: null, sheetOpen: false };
}

const withMember = (members: Member[], m: Member) =>
  members.some((x) => x.name === m.name) ? members : [...members, m];

export function phoneReducer(state: PhoneState, action: PhoneAction): PhoneState {
  switch (action.type) {
    case "go": {
      const next: PhoneState = {
        ...state,
        screen: action.to,
        sheetOpen: false,
        toast: action.toast ?? null,
      };
      // Invitations add the Member once their SMS is «sent».
      if (action.to === "fam-3") next.members = withMember(state.members, OLA);
      if (action.to === "fam-5") next.members = withMember(state.members, ANNE);
      if (action.to === "search-3") {
        next.lastAdded = state.selected.length || 3;
        next.selected = [];
      }
      return next;
    }
    case "toggle":
      return {
        ...state,
        selected: state.selected.includes(action.index)
          ? state.selected.filter((i) => i !== action.index)
          : [...state.selected, action.index],
      };
    case "sheet":
      return { ...state, sheetOpen: action.open };
    case "clearToast":
      return { ...state, toast: null };
    case "reset":
      return initialState(action.to);
  }
}
