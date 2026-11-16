import test from 'node:test'
import assert from 'node:assert/strict'
import { isPortfolioOwner } from '../src/auth/admin-access.mjs'

test('allows only the confirmed portfolio owner', () => {
  assert.equal(isPortfolioOwner({ email: 'anelefabricado@gmail.com', confirmedAt: '2026-01-01' }), true)
  assert.equal(isPortfolioOwner({ email: 'AneleFabricado@gmail.com', confirmedAt: '2026-01-01' }), true)
  assert.equal(isPortfolioOwner(null), false)
  assert.equal(isPortfolioOwner({ email: 'anelefabricado@gmail.com' }), false)
  assert.equal(isPortfolioOwner({ email: 'visitor@example.com', confirmedAt: '2026-01-01', roles: ['admin'] }), false)
  assert.equal(isPortfolioOwner({ email: 'visitor@example.com', data: { email: 'anelefabricado@gmail.com', confirmedAt: '2026-01-01' } }), false)
})
