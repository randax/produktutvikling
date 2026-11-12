export const PACKAGE_IDS = ["2tb", "4tb"] as const;
export type PackageId = (typeof PACKAGE_IDS)[number];

export function isPackageId(value: unknown): value is PackageId {
  return PACKAGE_IDS.some((id) => id === value);
}

export interface HeimaPackage {
  id: PackageId;
  /** Shown after «Heima», e.g. «Heima 2 TB». */
  size: string;
  recommended: boolean;
  forWho: string;
  boxPrice: string;
  subscription: string;
}

export const PACKAGES: readonly HeimaPackage[] = [
  {
    id: "2tb",
    size: "2 TB",
    recommended: true,
    forWho: "Dei fleste familiar.",
    boxPrice: "7 990 kr",
    subscription: "+ 89 kr/mnd",
  },
  {
    id: "4tb",
    size: "4 TB",
    recommended: false,
    forWho: "Familiar med mykje video eller mange år med bilete.",
    boxPrice: "9 490 kr",
    subscription: "+ 129 kr/mnd",
  },
];

export const PACKAGE_INCLUDED = "Tryggleikskopi av alt i Noreg, oppdateringar og assistenten.";
export const PRICE_NOTE =
  "Estimerte prisar inkl. mva. Prisen er ikkje endeleg. Boksen kan delbetalast.";

export function packageName(id: PackageId): string {
  const pkg = PACKAGES.find((p) => p.id === id);
  return `Heima ${pkg?.size ?? id}`;
}
