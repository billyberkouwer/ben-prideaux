"use client";

import { NavColorContext } from "@/utils/context";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import Cursor from "../Cursor/Cursor";
import { usePathname } from "next/navigation";

function PageWrapper({
  children,
  navBar,
  footer,
}: {
  children: ReactNode;
  navBar: ReactElement;
  footer: ReactElement;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavLight, setIsNavLight] = useState(false);
  const [isNavFixed, setIsNavFixed] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <NavColorContext.Provider
      value={{
        isNavLight,
        setIsNavLight,
        isMenuOpen,
        setIsMenuOpen,
        isNavFixed,
        setIsNavFixed,
      }}
    >
      <Cursor />
      <div className={`page__wrapper ${isMenuOpen ? "open" : ""}`}>
        {navBar}
        <div
          className="page-content__container"
          onClick={() => {
            if (isMenuOpen) {
              setIsMenuOpen(false);
            }
          }}
        >
          <>{children}</>
        </div>
        {footer}
      </div>
    </NavColorContext.Provider>
  );
}

export default PageWrapper;
