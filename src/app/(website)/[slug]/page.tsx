import ProjectColumn from "@/components/project-page/projectColumn/ProjectColumn";
import ProjectPageBuilder from "@/components/project-page/ProjectPageBuilder";
import ProjectRow from "@/components/project-page/projectRow/ProjectRow";
import PageThemeConfig from "@/components/theme/PageThemeConfig";
import VideoHeader from "@/components/video/Video";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { projectPageBySlug, projectPages } from "@/sanity/lib/queries";
import { ProjectPage } from "@/types/ProjectPage";
import "./page.scss";
import { draftMode } from "next/headers";

export async function generateStaticParams() {
  const posts: ProjectPage[] = await client.fetch(projectPages);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { isEnabled } = await draftMode();
  const pageData = (
    await sanityFetch({
      query: projectPageBySlug,
      params: params,
      perspective: isEnabled ? "previewDrafts" : "published",
    })
  ).data;

  return (
    <>
      <PageThemeConfig
        backgroundCol={pageData?.pageColors.backgroundColor.hex ?? undefined}
        foregroundCol={pageData?.pageColors.foregroundColor.hex ?? undefined}
        isNavFixed={
          pageData?.enableVideoHeader && pageData.videoHeader?.videoUrl
        }
      />
      {pageData?.enableVideoHeader && pageData.videoHeader?.videoUrl ? (
        <VideoHeader
          url={pageData.videoHeader.videoUrl}
          videoRatio={{
            x: pageData.videoHeader.videoAspectRatio.x,
            y: pageData.videoHeader.videoAspectRatio.y,
          }}
          id={pageData.videoHeader.videoUrl + "-header"}
          showControls={pageData.videoHeader.showControls}
          isClickable={pageData.videoHeader.showControls}
          isLandingVideo
          cropYoutubeUI={pageData.videoHeader.cropYoutubeUI}
          objectFit="cover"
        />
      ) : null}
      <div className="container g-3 project-content__container">
        <ProjectRow>
          <ProjectColumn
            size={pageData.columnWidth}
            offset={pageData.columnOffset}
            yAlignment={pageData.columnVerticalAlignment}
          >
            {pageData?.title ? <h1>{pageData.title}</h1> : null}
          </ProjectColumn>
        </ProjectRow>
        <ProjectPageBuilder pageContent={pageData.pageBuilder} />
      </div>
    </>
  );
}

export default Page;
