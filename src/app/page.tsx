import PageWrapper from "@/components/page/PageWrapper";
import ProjectSection from "@/components/homepage/projectSection/ProjectSection";
import AboutSection from "@/components/homepage/aboutSection/AboutSection";
import ContactSection from "@/components/homepage/contactSection/ContactSection";
import VideoHeader from "@/components/video/VideoHeader";

const color = {
  background: "#FFEEC8",
  foreground: "#AC512F",
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

const links = [
  { url: "https://youtu.be/Ks1j-M0300M", ratio: { x: 16, y: 9 } },
  { url: "https://vimeo.com/347119375?share=copy", ratio: { x: 16, y: 9 } },
  {
    url: "https://www.youtube.com/watch?v=8yKZh_z1Md4&ab_channel=BenPrideaux",
    ratio: { x: 16, y: 9 },
  },
];

export default function Home() {
  return (
    <PageWrapper
      backgroundCol={color.background}
      foregroundCol={color.foreground}
      fixedNav
    >
      <VideoHeader
        url={links[2].url}
        videoRatio={links[2].ratio}
        id={links[2].url}
        showControls={true}
        isClickable={true}
        isLandingVideo
        cropYoutubeUI
        objectFit="cover"
      />
      <ProjectSection listItems={listItems} />
      <div className="container margin-bottom">
        <div className="row">
          <AboutSection />
          <div className="col-2" />
          <ContactSection />
        </div>
      </div>
    </PageWrapper>
  );
}
