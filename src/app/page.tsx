import PageWrapper from "@/components/page/PageWrapper";
import ProjectSection from "@/components/homepage/projectSection/ProjectSection";
import AboutSection from "@/components/homepage/aboutSection/AboutSection";
import ContactSection from "@/components/homepage/contactSection/ContactSection";
import VideoHeader from "@/components/videoHeader/VideoHeader";

const color = {
  background: "white",
  foreground: "black",
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

export default function Home() {
  return (
    <PageWrapper
      backgroundCol={color.background}
      foregroundCol={color.foreground}
      fixedNav
    >
      <VideoHeader />
      <ProjectSection listItems={listItems} />
      <div className="container">
        <div className="row">
          <AboutSection />
          <div className="col-2" />
          <ContactSection />
        </div>
      </div>
    </PageWrapper>
  );
}
