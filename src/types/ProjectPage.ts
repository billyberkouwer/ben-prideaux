
export interface ProjectPage {
  _createdAt: string
  _id: string
  _originalId: string
  _rev: string
  _type: string
  _updatedAt: string
  date?: string
  enableVideoHeader: boolean
  orderRank: string
  pageBuilder?: PageBuilder[]
  pageColors: PageColors
  role?: Role[]
  slug?: Slug
  title?: string
  videoHeader?: VideoHeader
}

export interface PageBuilder {
  _key: string
  _type: string
  rowItems: RowItem[]
}

export interface RowItem {
  _key: string
  _type: string
  columnOffset: number
  columnWidth: number
  columnVerticalAlignment?: string
  videoAspectRatio?: VideoAspectRatio
}

export interface VideoAspectRatio {
  _type: string
  x: number
  y: number
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
  videoAspectRatio: VideoAspectRatio2
}

export interface VideoAspectRatio2 {
  _type: string
  x: number
  y: number
}
