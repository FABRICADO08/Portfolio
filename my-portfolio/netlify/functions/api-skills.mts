import { getStore } from '@netlify/blobs'
import { getUser } from '@netlify/identity'
import type { Config, Context } from '@netlify/functions'

export default async (req: Request, context: Context) => {
  const store = getStore({ name: 'portfolio-data', consistency: 'strong' })

  if (req.method === 'GET') {
    const data = await store.get('skills', { type: 'json' })
    return Response.json(data ?? [])
  }

  if (req.method === 'PUT') {
    const user = await getUser()
    if (!user) return new Response('Unauthorized', { status: 401 })

    const skills = await req.json()
    await store.setJSON('skills', skills)
    return Response.json({ success: true })
  }

  return new Response('Method not allowed', { status: 405 })
}

export const config: Config = {
  path: '/api/skills',
  method: ['GET', 'PUT'],
}
