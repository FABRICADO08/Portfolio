import { getStore } from '@netlify/blobs'
import { getUser } from '@netlify/identity'
import { isPortfolioOwner } from '../../src/auth/admin-access.mjs'
import { asc, eq } from 'drizzle-orm'
import type { Config } from '@netlify/functions'
import { db } from '../../db/index.js'
import { projects, collections } from '../../db/schema.js'
import { normalizeProjects } from '../lib/project-validation.mjs'

export default async (req: Request) => {
  if (req.method === 'PUT') {
    const user = await getUser()
    if (!user) return Response.json({ error: 'Please sign in again before saving.' }, { status: 401 })
    if (!isPortfolioOwner(user)) return Response.json({ error: 'Only the portfolio owner can manage projects.' }, { status: 403 })
    const text = await req.text()
    if (new TextEncoder().encode(text).length > 1_000_000) return Response.json({ error: 'Project collection is too large.' }, { status: 413 })
    let records
    try { records = normalizeProjects(JSON.parse(text)) } catch (error) {
      return Response.json({ error: error instanceof SyntaxError ? 'Invalid project data.' : (error as Error).message }, { status: 400 })
    }
    try {
      await db.transaction(async (tx) => {
        // Lock a shared row so concurrent collection saves cannot interleave deletes/inserts.
        await tx.insert(collections).values({ name: 'projects', initialized: false }).onConflictDoNothing()
        await tx.select().from(collections).where(eq(collections.name, 'projects')).for('update')
        await tx.delete(projects)
        if (records.length) await tx.insert(projects).values(records)
        await tx.update(collections).set({ initialized: true }).where(eq(collections.name, 'projects'))
      })
      return Response.json({ success: true })
    } catch {
      return Response.json({ error: 'Projects could not be saved. Please try again.' }, { status: 503 })
    }
  }

  if (req.method === 'GET') {
    try {
      const [state] = await db.select().from(collections).where(eq(collections.name, 'projects'))
      if (state?.initialized) {
        const records = await db.select().from(projects).orderBy(asc(projects.position))
        return Response.json(records, { headers: { 'Cache-Control': 'no-store' } })
      }
      // Read old records until the first successful save imports them into the database.
      const data = await getStore({ name: 'portfolio-data', consistency: 'strong' }).get('projects', { type: 'json' })
      return Response.json(Array.isArray(data) ? data : [], { headers: { 'Cache-Control': 'no-store' } })
    } catch {
      return Response.json({ error: 'Projects are temporarily unavailable.' }, { status: 503 })
    }
  }
  return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, PUT' } })
}
export const config: Config = { path: '/api/projects', method: ['GET', 'PUT'] }
