"use client"

import { useEffect } from "react";

function setCssVariable(variableName: string, value: string) {
  document.documentElement.style.setProperty(`--${variableName}`, value);
}

function PageThemeConfig({
  backgroundCol,
  foregroundCol,
}: {
  backgroundCol: string;
  foregroundCol: string;
}) {
  
  useEffect(() => {
    setCssVariable("background", backgroundCol);
    setCssVariable("foreground", foregroundCol);
  }, [backgroundCol, foregroundCol]);

  return null;
}

export default PageThemeConfig;
