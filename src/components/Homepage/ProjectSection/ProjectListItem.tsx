"use client";

import Image from "next/image";
import "./project-list.scss";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEventListener, useInterval } from "usehooks-ts";
import { useMemo, useRef, useState } from "react";
import { ProjectListItemProps } from "@/types/Homepage";

const listAnimations = {
  initial: {
    opacity: 0,
    // x: -100,
  },
  animate: {
    opacity: 1,
    // x: 0,
  },
  exit: {
    opacity: 0,
    // x: 100,
  },
};

export default function ProjectListItem({
  title,
  date,
  roles,
  projectImages,
  slug,
  isList,
}: ProjectListItemProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xEase = useSpring(x, { bounce: 0.1 });
  const yEase = useSpring(y, { bounce: 0.1 });
  const projectItemRef = useRef<HTMLLIElement>(null);
  const isHovered = useRef(false);
  const [imageIndex, setImageIndex] = useState(0);
  const year = useMemo(() => {
    return new Date(date).getFullYear();
  }, [date]);

  useEventListener("mousemove", (e) => {
    x.set(e.x);
    y.set(e.y);
  });

  useInterval(() => {
    if (isHovered.current && projectImages?.length) {
      setImageIndex((prevIndex) => (prevIndex + 1) % projectImages?.length);
    }
  }, 2000);

  return (
    <motion.li
      className={`project-item__container  ${isList ? "col-12 margin" : "col-lg-4"}`}
      variants={listAnimations}
      ref={projectItemRef}
      onMouseEnter={() => {
        isHovered.current = true;
      }}
      onMouseLeave={() => {
        isHovered.current = false;
      }}
    >
      <Link href={"/" + slug}>
        <motion.div
          className={`project-section-images__container ${isList ? "list-view" : ""}`}
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
          {projectImages?.length ? projectImages.map((image, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={image._id + i}
              className="project-section-image__wrapper"
            >
              <Image
                alt={image?.alt ?? "Image " + (i + 1)}
                src={image?.url}
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 33vw"
                style={{
                  opacity: imageIndex === i ? 1 : 0,
                }}
              />
            </motion.div>
          )) : null}
        </motion.div>
        <div className="project-info__container">
          <h4 className="project-title">{title}</h4>
          <span className="project-year">{year}</span>
          <div className="project-category__container">
            {roles?.length ? roles.map((category, i) => (
              <div key={"category-item-" + category + i}>{category}</div>
            )) : null}
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
