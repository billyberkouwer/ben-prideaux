"use client";

import { whileInView } from "@/contants/motion";
import { motion } from "motion/react";
import "./contact-section.scss";

function ContactSection() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      variants={whileInView}
      viewport={{ once: true }}
      className="contact-section__container container col-lg-6 col"
    >
      <h2 className="section-title">Contact</h2>
      <div className="contact-text__container g-0">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          cupiditate quisquam adipisci unde aperiam exercitationem dolores,
          laborum distinctio consequatur eligendi impedit, totam aspernatur
          nulla architecto molestiae explicabo eius? Blanditiis, asperiores?
        </p>
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
