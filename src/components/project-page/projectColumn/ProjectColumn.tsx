"use client";

import { whileInView } from "@/contants/motion";
import { motion } from "motion/react";
import { ReactNode } from "react";

function ProjectColumn({
  size = "1",
  offset = "0",
  yAlignment = "align-self-start",
  children,
}: {
  size?: string;
  offset?: string;
  yAlignment?: "align-self-start" | "align-self-center" | "align-self-end" | undefined;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={whileInView}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className={`pt-2 col-lg-${size} col-sm-${parseInt(size) * 2} offset-lg-${offset} ${yAlignment}`}
    >
      {children}
    </motion.div>
  );
}

export default ProjectColumn;
