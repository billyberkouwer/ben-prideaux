import { SanityImageAssetDocument } from "next-sanity";
import Image from "next/image";
import "./about-images.scss";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

function AboutImages({ images }: { images?: SanityImageAssetDocument[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let index = 0;

    const fadeImages = () => {
      if (images?.length) {
        if (index < images.length - 1) {
          index++;
          setCurrentImageIndex(index);
        } else {
          index = 0;
          setCurrentImageIndex(index);
        }
      }
    };

    const interval = setInterval(fadeImages, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="about-image__container col">
      {images?.length
        ? images.map((image, i) => (
            <motion.div
              className="about-image__wrapper"
              key={"about wrapper" + image.url + i}
              style={{
                aspectRatio: `${image.metadata.dimensions.width} / ${image.metadata.dimensions.height}`,
              }}
              variants={variants}
              animate={i === currentImageIndex ? "animate" : "initial"}
            >
              <Image
                src={image.url}
                alt={"about image " + i}
                fill
                sizes="20vw"
              />
            </motion.div>
          ))
        : null}
    </div>
  );
}

export default AboutImages;
