"use client"

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function PageTitle({menuItems}: {menuItems: NavMenuItem[]}) {
    const pathname = usePathname();

    const menuItem = useMemo(() => {
        return menuItems.find((item) => "/" + item.slug === pathname)
    }, [menuItems, pathname])

  return <span className="page-title-nav-text">{menuItem?.title}</span>;
}
