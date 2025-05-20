"use client";

import { useMemo } from "react";
import ProjectListItem from "./ProjectListItem";
import { AnimatePresence, motion } from "motion/react";
import { ProjectListItemType } from "@/types/Homepage";

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
  selectedCategory,
}: {
  projectItems: ProjectListItemType[] | null;
  isList: boolean;
  selectedCategory: string | null | undefined;
}) {
  const activeProjects = useMemo(() => {
    if (projectItems?.length) {
      if (selectedCategory === undefined || selectedCategory === null) {
        return projectItems;
      } else {
        return projectItems.filter((proj) => {
          for (let i = 0; i < proj.roles.length; i++) {
            if (
              proj.roles[i].toLowerCase() === selectedCategory.toLowerCase()
            ) {
              return true;
            }
          }
        });
      }
    }
  }, [projectItems, selectedCategory]);

  return (
    <motion.div
      className="row"
      // variants={whileInView}
      // initial="initial"
      // whileInView="animate"
      // viewport={{ once: true }}
    >
      <AnimatePresence mode="wait">
        <motion.ul
          key={isList ? "list-container" : "block-container"}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={containerAnimations}
          className={`project-list__container col ${isList ? "gx-3" : "g-3"}`}
        >
          {activeProjects?.length
            ? activeProjects.map((projectItem, i) =>
                isList ? (
                  <ProjectListItem
                    key={
                      "list-item-project-" + "is-list" + projectItem.title + i
                    }
                    isList={true}
                    {...projectItem}
                    selectedCategory={selectedCategory}
                  />
                ) : (
                  <ProjectListItem
                    key={
                      "list-item-project-" + "is-block" + projectItem.title + i
                    }
                    isList={false}
                    {...projectItem}
                    selectedCategory={selectedCategory}
                  />
                )
              )
            : null}
        </motion.ul>
      </AnimatePresence>
    </motion.div>
  );
}
