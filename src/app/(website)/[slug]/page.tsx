import PageWrapper from "@/components/page/PageWrapper";
import ProjectColumn from "@/components/project-page/projectColumn/ProjectColumn";
import ProjectRow from "@/components/project-page/projectRow/ProjectRow";
import PageThemeConfig from "@/components/theme/PageThemeConfig";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { projectPageBySlug, projectPages } from "@/sanity/lib/queries";
import { pageColors } from "@/sanity/schemaTypes/objects/pageColors";
import { ProjectPage } from "@/types/ProjectPage";

export async function generateStaticParams() {
  const posts: ProjectPage[] = await client.fetch(projectPages);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const pageData = (
    await sanityFetch({ query: projectPageBySlug, params: params })
  ).data;

  console.log(pageData);

  return (
    <>
      <PageThemeConfig
        backgroundCol={pageData.pageColors.backgroundColor.hex}
        foregroundCol={pageData.pageColors.foregroundColor.hex}
        isNavFixed={pageData.enableVideoHeader}
      />
      <div className="container g-3 project-content__container">
        <ProjectRow>
          <ProjectColumn size="12">
            {pageData?.title ? <h1>{pageData.title}</h1> : null}
          </ProjectColumn>
        </ProjectRow>
      </div>
    </>
  );
}

export default Page;
