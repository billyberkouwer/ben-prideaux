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

export const projectPages = groq`*[_type == "projectPage"]{
    ...,
    "slug": slug.current
}`

export const projectPageBySlug = groq`*[_type == "projectPage" && slug.current == $slug][0]{
    ...,
    "pageBuilder": pageBuilder[]{
        hasPadding,
        "rowItems": rowItems[]{
        ...,
        _type == "columnImage" => 
            @{"image": image.asset->},
    }
  }
}`

export const homepageProjectsQuery = groq`*[_type == "projectPage" ]|order(orderRank){
  date,
  title,
  "slug": slug.current,
  "roles": role[]->.title,
  "projectImages": pageBuilder[].rowItems[_type == "columnImage"].image.asset->
}`