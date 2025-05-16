import { createClient } from 'next-sanity'

import { apiVersion, dataset, origin, projectId, studioSlug } from '../env'
import { readToken } from './token';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: readToken,
  stega: {
    studioUrl: origin + studioSlug,
  },
});