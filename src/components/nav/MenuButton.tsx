"use client";

import { useEffect, useState } from "react";

export default function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const page = document.querySelector(".page__wrapper") as
      | HTMLElement
      | undefined;

    if (page) {
      if (isMenuOpen) {
        page.classList.add("open");
      }
      if (!isMenuOpen) {
        page.classList.remove("open");
      }
    }
  }, [isMenuOpen]);
  return (
    <span className="menu-button__wrapper col-4">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</button>
    </span>
  );
}
