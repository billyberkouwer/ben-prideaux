"use client";

import Image from "next/image";
import "./project-list.scss";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEventListener, useInterval } from "usehooks-ts";
import { useRef, useState } from "react";

const listAnimations = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 100,
  },
};

export default function ProjectListItem({
  title,
  year,
  categories,
  images,
  link,
  isList,
}: ProjectListItemProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xEase = useSpring(x, { bounce: 0.1 });
  const yEase = useSpring(y, { bounce: 0.1 });
  const projectItemRef = useRef<HTMLLIElement>(null);
  const isHovered = useRef(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEventListener("mousemove", (e) => {
    x.set(e.x);
    y.set(e.y);
  });

  useInterval(() => {
    if (isHovered.current) {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, 2000);

  return (
    <motion.li
      className={`project-item__container  ${isList ? "col-12 margin-bottom" : "col-lg-4"}`}
      variants={listAnimations}
      ref={projectItemRef}
      onMouseEnter={() => {
        isHovered.current = true;
      }}
      onMouseLeave={() => {
        isHovered.current = false;
      }}
    >
      <Link href={link}>
        <motion.div
          className={`project-images__wrapper ${isList ? "list-view" : ""}`}
          style={
            isList
              ? {
                  position: "fixed",
                  x: xEase,
                  y: yEase,
                }
              : { position: "relative" }
          }
        >
          {images.map((image, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={image + i}
            >
              <Image
                alt="anything"
                src={image}
                fill
                loading="eager"
                style={{
                  objectFit: "cover",
                  opacity: imageIndex === i ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="project-info__container">
          <h4 className="project-title">{title}</h4>
          <span className="project-year">{year}</span>
          <div className="project-category__container">
            {categories.map((category, i) => (
              <div key={"category-item-" + category + i}>{category}</div>
            ))}
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
