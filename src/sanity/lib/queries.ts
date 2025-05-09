import { groq } from "next-sanity";

export const homeQuery = groq`*[_type == "home"][0]{
    ...,
    "aboutImages": aboutImages[].asset->
}`

export const navSiteDataQuery = groq`*[_type == "home"][0]{
    title,
    subtitle
}`

export const navListQuery = groq`*[_type == "projectPage"]{
    title,
    "slug": slug.current
}`