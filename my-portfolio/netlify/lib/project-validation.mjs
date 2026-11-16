export function normalizeProjects(input) {
  if (!Array.isArray(input) || input.length > 100) throw new Error('Provide a collection of up to 100 projects.')
  const ids = new Set()
  return input.map((entry, position) => {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) throw new Error('Each project must be an object.')
    const project = {}
    for (const [field, limit] of Object.entries({ id: 100, title: 160, description: 3000, tech: 500, image: 2048, github: 2048, live: 2048 })) {
      const value = entry[field] ?? ''
      if (typeof value !== 'string' || value.length > limit) throw new Error(`Project ${position + 1}: ${field} must be text under ${limit + 1} characters.`)
      project[field] = value.trim()
    }
    if (!project.id || !project.title) throw new Error(`Project ${position + 1} needs an ID and title.`)
    if (ids.has(project.id)) throw new Error('Project IDs must be unique.')
    ids.add(project.id)
    for (const field of ['image', 'github', 'live']) {
      if (!project[field]) continue
      if (field === 'image' && /^\/(?!\/)/.test(project[field])) continue
      let url
      try { url = new URL(project[field]) } catch { throw new Error(`Project ${position + 1}: provide a complete ${field} URL.`) }
      if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) throw new Error(`Project ${position + 1}: ${field} must use HTTP or HTTPS without credentials.`)
      if (field === 'github' && url.hostname !== 'github.com') throw new Error(`Project ${position + 1}: use a github.com repository link.`)
    }
    return { ...project, position }
  })
}
