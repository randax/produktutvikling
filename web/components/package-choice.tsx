"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { createContext, use, useEffect, useState, type ReactNode } from "react";
import { isPackageId, packageName, type PackageId } from "@/lib/packages";
import { buttonClass } from "./ui";

interface PackageChoice {
  pakke: PackageId;
  choose: (id: PackageId) => void;
}

const PackageContext = createContext<PackageChoice | null>(null);

/**
 * Remembers which Package the Buyer picked, across client navigations, so a
 * «Reserver Heima 4 TB» button on any page preselects it in the form on /.
 * Also honours `/?pakke=4tb` on a full page load.
 */
export function PackageProvider({ children }: { children: ReactNode }) {
  const [pakke, setPakke] = useState<PackageId>("2tb");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("pakke");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-off sync from the URL after hydration
    if (isPackageId(fromUrl)) setPakke(fromUrl);
  }, []);

  const choose = (id: PackageId) => {
    setPakke(id);
    track("package_selected", { pakke: id });
  };

  return <PackageContext value={{ pakke, choose }}>{children}</PackageContext>;
}

export function usePackageChoice(): PackageChoice {
  const choice = use(PackageContext);
  if (!choice) throw new Error("usePackageChoice must be used inside <PackageProvider>");
  return choice;
}

export function ReservePackageButton({ id, primary }: { id: PackageId; primary: boolean }) {
  const { choose } = usePackageChoice();
  return (
    <Link
      href={`/?pakke=${id}#reserver`}
      onClick={() => choose(id)}
      className={buttonClass(primary ? "primary" : "ghost", "w-full sm:w-auto")}
    >
      Reserver {packageName(id)}
    </Link>
  );
}
