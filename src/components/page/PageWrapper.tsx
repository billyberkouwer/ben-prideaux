import { ReactNode } from "react";
import PageThemeConfig from "../theme/PageThemeConfig";
import NavBar from "../nav/NavBar";
import "./page-wrapper.scss";

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
  return (
    <>
      <NavBar isFixed={fixedNav} />
      <PageThemeConfig
        backgroundCol={backgroundCol}
        foregroundCol={foregroundCol}
      />
      <div>
        {children}
      </div>
    </>
  );
}

export default PageWrapper;
