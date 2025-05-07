import VideoHeader from "@/components/video/VideoHeader";
import ProjectImage from "../projectImage/ProjectImage";
import { videoLinks } from "@/app/page";
import ProjectColumn from "../projectColumn/ProjectColumn";

export default function ProjectRow() {
  return (
    <>
      <div className="project-row__container row gx-3 gy-3">
        <ProjectImage size="small" offset="large" yAlignment="middle" />
        <ProjectImage size="small" offset="small" />
        <ProjectImage size="medium" />
        <ProjectImage size="medium" />
        <ProjectColumn offset="large">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
            odio harum nobis tenetur error reiciendis distinctio quaerat veniam,
            labore magni, suscipit id iure pariatur aut dolores quisquam dicta
            ducimus. Saepe!
          </p>
        </ProjectColumn>
        <ProjectColumn size="medium">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
            odio harum nobis tenetur error reiciendis distinctio quaerat veniam,
            labore magni, suscipit id iure pariatur aut dolores quisquam dicta
            ducimus. Saepe!
          </p>
        </ProjectColumn>
      </div>
      <div className="project-row__container row">
        <ProjectColumn size="medium" offset="medium">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
            odio harum nobis tenetur error reiciendis distinctio quaerat veniam,
            labore magni, suscipit id iure pariatur aut dolores quisquam dicta
            ducimus. Saepe!
          </p>
        </ProjectColumn>
        <ProjectColumn offset="small">
          <VideoHeader
            id={videoLinks[2].url + "project"}
            url={videoLinks[2].url}
            videoRatio={videoLinks[2].ratio}
          />
        </ProjectColumn>
      </div>
    </>
  );
}
