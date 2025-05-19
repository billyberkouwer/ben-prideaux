"use client";

import { setCssVariable } from "@/helpers";
import { NavColorContext } from "@/utils/context";
import { ReactNode, useContext, useEffect, useRef } from "react";

export default function NavContainer({ children }: { children: ReactNode }) {
  const { isNavLight, isMenuOpen } = useContext(NavColorContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navBar = navRef.current;
    const height = navBar?.getBoundingClientRect().height;
    setCssVariable("navbar-height", (height ?? 37) + "px");

    const resizeObserver = new ResizeObserver(() => {
      const height = navBar?.getBoundingClientRect().height;
      setCssVariable("navbar-height", (height ?? 37) + "px");
    });

    if (navBar) {
      resizeObserver.observe(navBar);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <nav
      ref={navRef}
      id="navbar"
      className={`nav-bar__container container-fluid ${isMenuOpen ? "visible" : ""} ${isNavLight ? "nav-light" : ""}`}
    >
      {children}
    </nav>
  );
}
