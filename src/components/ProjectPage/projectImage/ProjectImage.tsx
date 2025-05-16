"use client";

import "./project-image.scss";
import Image from "next/image";

function imageSizes(size: number) {
  switch (size) {
    case 1:
      return "(max-width: 768px) 40vw, (max-width: 1200px) 20vw, 10vw";
    default:
      return "(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 33vw";
  }
}

export default function ProjectImage({
  src,
  aspectRatio = "4 / 4",
  alt,
  size = 6,
}: {
  src: string;
  aspectRatio: string;
  alt?: string;
  size?: number;
}) {
  if (src) {
    return (
      <div
        className="project-image__wrapper"
        style={{ aspectRatio: aspectRatio }}
      >
        <Image
          src={src}
          alt={alt ? alt : "Image"}
          fill
          sizes={imageSizes(size)}
        />
      </div>
    );
  }

  return null;
}
