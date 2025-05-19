"use client";

import { NavColorContext } from "@/utils/context";
import Link from "next/link";
import { useContext } from "react";

function MenuList({ navMenuItems }: { navMenuItems: NavMenuItem[] | null }) {
  return (
    <div className={`menu-list__container`}>
      <h4>Index</h4>
      <ul>
        {navMenuItems?.map((menuItem, i) => (
          <li key={menuItem.title + i}>
            <Link href={"/" + menuItem.slug}>{menuItem.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
