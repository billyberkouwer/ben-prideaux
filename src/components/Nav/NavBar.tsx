"use server";

import Link from "next/link";
import "./nav-bar.scss";
import MenuButton from "./MenuButton";
import NavContainer from "./NavContainer";
import { sanityFetch } from "@/sanity/lib/live";
import { navListQuery, navSiteDataQuery } from "@/sanity/lib/queries";
import PageTitle from "./PageTitle";
import MenuList from "./MenuList";

export default async function NavBar() {
  const navMenuItems: NavMenuItem[] = (
    await sanityFetch({ query: navListQuery })
  ).data;

  const navSiteData = await (
    await sanityFetch({ query: navSiteDataQuery })
  ).data;

  return (
    <NavContainer>
      <div className="row">
        <div className="col-md-3 col-4 align-items-center d-flex">
          {navSiteData?.title ? (
            <Link href={"/"}>{navSiteData?.title}</Link>
          ) : (
            <Link href={"/"}>Portfolio</Link>
          )}
        </div>
        <div className="col-md-3 col-4 align-items-center d-flex">
          {navSiteData?.subtitle ? <span>{navSiteData?.subtitle}</span> : null}
        </div>
        <div className="col-md-3 col-3 align-items-center d-flex">
          <PageTitle menuItems={navMenuItems} />
        </div>
        <span className="menu-button__wrapper col-md-1 offset-md-2 col-1">
          <MenuButton />
        </span>
      </div>
      <MenuList navMenuItems={navMenuItems} />
    </NavContainer>
  );
}
