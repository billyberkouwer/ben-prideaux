"use client"

import { NavColorContext } from "@/utils/context";
import { ReactNode, useContext } from "react";

export default function NavContainer({
  isFixed,
  children,
}: {
  isFixed?: boolean;
  children: ReactNode;
}) {
  const { isNavLight } = useContext(NavColorContext);

  return (
    <nav
      className={`nav-bar__container container-fluid ${
        isFixed ? "fixed" : ""
      } ${isNavLight ? "nav-light" : ""}`}
    >
      {children}
    </nav>
  );
}
