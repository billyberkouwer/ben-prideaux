"use client";

import { whileInView } from "@/contants/motion";
import ProjectList from "./ProjectList";
import "./project-section.scss";
import { motion } from "motion/react";
import { useState } from "react";
import { ProjectListItemType } from "@/types/Homepage";

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
        <div
          className="col align-items-end"
          style={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}
        >
          <form>
            <fieldset>
              <input
                id={"Grid View"}
                type="radio"
                value={"Grid View"}
                name="role"
                onClick={() => setIsList(false)}
                defaultChecked
              />
              <label className="change-cursor" htmlFor="Grid View">
                Grid
              </label>
              <input
                id={"List View"}
                type="radio"
                value={"List View"}
                name="role"
                onClick={() => setIsList(true)}
              />
              <label className="change-cursor" htmlFor="List View">
                List
              </label>
            </fieldset>
          </form>
          <form>
            <fieldset>
              <input
                id={"Editing"}
                type="radio"
                value={"Editing"}
                name="role"
                onClick={(e) => setSelectedCategory(e.target.value)}
              />
              <label className="change-cursor" htmlFor="Editing">
                Editing
              </label>
              <input
                id={"Camera"}
                type="radio"
                value={"Camera"}
                name="role"
                onClick={(e) => setSelectedCategory(e.target.value)}
              />
              <label className="change-cursor" htmlFor="Camera">
                Camera
              </label>
              <input
                id="Grade"
                type="radio"
                value="Grade"
                name="role"
                onClick={(e) => setSelectedCategory(e.target.value)}
              />
              <label className="change-cursor" htmlFor="Grade">
                Grade
              </label>
              <input
                id="All"
                type="radio"
                value="All"
                name="role"
                onClick={() => setSelectedCategory(null)}
                defaultChecked
              />
              <label className="change-cursor" htmlFor="All">
                All
              </label>
            </fieldset>
          </form>
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
