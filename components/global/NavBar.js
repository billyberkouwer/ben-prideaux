import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react";
import MoreIcon from './MoreIcon';
import { darkCol, darkColTransparent, lightCol, lightColTransparent } from "styles/tailwindStyles";

export default function NavBar({ handleDisplayContact, isContactDisplayed, titleHeight, scrollAmount, isColorLight }) {
    const route = useRouter().route;
    const moreIcon = useRef();
    const navContainer = useRef();
    const navWrapper = useRef();
    const navPositionPlaceholder = useRef();

    useEffect(() => {
        if (isColorLight) {
            navContainer.current.style.backgroundColor = lightColTransparent;
            navPositionPlaceholder.current.style.backgroundColor = lightCol;
            navContainer.current.style.backgroundOpacity = "50%";
            navContainer.current.style.color = darkCol;
        } else {
            navContainer.current.style.backgroundColor = darkColTransparent;
            navPositionPlaceholder.current.style.backgroundColor = darkCol;
            navContainer.current.style.color = lightCol;
        }
    }, [isColorLight]);

    useEffect(() => {
        navPositionPlaceholder.current.style.height = navContainer.current.getBoundingClientRect().height + "px";

        if (navWrapper.current.getBoundingClientRect().top - titleHeight <= 0) {
            navContainer.current.style.position = "fixed";
            navWrapper.current.style.height = navContainer.current.getBoundingClientRect().height + "px";
            navContainer.current.style.top = 0 + titleHeight + "px";
        } else {
            navContainer.current.style.position = "relative";
            navContainer.current.style.top = "0px";
        }
    }, [scrollAmount, titleHeight])

    useEffect(() => {
        if (isContactDisplayed) {
            moreIcon.current.style.transform = "rotateZ(405deg)"
        } else {
            moreIcon.current.style.transform = "rotateZ(0deg)"
        }
    }, [isContactDisplayed])

    return (
        <>
            <div ref={navWrapper} className="w-full relative">
                <nav ref={navContainer} className=" transition-colors relative w-full duration-1000 backdrop-blur-xl border-y top-0 border-white z-10">
                    <ul className="px-4 text-2xl py-2 page-max-w mx-auto ">
                        {route === '/' ?
                            <li>
                                <button className="flex gap-2" onClick={handleDisplayContact}><span className="mt-2">Contact</span>
                                    <div ref={moreIcon} className="transition-transform transition-colors duration-1000 self-center">
                                        <MoreIcon color={isColorLight ? darkCol : lightCol} />
                                    </div>
                                </button>
                            </li>
                            : null}
                    </ul>
                </nav>
            </div>
            <div ref={navPositionPlaceholder} className="relative w-full transition-colors duration-1000" />
        </>
    )
}