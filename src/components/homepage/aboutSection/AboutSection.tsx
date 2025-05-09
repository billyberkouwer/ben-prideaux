"use client";

import { whileInView } from "@/contants/motion";
import { motion } from "motion/react";
import Image from "next/image";
import "./about-section.scss";
import {
  PortableText,
  PortableTextBlock,
  SanityImageAssetDocument,
} from "next-sanity";
import AboutImages from "./AboutImages";

function AboutSection({
  images,
  text,
}: {
  images: SanityImageAssetDocument[];
  text: PortableTextBlock[];
}) {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      variants={whileInView}
      viewport={{ once: true }}
      className="about-section__container col-lg-6"
    >
      <h2 className="section-title">About</h2>
      <PortableText value={text} />
      <AboutImages images={images} />
    </motion.section>
  );
}

export default AboutSection;
