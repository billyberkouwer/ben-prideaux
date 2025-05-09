import { groq } from "next-sanity";

export const homeQuery = groq`*[_type == "home"][0]{
    ...
}`

export const navListQuery = groq`*[_type == "projectPage"]{
    title,
    "slug": slug.current
}`