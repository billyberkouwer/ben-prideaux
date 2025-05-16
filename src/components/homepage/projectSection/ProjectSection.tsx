"use client";

import { whileInView } from "@/contants/motion";
import ProjectList from "./ProjectList";
import "./project-section.scss";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
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
  const categories = useMemo(() => {
    const roles = [];
    for (let i = 0; i < listItems?.length; i++) {
      const itemRoles = listItems[i]?.roles;
      for (let j = 0; j < itemRoles?.length; j++) {
        roles.push(itemRoles[j]);
      }
    }
    const rolesSet = new Set(roles);
    return [...rolesSet];
  }, [listItems]);

  return (
    <motion.section
      variants={whileInView}
      whileInView="animate"
      initial="initial"
      className="project-section__container container g-3 mb-5 "
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
              <label className="change-cursor" htmlFor="List View" style={{margin: 0}}>
                List
              </label>
            </fieldset>
          </form>
          <form>
            <fieldset>
              {categories.map((category) => (
                <span key={category}>
                  <input
                    id={category}
                    type="radio"
                    value={category}
                    name="role"
                    onClick={(e) => setSelectedCategory((e.target as HTMLTextAreaElement).value)}
                  />
                  <label className="change-cursor" htmlFor={category}>
                    {category}
                  </label>
                </span>
              ))}
              <input
                id="All"
                type="radio"
                value="All"
                name="role"
                onClick={() => setSelectedCategory(null)}
                defaultChecked
              />
              <label className="change-cursor" htmlFor="All" style={{margin: 0}}>
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
