import ProjectColumn from "@/components/ProjectPage/projectColumn/ProjectColumn";
import ProjectPageBuilder from "@/components/ProjectPage/ProjectPageBuilder";
import ProjectRow from "@/components/ProjectPage/projectRow/ProjectRow";
import PageThemeConfig from "@/components/Theme/PageThemeConfig";
import VideoHeader from "@/components/Video/Video";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { projectPageBySlug, projectPages } from "@/sanity/lib/queries";
import { ProjectPage } from "@/types/ProjectPage";
import "./page.scss";
import { draftMode } from "next/headers";
import { defaultBackground, defaultForeground } from "@/sanity/lib/constants";

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
      params,
      perspective: isEnabled ? "drafts" : "published",
    })
  ).data;

  return (
    <>
      <PageThemeConfig
        backgroundCol={
          pageData?.pageColors?.backgroundColor?.hex ?? defaultBackground
        }
        foregroundCol={
          pageData?.pageColors?.foregroundColor?.hex ?? defaultForeground
        }
        isNavFixed={
          pageData?.enableVideoHeader && pageData.videoHeader?.videoUrl
            ? true
            : false
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
      <div className="container project-content__container mb-5">
        <ProjectRow>
          <ProjectColumn
            size={pageData?.columnWidth}
            offset={pageData?.columnOffset}
            yAlignment={pageData?.columnVerticalAlignment}
          >
            {pageData?.title ? (
              <h1 className="page-title">{pageData.title}</h1>
            ) : null}
          </ProjectColumn>
        </ProjectRow>
        <ProjectPageBuilder pageContent={pageData?.pageBuilder} />
      </div>
    </>
  );
}

export default Page;
