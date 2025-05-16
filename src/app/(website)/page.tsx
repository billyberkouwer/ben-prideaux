import ProjectSection from "@/components/Homepage/ProjectSection/ProjectSection";
import AboutSection from "@/components/Homepage/AboutSection/AboutSection";
import ContactSection from "@/components/Homepage/ContactSection/ContactSection";
import VideoHeader from "@/components/Video/Video";
import { sanityFetch } from "@/sanity/lib/live";
import { homepageProjectsQuery, homeQuery } from "@/sanity/lib/queries";
import PageThemeConfig from "@/components/Theme/PageThemeConfig";
import { defaultBackground, defaultForeground } from "@/sanity/lib/constants";
import { draftMode } from "next/headers";

export default async function Home() {
  const { isEnabled } = await draftMode();

  const pageData = (
    await sanityFetch({
      query: homeQuery,
      perspective: isEnabled ? "drafts" : "published",
    })
  ).data;

  const projectsData = await (
    await sanityFetch({
      query: homepageProjectsQuery,
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
      <ProjectSection listItems={projectsData} />
      <div className="container margin-bottom">
        <div className="row">
          <AboutSection
            images={pageData.aboutImages}
            text={pageData.aboutText}
          />
          <ContactSection />
        </div>
      </div>
    </>
  );
}
