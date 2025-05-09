import { createContext } from "react";

export const NavColorContext = createContext<{
  isNavLight: boolean;
  setIsNavLight: (arg: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
}>({ isNavLight: true, setIsNavLight: () => { }, isMenuOpen: true, setIsMenuOpen: () => { } });
