"use client";

import { NavColorContext } from "@/utils/context";
import { useContext, useEffect, useLayoutEffect } from "react";

function setCssVariable(variableName: string, value: string) {
  document.documentElement.style.setProperty(`--${variableName}`, value);
}

function PageThemeConfig({
  backgroundCol = "white",
  foregroundCol = "black",
  isNavFixed = true,
}: {
  backgroundCol: string;
  foregroundCol: string;
  isNavFixed?: boolean;
}) {
  const { setIsNavFixed } = useContext(NavColorContext);

  useEffect(() => {
    setIsNavFixed(isNavFixed);
  }, [isNavFixed, setIsNavFixed]);

  useEffect(() => {
    setCssVariable("background", backgroundCol);
    setCssVariable("foreground", foregroundCol);
  }, [backgroundCol, foregroundCol]);

  return null;
}

export default PageThemeConfig;
