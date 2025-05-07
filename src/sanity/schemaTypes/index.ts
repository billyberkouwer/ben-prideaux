import { type SchemaTypeDefinition } from 'sanity'
import { page } from './documents/page'
import { home } from './documents/home'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, home],
}
