import { useEffect } from "react";

function setCSSVariable(variableName: string, value: string | number) {
  document.documentElement.style.setProperty(variableName, `${value}`);
}

function useSetCSSVariable(variableName: string, value: string | number) {
  useEffect(() => {
    setCSSVariable(variableName, value);
  }, [variableName, value]);
}

export default useSetCSSVariable;
