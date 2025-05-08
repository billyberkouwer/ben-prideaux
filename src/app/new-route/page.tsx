import PageWrapper from "@/components/page/PageWrapper";
import ProjectColumn from "@/components/project-page/projectColumn/ProjectColumn";
import ProjectRow from "@/components/project-page/projectRow/ProjectRow";
import VideoHeader from "@/components/video/VideoHeader";
import { videoLinks } from "../page";
import ProjectImage from "@/components/project-page/projectImage/ProjectImage";
import "./page.scss";

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
      <div className="container g-3 project-content__container">
        <ProjectRow>
          <ProjectColumn size="12">
            <h1>This is a new page</h1>
          </ProjectColumn>
        </ProjectRow>
        <ProjectRow>
          <ProjectColumn size="6" offset="1">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, odio harum nobis tenetur error reiciendis distinctio
              quaerat veniam, labore magni, suscipit id iure pariatur aut
              dolores quisquam dicta ducimus. Saepe!
            </p>
          </ProjectColumn>
        </ProjectRow>
        <ProjectRow>
          <ProjectColumn size="3"  yAlignment="align-self-end">
            <ProjectImage />
          </ProjectColumn>
          <ProjectColumn size="6">
            <ProjectImage />
          </ProjectColumn>
          <ProjectColumn size="3" yAlignment="bottom">
            <ProjectImage />
          </ProjectColumn>
        </ProjectRow>
        <ProjectRow>
          <ProjectColumn size="6">
            <ProjectImage />
          </ProjectColumn>
        </ProjectRow>
        <ProjectRow>
          <ProjectColumn size="6">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, odio harum nobis tenetur error reiciendis distinctio
              quaerat veniam, labore magni, suscipit id iure pariatur aut
              dolores quisquam dicta ducimus. Saepe!
            </p>
          </ProjectColumn>
          <ProjectColumn size="4">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, odio harum nobis tenetur error reiciendis distinctio
              quaerat veniam, labore magni, suscipit id iure pariatur aut
              dolores quisquam dicta ducimus. Saepe!
            </p>
          </ProjectColumn>
        </ProjectRow>
        <ProjectRow>
          <ProjectColumn size="6" offset="medium">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, odio harum nobis tenetur error reiciendis distinctio
              quaerat veniam, labore magni, suscipit id iure pariatur aut
              dolores quisquam dicta ducimus. Saepe!
            </p>
          </ProjectColumn>
          <ProjectColumn size="2">
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
