import { ReactNode } from "react";
import PageThemeConfig from "../theme/PageThemeConfig";
import NavBar from "../nav/NavBar";
import "./page-wrapper.scss"

function PageWrapper({
  backgroundCol,
  foregroundCol,
  children,
}: {
  backgroundCol: string;
  foregroundCol: string;
  children: ReactNode;
}) {
  return (
    <>
      {/* <NavBar /> */}
      <PageThemeConfig
        backgroundCol={backgroundCol}
        foregroundCol={foregroundCol}
      />
      <div className="page__wrapper">{children}</div>
    </>
  );
}

export default PageWrapper;
