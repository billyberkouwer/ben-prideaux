import PageWrapper from "@/components/page/PageWrapper";
import ProjectColumn from "@/components/project-page/projectColumn/ProjectColumn";
import ProjectRow from "@/components/project-page/projectRow/ProjectRow";
import VideoHeader from "@/components/video/VideoHeader";
import { videoLinks } from "../page";
import ProjectImage from "@/components/project-page/projectImage/ProjectImage";

const color = {
  background: "beige",
  foreground: "red",
};

function Page() {
  return (
    <PageWrapper
      backgroundCol={color.background}
      foregroundCol={color.foreground}
      fixedNav
    >
      <VideoHeader
        url={videoLinks[3].url}
        videoRatio={videoLinks[3].ratio}
        id={videoLinks[3].url}
        showControls={false}
        isClickable={false}
        isLandingVideo
        // cropYoutubeUI
        objectFit="cover"
      />
      <div className="container g-3">
        <ProjectRow>
          <h1>This is a new page</h1>
        </ProjectRow>
        <ProjectRow>
          <ProjectColumn offset="large">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, odio harum nobis tenetur error reiciendis distinctio
              quaerat veniam, labore magni, suscipit id iure pariatur aut
              dolores quisquam dicta ducimus. Saepe!
            </p>
          </ProjectColumn>
        </ProjectRow>
        <ProjectRow>
          <ProjectImage size="small" offset="large" yAlignment="middle" />
          <ProjectImage size="small" offset="small" />
        </ProjectRow>
        <ProjectRow>
          <ProjectImage size="medium" />
        </ProjectRow>
        <ProjectRow>
          <ProjectImage size="medium" />
        </ProjectRow>
        <ProjectRow>
          <ProjectColumn offset="large">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, odio harum nobis tenetur error reiciendis distinctio
              quaerat veniam, labore magni, suscipit id iure pariatur aut
              dolores quisquam dicta ducimus. Saepe!
            </p>
          </ProjectColumn>
          <ProjectColumn size="medium">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, odio harum nobis tenetur error reiciendis distinctio
              quaerat veniam, labore magni, suscipit id iure pariatur aut
              dolores quisquam dicta ducimus. Saepe!
            </p>
          </ProjectColumn>
          <ProjectColumn size="medium" offset="medium">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, odio harum nobis tenetur error reiciendis distinctio
              quaerat veniam, labore magni, suscipit id iure pariatur aut
              dolores quisquam dicta ducimus. Saepe!
            </p>
          </ProjectColumn>
          <ProjectColumn offset="small">
            <VideoHeader
              id={videoLinks[2].url + "project"}
              url={videoLinks[2].url}
              videoRatio={videoLinks[2].ratio}
            />
          </ProjectColumn>
        </ProjectRow>
      </div>
    </PageWrapper>
  );
}

export default Page;
