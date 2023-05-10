import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { darkCol, lightCol } from 'styles/tailwindStyles';

export default function SplashSection({ splashScreenVideo, portfolioSubTitle, portfolioTitle, scrollAmount }) {
  const [titleContainerSize, setTitleContainerSize] = useState({ height: undefined, width: undefined });
  const sectionRef = useRef();
  const titleContainer = useRef();
  const titleRef = useRef();
  const titleBg = useRef();
  const subtitleRef = useRef();
  const scrollFactor = 2;

  useEffect(() => {
    setTitleContainerSize({
      height: titleRef.current.getBoundingClientRect().height + subtitleRef.current.getBoundingClientRect().height,
      width: Math.max(titleRef.current.getBoundingClientRect().width, subtitleRef.current.getBoundingClientRect().width)
    });
  }, []);

  useEffect(() => {
    if (titleContainer.current.getBoundingClientRect().top + window.scrollY / scrollFactor <= 0) {
      titleBg.current.style.position = 'fixed';
      titleBg.current.style.top = '0px';
      titleBg.current.style.transform = `translateY(0px)`
      subtitleRef.current.style.opacity = 0;
      titleBg.current.style.backgroundColor = '#FFFFFF60'
      titleBg.current.style.borderTop = '1px solid white'
      titleBg.current.style.borderBottom = '1px solid white'
      titleBg.current.style.backdropFilter = 'blur(24px)'
      titleRef.current.style.color = darkCol;
    } else {
      titleBg.current.style.transform = `translateY(${window.scrollY / scrollFactor}px)`;
      subtitleRef.current.style.transform = `translateY(${window.scrollY / scrollFactor}px)`;
      subtitleRef.current.style.opacity = 1;
      titleBg.current.style.position = 'relative';
      titleBg.current.style.top = '0px';
      titleBg.current.style.backgroundColor = '#FFFFFF00';
      titleBg.current.style.border = 'none';
      titleBg.current.style.backdropFilter = 'none';
      titleRef.current.style.color = lightCol;
    }
  }, [scrollAmount])


  // title container height fixed to height of the two children (calculated height in function) so it remains that height regardless of content positioning
  // h1 positioned relative to parent
  // h2 positioned absolute and stuck to bottom of parent to prevent it moving when the position of the h1 changes

  return (
    <>
      <section ref={sectionRef} className='header relative top-0 flex flex-col w-full mx-auto min-h-96 h-75vh text-stone-100 justify-center'>
        <div className="fixed wh-inherit top-0 left-0">
          {splashScreenVideo?.asset?.url ? <Image src={splashScreenVideo.asset.url} className='relative object-cover' fill alt="header" /> : null}
        </div>
        <div ref={titleContainer} className='relative w-full' style={{ height: titleContainerSize.height + 'px' }}>
          <div ref={titleBg} className='relative h-fit w-full transition-colors duration-200 ease-in-out' style={{ zIndex: 1 }}>
            <div className='container mx-auto'>
              <h1 ref={titleRef} className="relative transition-colors duration-1000 pt-8 text-6xl h-fit page-max-w px-8">{portfolioTitle}</h1>
            </div>
          </div>
          <div className='container mx-auto'>
            {portfolioSubTitle ? <h2 ref={subtitleRef} className="absolute bottom-0 transition-opacity text-3xl h-fit page-max-w px-8">{portfolioSubTitle}</h2> : null}
          </div>
        </div>
      </section>
    </>
  )
}