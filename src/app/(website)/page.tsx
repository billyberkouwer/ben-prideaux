import PageWrapper from "@/components/page/PageWrapper";
import ProjectSection from "@/components/homepage/projectSection/ProjectSection";
import AboutSection from "@/components/homepage/aboutSection/AboutSection";
import ContactSection from "@/components/homepage/contactSection/ContactSection";
import VideoHeader from "@/components/video/Video";
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import {
  homepageProjectsQuery,
  homeQuery,
  navListQuery,
} from "@/sanity/lib/queries";
import PageThemeConfig from "@/components/theme/PageThemeConfig";

const color = {
  background: "black",
  foreground: "white",
};

const listItems = [
  {
    title: "Some Title",
    year: "2024",
    categories: ["Editing", "Camera", "Shit on my Face", ":)"],
    images: ["/images/image-1.png", "/images/image-2.png"],
    link: "/new-route",
  },
  {
    title: "Some Title",
    year: "2024",
    categories: ["Editing"],
    images: ["/images/image-1.png", "/images/image-2.png"],
    link: "/new-route",
  },
  {
    title: "Some Title",
    year: "2024",
    categories: ["Camera"],
    images: ["/images/image-1.png", "/images/image-2.png"],
    link: "/",
  },
  {
    title: "Some Title",
    year: "2024",
    categories: ["Editing"],
    images: ["/images/image-1.png", "/images/image-2.png"],
    link: "/",
  },
];

export const videoLinks = [
  { url: "https://youtu.be/Ks1j-M0300M", ratio: { x: 16, y: 9 } },
  { url: "https://vimeo.com/347119375?share=copy", ratio: { x: 16, y: 9 } },
  {
    url: "https://www.youtube.com/watch?v=8yKZh_z1Md4&ab_channel=BenPrideaux",
    ratio: { x: 16, y: 9 },
  },
  {
    url: "https://vimeo.com/944547199/d9c2b6f1b2?share=copy",
    ratio: { x: 4, y: 3 },
  },
];

export default async function Home() {
  const pageData = (
    await sanityFetch({
      query: homeQuery,
    })
  ).data;

  const projectsData = await (
    await sanityFetch({ query: homepageProjectsQuery })
  ).data;

  console.log(projectsData)

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
