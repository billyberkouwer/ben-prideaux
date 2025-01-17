"use client";

import { motion, useAnimate, stagger } from "motion/react";
import "./nav.scss";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isProjectListOpen, setIsProjectListOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const [isBright, setIsBright] = useState(false);

  useEffect(() => {
    if (isProjectListOpen) {
      animate("li", { opacity: 1 }, { duration: 0.5, delay: stagger(0.1) });
    } else {
      animate("li", { opacity: 0 }, { duration: 0.5 });
    }
  }, [isProjectListOpen, animate]);

  useEffect(() => {
    let scheduled = false;
    const mouseMove = () => {
      setIsBright(true);
      if (!scheduled) {
        scheduled = true;
        setTimeout(() => {
          setIsBright(false);
          scheduled = false;
        }, 6000);
      }
    };
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("touchmove", mouseMove);
    return () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("touchmove", mouseMove);
    };
  }, []);

  return (
    <motion.nav
      className={`nav__wrapper ${isBright ? "bright" : "dim"}`}
    >
      <div className="nav-list__container">
        <motion.ul
          initial={{ y: "-100%" }}
          animate={isProjectListOpen ? { y: 0 } : { y: "-100%" }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="project__list"
          ref={scope}
        >
          <li>By The Sea</li>
          <li>By The Sea</li>
          <li>By The Sea</li>
          <li>By The Sea</li>
          <li>By The Sea</li>
          <li>By The Sea</li>
          <li>By The Sea</li>
        </motion.ul>
        <ul className="nav__list">
          <li onClick={() => setIsProjectListOpen(!isProjectListOpen)}>
            Projects
          </li>
          <li>Ben Prideaux</li>
          <li>Contact</li>
        </ul>
      </div>
    </motion.nav>
  );
}
