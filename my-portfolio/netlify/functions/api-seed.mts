import { getStore } from '@netlify/blobs'
import { getUser } from '@netlify/identity'
import type { Config, Context } from '@netlify/functions'

const defaultProjects = [
  {
    id: '1',
    image: '/images/project-budget-tracker.png',
    title: 'Budget Tracker',
    tech: 'React, Firebase',
    live: '#',
    github: '#',
  },
  {
    id: '2',
    image: '/images/project-mendix-app.png',
    title: 'Mendix Business App',
    tech: 'Mendix, REST APIs',
    live: '#',
    github: '#',
  },
]

const defaultSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind',
  'Mendix',
  'REST APIs',
]

const defaultCertifications = [
  {
    id: '1',
    image: '/img/SecurityPlus Logo Certified CE.png',
    title: 'CompTIA Security+',
    description:
      'Industry-standard certification covering cybersecurity fundamentals, risk management, and security protocols.',
  },
  {
    id: '2',
    image: '/img/azure-developer-associate-600x600.png',
    title: 'Azure Developer Associate (AZ-204)',
    description:
      'Advanced certification demonstrating expertise in developing cloud applications and services on Microsoft Azure.',
  },
  {
    id: '3',
    image: '/img/CERT-Fundamentals-Power-Platform.png',
    title: 'Power Platform Fundamentals (PL-900)',
    description:
      'Foundation certification covering Microsoft Power Platform tools including Power Apps, Power BI, and Power Automate.',
  },
  {
    id: '4',
    image: '/img/AZ-900.png',
    title: 'Azure Fundamentals (AZ-900)',
    description:
      'Entry-level certification covering core Azure services, security, privacy, compliance, and pricing.',
  },
  {
    id: '5',
    image: '/img/Rapid-min.png',
    title: 'Mendix Rapid Developer Certification',
    description:
      'Professional certification in Mendix low-code platform, covering app development, data modeling, and deployment.',
  },
  {
    id: '6',
    image: '/img/Agile_Project_Management_Foundation__600PX.png',
    title: 'AgilePM Foundation',
    description:
      'Certification in Agile Project Management methodology, covering principles, practices, and frameworks.',
  },
]

export default async (req: Request, context: Context) => {
  const user = await getUser()
  if (!user) return new Response('Unauthorized', { status: 401 })

  const store = getStore({ name: 'portfolio-data', consistency: 'strong' })

  const existingProjects = await store.get('projects', { type: 'json' })
  const existingSkills = await store.get('skills', { type: 'json' })
  const existingCerts = await store.get('certifications', { type: 'json' })

  if (!existingProjects) await store.setJSON('projects', defaultProjects)
  if (!existingSkills) await store.setJSON('skills', defaultSkills)
  if (!existingCerts) await store.setJSON('certifications', defaultCertifications)

  return Response.json({
    success: true,
    seeded: {
      projects: !existingProjects,
      skills: !existingSkills,
      certifications: !existingCerts,
    },
  })
}

export const config: Config = {
  path: '/api/seed',
  method: ['POST'],
}
