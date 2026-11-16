import { pgTable, text, integer, boolean } from 'drizzle-orm/pg-core'

export const projects = pgTable('portfolio_projects', {
  id: text().primaryKey(),
  title: text().notNull(),
  description: text().notNull().default(''),
  tech: text().notNull().default(''),
  image: text().notNull().default(''),
  github: text().notNull().default(''),
  live: text().notNull().default(''),
  position: integer().notNull().default(0),
})

// Distinguishes an intentionally empty collection from projects not yet imported.
export const collections = pgTable('portfolio_collections', {
  name: text().primaryKey(),
  initialized: boolean().notNull().default(false),
})
