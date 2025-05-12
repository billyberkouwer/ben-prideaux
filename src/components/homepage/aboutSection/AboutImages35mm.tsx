import { SanityImageAssetDocument } from "next-sanity";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, spring, useAnimate } from "motion/react";
import "./about-images-35mm.scss";

export default function AboutImages35mm({
  images,
}: {
  images: SanityImageAssetDocument[];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="about-images__container"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {images.reverse().map((image, i) => (
        <motion.div
          animate={{
            rotate: isHovered
              ? Math.random() * 20 - 10
              : Math.random() * 5 - 2.5,
            x: isHovered ? `calc(20vw * ${i})` : 0,
            opacity: isHovered ? 1 : 1 / (images.length - i),
            transition: { duration: 0.5, type: spring },
          }}
          className="about-images__wrapper"
          style={{ aspectRatio: image.metadata.dimensions.aspectRatio }}
          key={image.url + i}
        >
          <Image
            src={image.url}
            alt="about-picture"
            layout="fill"
            sizes="400px"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
