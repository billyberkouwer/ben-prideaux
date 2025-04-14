"use client";

import { useMemo } from "react";
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
  isList,
  selectedCategory
}: {
  projectItems: ProjectListItemType[];
  isList: boolean;
  selectedCategory: string | null | undefined;
}) {
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
      viewport={{ once: true }}
    >
      <AnimatePresence mode="wait">
        <motion.ul
          key={isList ? "list-container" : "block-container"}
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
                selectedCategory={selectedCategory}
              />
            ) : (
              <ProjectListItem
                key={"list-item-project-" + "is-block" + projectItem.title + i}
                isList={false}
                {...projectItem}
                selectedCategory={selectedCategory}
              />
            )
          )}
        </motion.ul>
      </AnimatePresence>
    </motion.div>
  );
}
