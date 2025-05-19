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
        <div className="col-2">
          {navSiteData?.title ? (
            <Link href={"/"}>{navSiteData?.title}</Link>
          ) : (
            <Link href={"/"}>Portfolio</Link>
          )}
        </div>
        <div className="col-2">
          {navSiteData?.subtitle ? <span>{navSiteData?.subtitle}</span> : null}
        </div>
        <div className="col-2">
          <PageTitle menuItems={navMenuItems} />
        </div>
        <span className="menu-button__wrapper col-2 offset-4">
          <MenuButton />
        </span>
      </div>
      <MenuList navMenuItems={navMenuItems} />
    </NavContainer>
  );
}
