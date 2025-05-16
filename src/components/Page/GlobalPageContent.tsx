"use client";

import { NavColorContext } from "@/utils/context";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import Cursor from "../Cursor/Cursor";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";

function GlobalPageContent({
  children,
  navBar,
}: {
  children: ReactNode;
  navBar: ReactElement;
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
        <Footer />
      </div>
    </NavColorContext.Provider>
  );
}

export default GlobalPageContent;
