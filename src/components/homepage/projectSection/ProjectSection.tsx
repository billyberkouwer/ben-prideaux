"use client"

import { whileInView } from "@/contants/motion";
import ProjectList from "./ProjectList";
import "./project-section.scss";
import { motion } from "motion/react";

export default function ProjectSection({
  listItems,
}: {
  listItems: ProjectListItemType[];
}) {
  return (
    <motion.section
      variants={whileInView}
      viewport={{ once: true }}
      whileInView="animate"
      initial="initial"
      className="project-section__container margin-bottom container g-3 "
    >
      <h1 className="section-title">Projects</h1>
      <ProjectList projectItems={listItems} />
    </motion.section>
  );
}
