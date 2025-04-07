import PageWrapper from "@/components/page/PageWrapper";

const color = {
  background: "black",
  foreground: "white",
};

function Page() {
  return (
    <PageWrapper
      backgroundCol={color.background}
      foregroundCol={color.foreground}
    >
      <h1>This is a new page</h1>
    </PageWrapper>
  );
}

export default Page;
