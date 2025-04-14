"use client"

import { whileInView } from "@/contants/motion";
import { motion } from "motion/react";
import { ReactNode } from "react";

function ProjectColumn({
  size = "medium",
  offset = undefined,
  yAlignment = undefined,
  children,
}: {
  size?: "small" | "medium" | "large" | "auto" | undefined;
  offset?: "small" | "medium" | "large" | "auto" | undefined;
  yAlignment?: "bottom" | "middle" | "top" | undefined;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={whileInView}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className={`project-image__wrapper 
          ${size === "medium" ? "col-6" : ""} 
          ${size === "small" ? "col-3" : ""} 
          ${size === "auto" ? "col" : ""} 
          ${offset === "small" ? "offset-1" : ""} 
          ${offset === "medium" ? "offset-2" : ""} 
          ${offset === "large" ? "offset-3" : ""} 
          ${yAlignment === "bottom" ? "align-self-end" : ""}
          ${yAlignment === "middle" ? "align-self-center" : ""}
          ${yAlignment === "top" ? "align-self-start" : ""}        
          `}
    >
      {children}
    </motion.div>
  );
}

export default ProjectColumn;
