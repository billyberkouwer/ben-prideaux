"use client"

import { whileInView } from "@/contants/motion";
import { motion } from "motion/react";
import Image from "next/image";

function AboutSection() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      variants={whileInView}
      viewport={{ once: true }}
      className="about-section__container col-lg-6"
    >
      <h2 className="section-title">About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis a,
        id amet, expedita accusamus assumenda delectus alias ab omnis quae
        dolores aliquam iusto architecto facilis? Veniam quos sequi maiores
        error! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
        dolor at placeat! Cum suscipit placeat quaerat consequatur aliquam
        nesciunt aperiam, excepturi similique delectus sunt, perspiciatis ut!
        Illo eos ullam nihil! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quisquam voluptatem, quibusdam, fugiat, laborum, esse,
        accusamus, doloremque, placeat, sunt, explicabo, nesciunt, autem! Velit,
        consequatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Dolorem dolor at placeat! Cum suscipit placeat quaerat consequatur
        aliquam nesciunt aperiam, excepturi similique delectus sunt,
        perspiciatis ut!
      </p>
      <Image src={"/images/ben-picture.jpg"} width={400} height={400} alt="about-picture" />
    </motion.section>
  );
}

export default AboutSection;
