import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect, useRef } from "react";

export default function NavBar({ handleDisplayContact, isContactDisplayed }) {
    const route = useRouter().route;
    const moreIcon = useRef();

    useEffect(() => {
        if (isContactDisplayed) {
            moreIcon.current.style.transform = "rotateZ(405deg)"
        }   else {
            moreIcon.current.style.transform = "rotateZ(0deg)"
        }
    }, [isContactDisplayed])

    return (
        <nav className="bg-white/40 backdrop-blur-md border-y top-0 border-white">
            <ul className="px-8 text-2xl py-2 page-max-w mx-auto ">
                {route === '/' ?
                    <li>
                        <button className="flex gap-2" onClick={handleDisplayContact}><span className="mt-2">Contact</span><Image src={'/more-icon.svg'} width={10} height={10} className="transition-transform duration-1000 self-center" ref={moreIcon} /></button>
                    </li>
                    : null}
            </ul>
        </nav>
    )
}