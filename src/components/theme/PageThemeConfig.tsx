"use client";

import { NavColorContext } from "@/utils/context";
import { useContext, useEffect, useLayoutEffect } from "react";

function setCssVariable(variableName: string, value: string) {
  document.documentElement.style.setProperty(`--${variableName}`, value);
}

function PageThemeConfig({
  backgroundCol,
  foregroundCol,
  isNavFixed = true,
}: {
  backgroundCol: string;
  foregroundCol: string;
  isNavFixed?: boolean;
}) {
  const { setIsNavFixed } = useContext(NavColorContext);

  useLayoutEffect(() => {
    setIsNavFixed(isNavFixed);
  }, [isNavFixed, setIsNavFixed]);

  useEffect(() => {
    setCssVariable("background", backgroundCol);
    setCssVariable("foreground", foregroundCol);
  }, [backgroundCol, foregroundCol]);

  return null;
}

export default PageThemeConfig;
