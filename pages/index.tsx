import Image from 'next/image';
import { client } from '../sanity/lib/client';
import NavBar from '../components/global/NavBar'
import Tile from '../components/homepage/Tile';
import useScrollTrigger from '../hooks/useScrollTrigger'
import { MutableRefObject, useEffect, useRef, useState } from 'react';

export default function HomePage({
  homepageData,
  projectsData
}) {

  const {
    portfolioTitle,
    portfolioSubTitle,
    splashScreenVideo
  } = homepageData;

  const scrollAmount = useScrollTrigger();
  const titleRef = useRef<any>()

  const [isContactDisplayed, setIsContactDisplayed] = useState(false);

  function handleDisplayContact() {
    if (isContactDisplayed) {
      setIsContactDisplayed(false);
    } else {
      setIsContactDisplayed(true);
    }
  }

  return (
    <>
      <div className="bg-gray-100 h-fit format-text ">
        <section className='header flex flex-col container mx-auto min-h-96 h-75vh text-stone-100 justify-center'>
          <div className="fixed wh-inherit top-0 left-0 z-0">
            {splashScreenVideo?.asset?.url ? <Image src={splashScreenVideo.asset.url} className='relative object-cover' fill alt="header" /> : null}
          </div>
          <h1 ref={titleRef} className="text-6xl h-fit self-center page-max-w z-10 px-8">{portfolioTitle}</h1>
          {portfolioSubTitle ? <h2 className="text-3xl h-fit self-center page-max-w z-10 px-8">{portfolioSubTitle}</h2> : null}
        </section>
        <NavBar handleDisplayContact={handleDisplayContact} isContactDisplayed={isContactDisplayed} />
        <div className="bg-white z-10 relative">
          <section className=' flex flex-col container page-w mx-auto py-8'>
            <div className="grid gap-4 grid-cols-3 auto-rows-tile mx-10">
              {projectsData.map(project => (
                <Tile key={project} {...project} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const homepageData = await client.fetch(`*[_type == "homepage"] {
    portfolioTitle,
    portfolioSubTitle,
    splashScreenVideo{asset->{ url }}
  }`);

  const projectsData = await client.fetch(`*[_type == "projectPage"] {
    isPriority,
    homepageExcerpt,
    projectThumbnail{asset->{url}},
    projectTitle,
  }`)

  return {
    props: {
      homepageData: homepageData[0],
      projectsData: projectsData
    }
  }
}