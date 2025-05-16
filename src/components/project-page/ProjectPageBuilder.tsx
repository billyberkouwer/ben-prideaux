import { PageBuilder } from "@/types/ProjectPage";
import ProjectRowBuilder from "./ProjectRowBuilder";

export default function ProjectPageBuilder({
  pageContent,
}: {
  pageContent: PageBuilder[];
}) {
  return pageContent?.map((row, i) => (
    <ProjectRowBuilder
      key={"project row " + i}
      projectRowContent={row?.rowItems}
      hasPadding={row?.hasPadding}
    />
  ));
}
