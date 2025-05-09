import { ReactNode } from "react";
import NavBar from "../nav/NavBar";
import "./page-wrapper.scss";
import GlobalPageContent from "./GlobalPageContent";

function PageWrapper({
  backgroundCol,
  foregroundCol,
  children,
  fixedNav,
  navContent,
}: {
  backgroundCol: string;
  foregroundCol: string;
  children: ReactNode;
  fixedNav?: boolean;
  navContent?: NavContent;
}) {
  return (
    <GlobalPageContent
      backgroundCol={backgroundCol}
      foregroundCol={foregroundCol}
      navBar={<NavBar isFixed={fixedNav} navContent={navContent} />}
    >
      {children}
    </GlobalPageContent>
  );
}

export default PageWrapper;
