import ProjectList from "./ProjectList";
import "./project-section.scss";

export default function ProjectSection({
  listItems,
}: {
  listItems: ProjectListItemType[];
}) {
  return (
    <section className="project-section__container container  ">
      <h1 className="section-title">Projects</h1>
      <ProjectList projectItems={listItems} />
    </section>
  );
}
