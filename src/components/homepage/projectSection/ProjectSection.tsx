"use client";

import { whileInView } from "@/contants/motion";
import ProjectList from "./ProjectList";
import "./project-section.scss";
import { motion } from "motion/react";
import { useState } from "react";

export default function ProjectSection({
  listItems,
}: {
  listItems: ProjectListItemType[];
}) {
  const [isList, setIsList] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    string | null | undefined
  >(undefined);
  return (
    <motion.section
      variants={whileInView}
      viewport={{ once: true }}
      whileInView="animate"
      initial="initial"
      className="project-section__container container g-3 my-5 "
    >
      <div className="project-section-header__container row">
        <h1 className="section-title col">Projects</h1>
        <div className="col align-items-end" style={{display: "flex", gap: "0.5rem", flexDirection: "column"}}>
          <button onClick={() => setIsList(!isList)}>Change view</button>
          <fieldset>
            <input
              id={"Editing"}
              type="radio"
              value={"Editing"}
              name="role"
              onClick={(e) => setSelectedCategory(e.target.value)}
            />
            <label className="change-cursor" htmlFor="Editing">Editing</label>
            <input
              id={"Camera"}
              type="radio"
              value={"Camera"}
              name="role"
              onClick={(e) => setSelectedCategory(e.target.value)}
            />
            <label className="change-cursor" htmlFor="Camera">Camera</label>
            <input
              id="Grade"
              type="radio"
              value="Grade"
              name="role"
              onClick={(e) => setSelectedCategory(e.target.value)}
            />
            <label className="change-cursor" htmlFor="Grade">Grade</label>
            <input
              id="All"
              type="radio"
              value="All"
              name="role"
              onClick={(e) => setSelectedCategory(null)}
            />
            <label className="change-cursor" htmlFor="All">All</label>
          </fieldset>
        </div>
      </div>
      <ProjectList
        isList={isList}
        selectedCategory={selectedCategory}
        projectItems={listItems}
      />
    </motion.section>
  );
}
