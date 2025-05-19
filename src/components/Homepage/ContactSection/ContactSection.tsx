"use client";

import { whileInView } from "@/contants/motion";
import { motion } from "motion/react";
import "./contact-section.scss";
import { PortableText, PortableTextBlock } from "next-sanity";

function ContactSection({
  text,
}: {
  text: PortableTextBlock[] | null;
}) {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      variants={whileInView}
      // viewport={{ once: true }}
      className="contact-section__container container col-lg-6 col mt-5 --paragraph-block-styles"
    >
      <h2 className="section-title">Contact</h2>
      <div className="contact-text__container g-0">
        {text ? <PortableText value={text} /> : null}
      </div>
      <form className="row g-0 gy-3">
        <div className="col-12 input__wrapper">
          <input type="text" placeholder="Name" required />
        </div>
        <div className="col-12 input__wrapper">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="col-12">
          <textarea placeholder="Message"></textarea>
        </div>
        <div className="col-12">
          <button type="submit">Send</button>
        </div>
      </form>
    </motion.section>
  );
}

export default ContactSection;
