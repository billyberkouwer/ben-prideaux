"use client";

import { useMemo, useState } from "react";
import ProjectListItem from "./ProjectListItem";
import { AnimatePresence, motion } from "motion/react";
import { whileInView } from "@/contants/motion";

const containerAnimations = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0 },
};

export default function ProjectList({
  projectItems,
}: {
  projectItems: ProjectListItemType[];
}) {
  const [isList, setIsList] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    string | null | undefined
  >(undefined);
  const activeProjects = useMemo(
    () =>
      selectedCategory === undefined || selectedCategory === null
        ? projectItems
        : projectItems.filter((proj) => {
            for (let i = 0; i < proj.categories.length; i++) {
              if (
                proj.categories[i].toLowerCase() ===
                selectedCategory.toLowerCase()
              ) {
                return true;
              }
            }
          }),
    [projectItems, selectedCategory]
  );
  return (
    <motion.div
      className="project-section__container"
      variants={whileInView}
      initial="initial"
      whileInView="animate"
      viewport={{once: true}}
    >
      <div style={{ marginBottom: "2rem" }}>
        <button onClick={() => setIsList(!isList)}>Change view</button>
        <button onClick={() => setSelectedCategory("Editing")}>editing</button>
        <button onClick={() => setSelectedCategory("camera")}>camera</button>
        <button onClick={() => setSelectedCategory(null)}>All</button>
      </div>
      <AnimatePresence mode="wait">
        <motion.ul
          key={isList ? "list-container" : "block-container"}
          layout="preserve-aspect"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={containerAnimations}
          className={`project-list__container row ${isList ? "gy-10" : "g-2"}`}
        >
          {activeProjects.map((projectItem, i) =>
            isList ? (
              <ProjectListItem
                key={"list-item-project-" + "is-list" + projectItem.title + i}
                isList={true}
                {...projectItem}
              />
            ) : (
              <ProjectListItem
                key={"list-item-project-" + "is-block" + projectItem.title + i}
                isList={false}
                {...projectItem}
              />
            )
          )}
        </motion.ul>
      </AnimatePresence>
    </motion.div>
  );
}
