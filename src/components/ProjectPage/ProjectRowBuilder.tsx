import { RowItem } from "@/types/ProjectPage";
import { PortableText } from "next-sanity";
import ProjectColumn from "./projectColumn/ProjectColumn";
import ProjectImage from "./projectImage/ProjectImage";
import Video from "../Video/Video";
import ProjectRow from "./projectRow/ProjectRow";

export default function ProjectRowBuilder({
  projectRowContent,
  hasPadding,
}: {
  projectRowContent: RowItem[];
  hasPadding?: boolean;
}) {
  return (
    <ProjectRow hasPadding={hasPadding}>
      {projectRowContent?.length
        ? projectRowContent?.map((item) => {
            if (item._type === "columnParagraph" && item?.paragraphText) {
              return (
                <ProjectColumn
                  key={item._key}
                  size={item.columnWidth}
                  offset={item.columnOffset}
                  yAlignment={item.columnVerticalAlignment}
                >
                  <PortableText value={item.paragraphText} />
                </ProjectColumn>
              );
            }
            if (item._type === "columnImage" && item?.image) {
              return (
                <ProjectColumn
                  key={item._key}
                  size={item.columnWidth}
                  offset={item.columnOffset}
                  yAlignment={item.columnVerticalAlignment}
                >
                  <ProjectImage
                    aspectRatio={`${item.image?.metadata.dimensions.aspectRatio} / 1`}
                    src={item.image?.url}
                    alt={item.image?.alt}
                  />
                </ProjectColumn>
              );
            }
            if (item._type === "columnVideo" && item?.videoUrl) {
              return (
                <ProjectColumn
                  key={item._key}
                  size={item.columnWidth}
                  offset={item.columnOffset}
                  yAlignment={item.columnVerticalAlignment}
                >
                  <Video
                    url={item.videoUrl}
                    id={item.videoUrl}
                    cropYoutubeUI={false}
                    isClickable={item.showControls}
                    showControls={item.showControls}
                    isLandingVideo={false}
                    objectFit="contain"
                    videoRatio={{
                      x: item.videoAspectRatio?.x ?? 16,
                      y: item.videoAspectRatio?.y ?? 9,
                    }}
                  />
                </ProjectColumn>
              );
            }
          })
        : null}
    </ProjectRow>
  );
}
