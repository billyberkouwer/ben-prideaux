// ./src/sanity/lib/token.ts

import 'server-only'

export const readToken = process.env.SANITY_API_READ_TOKEN

if (!readToken) {
  throw new Error('Missing SANITY_API_READ_TOKEN')
}