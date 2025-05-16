import { SanityImageAssetDocument } from "next-sanity"

export interface ProjectPage {
  _createdAt: string
  _id: string
  _originalId: string
  _rev: string
  _type: string
  _updatedAt: string
  date: string
  enableVideoHeader: boolean
  orderRank: string
  pageBuilder: PageBuilder[]
  pageColors: PageColors
  role: Role[]
  slug: Slug
  title: string
  videoHeader: VideoHeader
}

export interface PageBuilder {
  rowItems: RowItem[]
  hasPadding?: boolean
}

export interface RowItem {
  _key: string
  _type: string
  alt?: string
  columnOffset: number
  columnVerticalAlignment?: | "align-self-start"
  | "align-self-center"
  | "align-self-end"
  columnWidth: number
  image?: SanityImageAssetDocument
  cropYoutubeUI?: boolean
  showControls?: boolean
  title?: string
  videoAspectRatio?: VideoAspectRatio
  videoUrl?: string
  paragraphText?: ParagraphText[]
}

export interface Metadata {
  _type: string
  blurHash: string
  dimensions: Dimensions
  hasAlpha: boolean
  isOpaque: boolean
  lqip: string
  palette: Palette
}

export interface Dimensions {
  _type: string
  aspectRatio: number
  height: number
  width: number
}

export interface Palette {
  _type: string
  darkMuted: DarkMuted
  darkVibrant: DarkVibrant
  dominant: Dominant
  lightMuted: LightMuted
  lightVibrant: LightVibrant
  muted: Muted
  vibrant: Vibrant
}

export interface DarkMuted {
  _type: string
  background: string
  foreground: string
  population: number
  title: string
}

export interface DarkVibrant {
  _type: string
  background: string
  foreground: string
  population: number
  title: string
}

export interface Dominant {
  _type: string
  background: string
  foreground: string
  population: number
  title: string
}

export interface LightMuted {
  _type: string
  background: string
  foreground: string
  population: number
  title: string
}

export interface LightVibrant {
  _type: string
  background: string
  foreground: string
  population: number
  title: string
}

export interface Muted {
  _type: string
  background: string
  foreground: string
  population: number
  title: string
}

export interface Vibrant {
  _type: string
  background: string
  foreground: string
  population: number
  title: string
}

export interface VideoAspectRatio {
  _type: string
  x: number
  y: number
}

export interface ParagraphText {
  _key: string
  _type: string
  children: Children[]
  markDefs: MarkDef[]
  style: string
}

export interface Children {
  _key: string
  _type: string
  marks: string[]
  text: string
}

export interface MarkDef {
  _key: string
  _type: string
  href: string
}

export interface PageColors {
  _type: string
  backgroundColor: BackgroundColor
  foregroundColor: ForegroundColor
}

export interface BackgroundColor {
  _type: string
  alpha: number
  hex: string
  hsl: Hsl
  hsv: Hsv
  rgb: Rgb
}

export interface Hsl {
  _type: string
  a: number
  h: number
  l: number
  s: number
}

export interface Hsv {
  _type: string
  a: number
  h: number
  s: number
  v: number
}

export interface Rgb {
  _type: string
  a: number
  b: number
  g: number
  r: number
}

export interface ForegroundColor {
  _type: string
  alpha: number
  hex: string
  hsl: Hsl2
  hsv: Hsv2
  rgb: Rgb2
}

export interface Hsl2 {
  _type: string
  a: number
  h: number
  l: number
  s: number
}

export interface Hsv2 {
  _type: string
  a: number
  h: number
  s: number
  v: number
}

export interface Rgb2 {
  _type: string
  a: number
  b: number
  g: number
  r: number
}

export interface Role {
  _key: string
  _ref: string
  _type: string
}

export interface Slug {
  _type: string
  current: string
}

export interface VideoHeader {
  _type: string
  cropYoutubeUI: boolean
  showControls: boolean
  videoAspectRatio: VideoAspectRatio2
  videoUrl: string
}

export interface VideoAspectRatio2 {
  _type: string
  x: number
  y: number
}
