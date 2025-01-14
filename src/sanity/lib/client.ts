import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skagub4Hu9jRZ3DJRJRHPbBLnQjWir3sSksH1yohixw7Pnln2ezKHeXSIA6Xfv0gCZfviZ7kyNk4UJXAxetMqCR8FJU60F86Iq1iJB41eBWUPkuemzn2JQ7ZeGxm9UJpACVwYNdA67CE0OAtrxtkV5meRi3m69g4eGdNtq4OM0yEQpfcOqhM"
})
