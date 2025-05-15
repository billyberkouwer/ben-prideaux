"use client";

import { whileInView } from "@/contants/motion";
import { motion } from "motion/react";
import { ReactNode } from "react";

function ProjectColumn({
  size = 6,
  offset = 0,
  yAlignment = "align-self-start",
  children,
}: {
  size?: number;
  offset?: number;
  yAlignment?:
    | "align-self-start"
    | "align-self-center"
    | "align-self-end"
    | undefined;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={whileInView}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className={`pt-2 col-lg-${size} col-sm-${size >= 6 ? 12 : 6} offset-lg-${offset} ${yAlignment ? yAlignment : ""}`}
    >
      {children}
    </motion.div>
  );
}

export default ProjectColumn;
