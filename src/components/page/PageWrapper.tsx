"use client";

import { ReactNode, useState } from "react";
import PageThemeConfig from "../theme/PageThemeConfig";
import NavBar from "../nav/NavBar";
import "./page-wrapper.scss";
import { NavColorContext } from "@/utils/context";
import SmoothScroll from "../smoothScroll/SmoothScroll";
import Footer from "../footer/Footer";
import Cursor from "../cursor/Cursor";

function PageWrapper({
  backgroundCol,
  foregroundCol,
  children,
  fixedNav,
}: {
  backgroundCol: string;
  foregroundCol: string;
  children: ReactNode;
  fixedNav?: boolean;
}) {
  const [isNavLight, setIsNavLight] = useState(false);

  return (
    <NavColorContext.Provider value={{ isNavLight, setIsNavLight }}>
      <Cursor />
      {/* <SmoothScroll> */}
      <div className="page__wrapper">
        <NavBar isFixed={fixedNav} />
        <PageThemeConfig
          backgroundCol={backgroundCol}
          foregroundCol={foregroundCol}
        />
        <>{children}</>
        <Footer />
      </div>
      {/* </SmoothScroll> */}
    </NavColorContext.Provider>
  );
}

export default PageWrapper;
