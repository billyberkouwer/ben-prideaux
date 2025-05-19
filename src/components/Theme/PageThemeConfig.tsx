"use client";

import { setCssVariable } from "@/helpers";
import { NavColorContext } from "@/utils/context";
import { useContext, useEffect } from "react";

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

  return <></>;
}

export default PageThemeConfig;
