"use client";

import Image from "next/image";
import ProjectColumn from "../projectColumn/ProjectColumn";

export default function ProjectImage({
  src = "/images/image-2.png",
  size = "medium",
  offset = undefined,
  yAlignment = undefined,
}: {
  src: string;
  size?: "small" | "medium" | "large" | "auto" | undefined;
  offset?: "small" | "medium" | "large" | "auto" | undefined;
  yAlignment?: "bottom" | "middle" | "top" | undefined;
}) {
  return (
    <ProjectColumn size={size} offset={offset} yAlignment={yAlignment}>
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          objectFit: "contain",
        }}
      >
        <Image src={src} fill sizes="500px" alt="alt" />
      </div>
    </ProjectColumn>
  );
}
