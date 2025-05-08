import VideoHeader from "@/components/video/VideoHeader";
import ProjectImage from "../projectImage/ProjectImage";
import { videoLinks } from "@/app/page";
import ProjectColumn from "../projectColumn/ProjectColumn";
import { ReactNode } from "react";

export default function ProjectRow({ children }: { children: ReactNode }) {
  return <div className="project-row__container row gx-2">{children}</div>;
}
