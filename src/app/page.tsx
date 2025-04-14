import PageWrapper from "@/components/page/PageWrapper";
import ProjectSection from "@/components/homepage/projectSection/ProjectSection";
import AboutSection from "@/components/homepage/aboutSection/AboutSection";
import ContactSection from "@/components/homepage/contactSection/ContactSection";
import VideoHeader from "@/components/video/VideoHeader";

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
    link: "/",
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

export default function Home() {
  return (
    <PageWrapper
      backgroundCol={color.background}
      foregroundCol={color.foreground}
      fixedNav
    >
      {/* <div className="container video-header__wrapper g-3"> */}
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
      {/* </div> */}
      <ProjectSection listItems={listItems} />
      <div className="container margin-bottom">
        <div className="row">
          <AboutSection />
          <ContactSection />
        </div>
      </div>
    </PageWrapper>
  );
}
