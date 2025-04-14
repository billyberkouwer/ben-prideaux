import VideoHeader from "@/components/video/VideoHeader";
import ProjectImage from "../projectImage/ProjectImage";
import { videoLinks } from "@/app/page";
import ProjectColumn from "../projectColumn/ProjectColumn";

export default function ProjectRow() {
  return (
    <>
      <div className="project-row__container row gx-3 gy-3">
        <ProjectImage size="small" offset="large" yAlignment="middle" />
        <ProjectImage offset="large" size="small" />
        <ProjectImage size="medium" />
        <ProjectImage size="medium" />

        {/* <ProjectImage /> */}
      </div>
      <div className="row my-5 py-5">
        <p className="col-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
          odio harum nobis tenetur error reiciendis distinctio quaerat veniam,
          labore magni, suscipit id iure pariatur aut dolores quisquam dicta
          ducimus. Saepe!
        </p>
      </div>
      <div className="row">
        <ProjectColumn>
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
