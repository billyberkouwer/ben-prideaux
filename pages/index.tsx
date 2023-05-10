import Image from 'next/image';
import { client } from '../sanity/lib/client';
import NavBar from '../components/global/NavBar'
import Tile from '../components/homepage/Tile';
import Splash from '../components/homepage/Splash';
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
  const contentContainerRef = useRef<any>();
  const [isContactDisplayed, setIsContactDisplayed] = useState(false);

  function handleDisplayContact() {
    if (isContactDisplayed) {
      setIsContactDisplayed(false);
    } else {
      setIsContactDisplayed(true);
    }
  }

  useEffect(() => {
    if (contentContainerRef.current) {
      contentContainerRef.current.style.transform = `translateY(${-scrollAmount}px)`
    }
  }, [scrollAmount])

  return (
    <>
      <div className="bg-gray-100 format-text relative" style={{height: 2000}}>
      <NavBar handleDisplayContact={handleDisplayContact} isContactDisplayed={isContactDisplayed} />
        <Splash splashScreenVideo={splashScreenVideo} portfolioTitle={portfolioTitle} portfolioSubTitle={portfolioSubTitle} scrollAmount={scrollAmount} />
        <div ref={contentContainerRef} className="fixed w-full bg-white" style={{top: '75svh'}}>
          <section className='flex flex-col container page-w mx-auto py-8'>
            <div className="grid gap-4 grid-cols-3 auto-rows-tile mx-10">
              {projectsData.map((project, i) => (
                <Tile key={project.projectTitle + i} {...project} />
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