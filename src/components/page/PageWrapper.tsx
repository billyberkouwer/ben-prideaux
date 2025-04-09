"use client";

import { ReactNode, useState } from "react";
import PageThemeConfig from "../theme/PageThemeConfig";
import NavBar from "../nav/NavBar";
import "./page-wrapper.scss";
import { NavColorContext } from "@/utils/context";

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
      <div className="page__wrapper">
        <NavBar isFixed={fixedNav} />
        <PageThemeConfig
          backgroundCol={backgroundCol}
          foregroundCol={foregroundCol}
        />
        <>{children}</>
      </div>
    </NavColorContext.Provider>
  );
}

export default PageWrapper;
