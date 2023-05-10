import Image from 'next/image';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { darkCol, lightCol } from 'styles/tailwindStyles';
import usePageSize from 'hooks/usePageSize';

const SplashSection = forwardRef(({ splashScreenVideo, portfolioSubTitle, portfolioTitle }, titleRef) => {
  const [titleContainerSize, setTitleContainerSize] = useState({ height: undefined, width: undefined });
  const sectionRef = useRef();
  const titleContainer = useRef();
  const titleText = useRef();
  const subtitleText = useRef();
  const scrollFactor = 3;
  const useWindowSize = usePageSize();

  useEffect(() => {
    setTitleContainerSize({
      height: titleText.current.getBoundingClientRect().height + subtitleText.current.getBoundingClientRect().height,
      width: Math.max(titleText.current.getBoundingClientRect().width, subtitleText.current.getBoundingClientRect().width)
    });
  }, [useWindowSize]);

  useEffect(() => {
    function handleScroll() {
      const titleIsAtTop = titleContainer.current.getBoundingClientRect().top + (window.scrollY / scrollFactor) <= 0
      if (titleIsAtTop) {
        titleRef.current.style.position = 'fixed';
        titleRef.current.style.top = '0px';
        titleRef.current.style.transform = `translateY(0px)`
        subtitleText.current.style.opacity = 0.5;
        titleRef.current.style.backgroundColor = '#FFFFFF60'
        titleRef.current.style.borderTop = '1px solid white'
        titleRef.current.style.borderBottom = '1px solid white'
        titleRef.current.style.backdropFilter = 'blur(24px)'
        titleText.current.style.color = darkCol;
      } else {
        titleRef.current.style.transform = `translateY(${window.scrollY / scrollFactor}px)`;
        subtitleText.current.style.transform = `translateY(${window.scrollY / scrollFactor}px)`;
        subtitleText.current.style.opacity = 1;
        titleRef.current.style.position = 'relative';
        titleRef.current.style.top = '0px';
        titleRef.current.style.backgroundColor = '#FFFFFF00';
        titleRef.current.style.border = 'none';
        titleRef.current.style.backdropFilter = 'none';
        titleText.current.style.color = lightCol;
      }
    }
    document.addEventListener('scroll', () => handleScroll())
    return () => {
      document.removeEventListener('scroll', () => handleScroll)
    }
  }, [titleRef, useWindowSize])


  // title container height fixed to height of the two children (calculated height in function) so it remains that height regardless of content positioning
  // h1 positioned relative to parent
  // h2 positioned absolute and stuck to bottom of parent to prevent it moving when the position of the h1 changes

  return (
    <>
      <section ref={sectionRef} className='header  overflow-hidden relative top-0 flex flex-col w-full mx-auto min-h-96 h-75vh text-stone-100 justify-center'>
        <div className="fixed wh-inherit top-0 left-0">
          {splashScreenVideo?.asset?.url ? <Image src={splashScreenVideo.asset.url} className='relative object-cover' fill alt="header" /> : null}
        </div>
        <div ref={titleContainer} className='relative w-full' style={{ height: titleContainerSize.height + 'px' }}>
          <div ref={titleRef} className='relative h-fit w-full transition-colors duration-200 ease-in-out' style={{ zIndex: 1 }}>
            <div className='page-max-w mx-auto'>
              <h1 ref={titleText} className="relative transition-colors duration-1000 pt-4 sm:pt-6 md:pt-8 text-4xl sm:text-5xl md:text-6xl h-fit page-max-w px-8">{portfolioTitle}</h1>
            </div>
          </div>
          <div className='page-max-w mx-auto'>
            {portfolioSubTitle ? <h2 ref={subtitleText} className="absolute bottom-0 transition-opacity text-xl sm:text-2xl md:text-3xl lg:text-4xl h-fit page-max-w px-8">{portfolioSubTitle}</h2> : null}
          </div>
        </div>
      </section>
    </>
  )
})

SplashSection.displayName = 'SplashScreen';

export default SplashSection;