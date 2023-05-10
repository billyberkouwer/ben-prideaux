import { client } from '../sanity/lib/client';
import NavBar from '../components/global/NavBar'
import TileSection from '../components/homepage/TileSection';
import SplashSection from '../components/homepage/SplashSection';
import useScrollTrigger from '../hooks/useScrollTrigger'
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import usePageSize from 'hooks/usePageSize';
import { darkCol, lightCol } from '../styles/tailwindStyles'

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
  const windowSize = usePageSize()
  const [isContactDisplayed, setIsContactDisplayed] = useState(false);
  const pageContainer = useRef() as MutableRefObject<any>;
  const contentContainer = useRef() as MutableRefObject<any>;
  const titleRef = useRef() as MutableRefObject<any>;
  const [titleHeight, setTitleHeight] = useState(undefined);
  const [isColorLight, setIsColorLight] = useState<boolean | undefined>();

  useEffect(() => {
    setTitleHeight(titleRef.current.getBoundingClientRect().height);
  }, [])

  function handleDisplayContact() {
    if (isContactDisplayed) {
      setIsContactDisplayed(false);
    } else {
      setIsContactDisplayed(true);
    }
  }

  useEffect(() => {
    if (pageContainer.current && contentContainer.current) {
      if (scrollAmount > (windowSize.y / 3)) {
        setIsColorLight(true);
        pageContainer.current.style.color = darkCol;
        contentContainer.current.style.backgroundColor = lightCol;
        pageContainer.current.style.backgroundColor = lightCol;
      } else {
        setIsColorLight(false);
        pageContainer.current.style.color = lightCol;
        contentContainer.current.style.backgroundColor = darkCol;
        pageContainer.current.style.backgroundColor = darkCol;
      }
    }
  }, [scrollAmount, windowSize])

  return (
    <>
      <div ref={pageContainer} className="bg-gray-100 h-fit format-text text-light bg-dark transition-colors duration-1000">
        {/*@ts-ignore*/}
        <SplashSection ref={titleRef} splashScreenVideo={splashScreenVideo} portfolioSubTitle={portfolioSubTitle} portfolioTitle={portfolioTitle} scrollAmount={scrollAmount} />
        <NavBar isColorLight={isColorLight} scrollAmount={scrollAmount} titleHeight={titleHeight} handleDisplayContact={handleDisplayContact} isContactDisplayed={isContactDisplayed} />
        <div ref={contentContainer} className="relative bg-dark transition-colors duration-1000">
          <TileSection projectsData={projectsData} />
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