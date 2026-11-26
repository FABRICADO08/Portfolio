// Public portfolio content. Update this file and redeploy to publish changes.
export const profile = {
  name: 'Anele Simbela',
  role: 'Software Developer',
  email: 'anelefabricado@gmail.com',
  github: 'https://github.com/FABRICADO08',
  linkedin: 'https://www.linkedin.com/in/anele-simbela-2202b9349',
  // Put a PDF in public/ (for example /Anele-Simbela-CV.pdf) and set the path here
  // to turn the header button into a real CV download.
  cvUrl: '',
}

export const projects = [
  {
    id: 'grill-the-code',
    title: 'Grill-the-Code',
    description: 'Collaborative Mendix app with junior developers',
    tags: ['Mendix', 'Collaboration'],
    art: 'code',
    github: '',
    live: '',
  },
  {
    id: 'mps-virtual-playbook',
    title: 'MPS Virtual Playbook',
    description: 'GPS4MPS calendar & playbook solution',
    tags: ['React', 'FullCalendar'],
    art: 'calendar',
    github: '',
    live: '',
  },
  {
    id: 'security-scanner',
    title: 'Security Scanner',
    description: 'Mendix security analysis tool',
    tags: ['Python', 'Security'],
    art: 'shield',
    github: '',
    live: '',
  },
  {
    id: 'budget-tracker',
    title: 'Budget Tracker',
    description: 'Personal finance app (Kotlin/Android)',
    tags: ['Kotlin', 'Finance'],
    art: 'chart',
    github: 'https://github.com/FABRICADO08/Budget-Tracker',
    live: '',
  },
]

export const techStrip = [
  { id: 'mendix', name: 'Mendix', note: 'Advanced Developer' },
  { id: 'react', name: 'React', note: 'Frontend Expert' },
  { id: 'azure', name: 'Azure', note: 'Cloud Ready' },
  { id: 'python', name: 'Python', note: 'Developer' },
  { id: 'power', name: 'Power Platform', note: 'Automate & Build' },
  { id: 'agile', name: 'Agile', note: 'Project Management' },
]

// Self-rated proficiency shown as progress bars. Adjust to taste.
export const skillLevels = [
  { name: 'Mendix', level: 95 },
  { name: 'React', level: 90 },
  { name: 'Azure', level: 88 },
  { name: 'Python', level: 80 },
  { name: 'Agile & Scrum', level: 92 },
]

export const skills = [
  'Mendix',
  'React',
  'JavaScript',
  'TypeScript',
  'Java',
  'Kotlin',
  'Jetpack Compose',
  'Python',
  'HTML',
  'CSS',
  'REST APIs',
  'Microsoft Azure',
  'PostgreSQL',
  'Docker',
  'Git',
  'Agile Project Management',
]

export const certifications = [
  { id: 'az-900', image: '/img/AZ-900.png', label: 'Microsoft Azure Fundamentals', code: '(AZ-900)', title: 'Microsoft Certified: Azure Fundamentals (AZ-900)', description: 'Foundational knowledge of Azure cloud concepts, services, security and governance.' },
  { id: 'az-204', image: '/img/azure-developer-associate-600x600.png', label: 'Microsoft Azure Developer', code: '(AZ-204)', title: 'Microsoft Certified: Azure Developer Associate (AZ-204)', description: 'Designing, building, testing and maintaining cloud applications and services on Microsoft Azure.' },
  { id: 'security-plus', image: '/img/SecurityPlus Logo Certified CE.png', label: 'CompTIA Security+', code: '', title: 'CompTIA Security+', description: 'Cybersecurity principles, risk management and security practices.' },
  { id: 'pl-900', image: '/img/CERT-Fundamentals-Power-Platform.png', label: 'Power Platform', code: '(PL-900)', title: 'Microsoft Certified: Power Platform Fundamentals (PL-900)', description: 'Foundational knowledge of Microsoft Power Platform, including Power Apps and Power Automate.' },
  { id: 'mendix-rapid', image: '/img/Rapid-min.png', label: 'Mendix Rapid Developer', code: '', title: 'Mendix Rapid Developer Certification', description: 'Foundational Mendix application development, data modelling and deployment.' },
  { id: 'agilepm', image: '/img/Agile_Project_Management_Foundation__600PX.png', label: 'AgilePM Foundation', code: '', title: 'AgilePM Foundation', description: 'Agile project management principles, practices and delivery frameworks.' },
]

// The home page shows the first four credentials, matching the design.
export const featuredCertificationIds = ['az-900', 'az-204', 'security-plus', 'pl-900']
