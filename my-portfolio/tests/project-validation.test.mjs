import test from 'node:test'
import assert from 'node:assert/strict'
import { normalizeProjects } from '../netlify/lib/project-validation.mjs'

const project = { id: 'project-1', title: ' My project ', description: 'Built a booking workflow.', tech: 'React', github: 'https://github.com/developer/project', live: 'https://project.netlify.app', image: '/img/preview.png' }

test('normalizes complete project records and preserves links and descriptions', () => {
  const [saved] = normalizeProjects([project])
  assert.equal(saved.title, 'My project')
  assert.equal(saved.description, project.description)
  assert.equal(saved.github, project.github)
  assert.equal(saved.live, project.live)
  assert.equal(saved.position, 0)
})
test('allows an empty collection and projects with private or unavailable links', () => {
  assert.deepEqual(normalizeProjects([]), [])
  const [saved] = normalizeProjects([{ id: 'private', title: 'Private work' }])
  assert.equal(saved.github, '')
  assert.equal(saved.live, '')
})
test('rejects unsafe URLs, embedded credentials, and fake GitHub domains', () => {
  for (const github of ['javascript:alert(1)', '#', 'https://github.com.evil.test/repo', 'https://github.com@evil.test/repo', 'https://user:password@github.com/repo']) {
    assert.throws(() => normalizeProjects([{ ...project, github }]))
  }
  for (const image of ['//evil.test/image.png', 'data:image/svg+xml,test', 'javascript:alert(1)']) {
    assert.throws(() => normalizeProjects([{ ...project, image }]))
  }
})
test('rejects invalid record shapes, duplicate IDs, blank titles and excess content', () => {
  for (const input of [{}, [null], [project, project], [{ ...project, title: ' ' }], [{ ...project, description: 'a'.repeat(3001) }], [{ ...project, tech: [] }], Array(101).fill(project)]) {
    assert.throws(() => normalizeProjects(input))
  }
})
test('retains collection order and discards untrusted extra fields', () => {
  const result = normalizeProjects([{ ...project, admin: true }, { id: 'second', title: 'Second' }])
  assert.deepEqual(result.map(({ id, position }) => ({ id, position })), [{ id: 'project-1', position: 0 }, { id: 'second', position: 1 }])
  assert.equal('admin' in result[0], false)
})
