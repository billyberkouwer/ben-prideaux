"use client";

import { motion, useAnimate, stagger } from "motion/react";
import "./nav.scss";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navButton = {
  initial: {
    fontWeight: 400,
    duration: 0.2,
  },
  animate: {
    fontWeight: 500,
    transition: { duration: 0.2 },
  },
};

export default function Nav() {
  const [isProjectListOpen, setIsProjectListOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const [isBright, setIsBright] = useState(false);
  const nav = useRef(null);

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
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseMove);
    window.addEventListener("click", mouseMove);
    window.addEventListener("touchmove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseMove);
      window.removeEventListener("click", mouseMove);
      window.removeEventListener("touchmove", mouseMove);
    };
  }, []);

  return (
    <motion.nav
      className={`nav__wrapper ${isBright ? "bright" : "dim"}`}
      ref={nav}
    >
      <ul className="nav-list__wrapper">
        <div className="nav-list__container">
          <motion.li
            animate={!isProjectListOpen ? navButton.initial : navButton.animate}
            onClick={() => setIsProjectListOpen(!isProjectListOpen)}
          >
            Projects
          </motion.li>
          <li id="name">
            <Link href={"/"}>Ben Prideaux</Link>
          </li>
          <motion.li
            animate={!isContactOpen ? navButton.initial : navButton.animate}
            onClick={() => setIsContactOpen(!isContactOpen)}
          >
            Contact
          </motion.li>
        </div>
      </ul>
      <div className="nav-grid-content__container">
        <div className="project-list__wrapper">
          <motion.ul
            initial={{ y: "var(--project-closed)" }}
            animate={
              isProjectListOpen
                ? { y: "var(--project-open)"}
                : { y: "var(--project-closed)"  }
            }
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="project__list"
            ref={scope}
          >
            <li><Link href={"/"}>By The Sea</Link></li>
            <li><Link href={"/"}>By The Sea</Link></li>
            <li><Link href={"/"}>By The Sea</Link></li>
            <li><Link href={"/"}>By The Sea</Link></li>
            <li><Link href={"/"}>By The Sea</Link></li>
            <li><Link href={"/"}>By The Sea</Link></li>
          </motion.ul>
        </div>
        <div className="contact-form__wrapper">
          <motion.ul
            initial={{ y: "var(--contact-closed)" }}
            animate={
              isContactOpen
                ? { y: "var(--contact-open)" }
                : { y: "var(--contact-closed)" }
            }
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="contact-form__container"
          >
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Submit</button>
            </form>
          </motion.ul>
        </div>
      </div>
    </motion.nav>
  );
}
