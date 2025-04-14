import PageWrapper from "@/components/page/PageWrapper";
import ProjectRow from "@/components/project-page/projectRow/ProjectRow";

const color = {
  background: "beige",
  foreground: "red",
};

function Page() {
  return (
    <PageWrapper
      backgroundCol={color.background}
      foregroundCol={color.foreground}
    >
      <div className="container">
        <div className="row">
        <h1>This is a new page</h1>

        </div>
        <ProjectRow />
      </div>
    </PageWrapper>
  );
}

export default Page;
