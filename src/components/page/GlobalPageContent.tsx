"use client";

import { NavColorContext } from "@/utils/context";
import { ReactElement, ReactNode, useState } from "react";
import Cursor from "../cursor/Cursor";
import Footer from "../footer/Footer";
import PageThemeConfig from "../theme/PageThemeConfig";

function GlobalPageContent({
  children,
  navBar,
  backgroundCol,
  foregroundCol,
}: {
  children: ReactNode;
  navBar: ReactElement;
  backgroundCol: string;
  foregroundCol: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavLight, setIsNavLight] = useState(false);

  return (
    <NavColorContext.Provider
      value={{ isNavLight, setIsNavLight, isMenuOpen, setIsMenuOpen }}
    >
      <Cursor />
      <PageThemeConfig
        backgroundCol={backgroundCol}
        foregroundCol={foregroundCol}
      />
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
      </div>
      <Footer />
    </NavColorContext.Provider>
  );
}

export default GlobalPageContent;
