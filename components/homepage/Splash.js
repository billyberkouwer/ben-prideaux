import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Splash({ splashScreenVideo, portfolioTitle, portfolioSubTitle, scrollAmount }) {
    const titleRef = useRef();
    const titleRefStartPos = useRef()
    const overlayRef = useRef();
    const overlayTitleTriggerPoint = useRef();

    useEffect(() => {
        if (titleRef.current) {
            
            // store start position of title ref
            if (!titleRefStartPos.current) {
                titleRefStartPos.current = titleRef.current.getBoundingClientRect().top;
            };

            // translate title down according to scroll amount and trigger point
            if (overlayRef.current.getBoundingClientRect().top >= overlayTitleTriggerPoint.current) {
                titleRef.current.style.transform = `translateY(${-(scrollAmount/1.5)}px)`;
            } 
                // translate title up according scroll amount
                else if (titleRef.current.getBoundingClientRect().top >= 0) {
                titleRef.current.style.transform = `translateY(-${scrollAmount/1.5}px)`;
            }   else {
                    // if fixed to the top, ensure that its fixed precisely to the top of the page
                    if (titleRef.current.style.transform !== `translateY(-${-titleRefStartPos.current + overlayRef.current.getBoundingClientRect().top}px)`) {
                        titleRef.current.style.transform = `translateY(-${-titleRefStartPos.current + overlayRef.current.getBoundingClientRect().top}px)`
                        console.log(-titleRefStartPos.current + overlayRef.current.getBoundingClientRect().top)
                    }

                    // store y coord for where header reaches the top of the screen
                    if (!overlayTitleTriggerPoint.current) {
                        overlayTitleTriggerPoint.current = overlayRef.current.getBoundingClientRect().top;
                    }
            }
        }
    }, [scrollAmount])

    return (
        <>
            <div ref={overlayRef} className="min-h-96 h-75vh w-full relative" />
            <section className='header fixed top-0 text-stone-100 min-h-96 h-75vh w-full'>
                <div className="wh-inherit top-0 mx-auto left-0 z-0">
                    {splashScreenVideo?.asset?.url ? <Image src={splashScreenVideo.asset.url} className='relative object-cover' fill alt="header" /> : null}
                </div>
                <div className="fixed top-0 flex flex-col justify-center wh-inherit min-h-96 h-75vh w-full ">
                    <div ref={titleRef} className=' w-full bg-white/30 pt-4 bg-white/40 backdrop-blur-md border-y border-white'>
                        <div className='container flex page-max-w mx-auto'>
                            <h1 className="text-6xl h-fit self-center z-10 px-8 z-20 relative">{portfolioTitle}</h1>
                        </div>
                    </div>
                    {portfolioSubTitle ? <h2 className="text-3xl h-fit self-center page-max-w px-8">{portfolioSubTitle}</h2> : null}
                </div>
            </section>
        </>
    )
}