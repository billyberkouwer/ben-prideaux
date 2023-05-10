import Image from 'next/image';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

export default function SplashSection({ splashScreenVideo, portfolioSubTitle, portfolioTitle, scrollAmount }) {
  const [sectionHeight, setSectionHeight] = useState()
  const [titleContainerSize, setTitleContainerSize] = useState({height: undefined, width: undefined});
  const sectionRef = useRef();
  const titleContainer = useRef();
  const titleRef = useRef();
  const titleBg = useRef();
  const subtitleRef = useRef();
  const scrollFactor = 2;

  useEffect(() => {
    setSectionHeight(sectionRef.current.getBoundingClientRect().height)
    setTitleContainerSize({
      height: titleRef.current.getBoundingClientRect().height + subtitleRef.current.getBoundingClientRect().height, 
      width: Math.max(titleRef.current.getBoundingClientRect().width, subtitleRef.current.getBoundingClientRect().width)
    });
  }, [])

  useEffect(() => {
    function handleScroll(scrollAmount) {

      if (titleContainer.current.getBoundingClientRect().top <= 0) {
        titleBg.current.style.position = 'fixed';
        titleBg.current.style.top = '0px';
        titleBg.current.style.backgroundColor = '#FFFFFF50'
        titleBg.current.style.borderTop = '1px solid white'
        titleBg.current.style.borderBottom = '1px solid white'
        titleBg.current.style.backdropFilter = 'blur(24px)'
      } else {
        titleBg.current.style.position = 'relative';
        titleBg.current.style.top = '0px';
        titleBg.current.style.backgroundColor = '#FFFFFF00';
        titleBg.current.style.border = 'none';
        titleBg.current.style.backdropFilter = 'none';
      }
    }

    if (sectionRef.current) {
      document.addEventListener('scroll', () => handleScroll(window.scrollY))
    }
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <>
      <div style={{ height: sectionHeight + 'px' }} />
      <section ref={sectionRef} className='header absolute top-0 flex flex-col w-full mx-auto min-h-96 h-75vh text-stone-100 justify-center'>
        <div className="fixed wh-inherit top-0 left-0">
          {splashScreenVideo?.asset?.url ? <Image src={splashScreenVideo.asset.url} className='relative object-cover' fill alt="header" /> : null}
        </div>
        <div ref={titleContainer} className='absolute w-full' style={{height: titleContainerSize.height + 'px'}}>
          <div ref={titleBg} className='relative h-fit w-full transition-colors duration-200 ease-in-out' style={{zIndex: 1}}>
            <div className='container mx-auto'>
              <h1 ref={titleRef} className="relative pt-8 text-6xl h-fit page-max-w px-8">{portfolioTitle}</h1>
            </div>
          </div>
          <div className='container mx-auto'>
            {portfolioSubTitle ? <h2 ref={subtitleRef} className="absolute bottom-0 text-3xl h-fit page-max-w px-8">{portfolioSubTitle}</h2> : null}
          </div>
        </div>
      </section>
    </>
  )
}