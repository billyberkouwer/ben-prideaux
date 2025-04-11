"use client";

import Link from "next/link";
import "./nav-bar.scss";
import MenuButton from "./MenuButton";
import { useContext } from "react";
import { NavColorContext } from "@/utils/context";

export default function NavBar({ isFixed }: { isFixed?: boolean }) {
  const { isNavLight } = useContext(NavColorContext);

  return (
    <nav
      className={`nav-bar__container container-fluid ${
        isFixed ? "fixed" : ""
      } ${isNavLight ? "nav-light" : ""}`}
    >
      <div className="row  ">
        <div className="col-4">
          <Link href={"/"}>Ben Prideaux</Link>
        </div>
        <div className="col-4">
          <span>Video Editor</span>
        </div>
        <MenuButton />
      </div>
      <ul className="menu-list__container">
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
      </ul>
    </nav>
  );
}
