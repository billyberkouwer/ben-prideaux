import { ReactNode } from "react";
import NavBar from "../Nav/NavBar";
import "./page-wrapper.scss";
import GlobalPageContent from "./GlobalPageContent";

function PageWrapper({ children }: { children: ReactNode }) {
  return <GlobalPageContent navBar={<NavBar />}>{children}</GlobalPageContent>;
}

export default PageWrapper;
