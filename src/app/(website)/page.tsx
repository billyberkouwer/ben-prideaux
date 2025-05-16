import ProjectSection from "@/components/homepage/projectSection/ProjectSection";
import AboutSection from "@/components/homepage/aboutSection/AboutSection";
import ContactSection from "@/components/homepage/contactSection/ContactSection";
import VideoHeader from "@/components/video/Video";
import { sanityFetch } from "@/sanity/lib/live";
import {
  homepageProjectsQuery,
  homeQuery,
} from "@/sanity/lib/queries";
import PageThemeConfig from "@/components/theme/PageThemeConfig";
import { defaultBackground, defaultForeground } from "@/sanity/lib/constants";

export default async function Home() {
  const pageData = (
    await sanityFetch({
      query: homeQuery,
    })
  ).data;

  const projectsData = await (
    await sanityFetch({ query: homepageProjectsQuery })
  ).data;

  return (
    <>
      <PageThemeConfig
        backgroundCol={pageData?.pageColors?.backgroundColor.hex ?? defaultBackground}
        foregroundCol={pageData?.pageColors?.foregroundColor.hex ?? defaultForeground}
        isNavFixed={
          pageData?.enableVideoHeader && pageData.videoHeader?.videoUrl ? true : false
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
