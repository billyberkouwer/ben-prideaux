"use client"

import { NavColorContext } from "@/utils/context";
import { ReactNode, useContext } from "react";

export default function NavContainer({
  children,
}: {
  children: ReactNode;
}) {
  const { isNavLight, isNavFixed } = useContext(NavColorContext);

  return (
    <nav
      className={`nav-bar__container container-fluid ${
        isNavFixed ? "fixed" : ""
      } ${isNavLight ? "nav-light" : ""}`}
    >
      {children}
    </nav>
  );
}
