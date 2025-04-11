import { createContext } from "react";

export const NavColorContext = createContext<{
  isNavLight: boolean;
  setIsNavLight: (arg: boolean) => void;
}>({ isNavLight: true, setIsNavLight: () => {} });
