import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function Tile({isPriority, projectThumbnail, projectTitle, homepageExcerpt}) {

    return (
        <div className={`container grid h-36 sm:h-52 lg:h-64 xl:96 2xl:h-fit grid-rows-[8fr_1fr_2fr] ${isPriority ? ' col-span-2' : ' col-span-1'}`}>
            <div className="flex-shrink relative">
                <Image src={projectThumbnail.asset.url} className='relative object-cover' fill alt="header" />
            </div>
            <h3 className="text-sm sm:text-lg xl:text-2xl px-2 pt-2">{projectTitle}</h3>
            <div className="h-fit px-2 overflow-hidden">
                <PortableText value={homepageExcerpt} />
            </div>
        </div>
    )
}