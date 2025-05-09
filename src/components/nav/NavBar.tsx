"use server";

import Link from "next/link";
import "./nav-bar.scss";
import MenuButton from "./MenuButton";
import NavContainer from "./NavContainer";
import { sanityFetch } from "@/sanity/lib/live";
import { navListQuery } from "@/sanity/lib/queries";

export default async function NavBar({ isFixed, navContent }: { isFixed?: boolean, navContent?: NavContent }) {
  const navMenuItems: NavMenuItem[] = (await sanityFetch({ query: navListQuery })).data;
  return (
    <NavContainer isFixed={isFixed}>
      <div className="row">
        <div className="col-2">
          {navContent?.title ? (
            <Link href={"/"}>{navContent?.title}</Link>
          ) : (
            <Link href={"/"}>Portfolio</Link>
          )}
        </div>
        <div className="col-2">
          {navContent?.subtitle ? <span>{navContent?.subtitle}</span> : null}
        </div>
        <div className="col-2">
          {navContent?.pageTitle ? (
            <span className="page-title-nav-text">{navContent?.pageTitle}</span>
          ) : null}
        </div>
        <MenuButton />
      </div>
      <div className="menu-list__container">
        <h4>Index</h4>
        <ul>
          {navMenuItems?.map((menuItem, i) => (
            <li key={menuItem.title + i}>
              <Link href={"/new-route"}>{menuItem.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </NavContainer>
  );
}
