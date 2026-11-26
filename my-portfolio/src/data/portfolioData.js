export const profile = {
  name: 'Anele Simbela',
  headline: 'Software Developer | Mendix Low-Code Developer',
  location: 'Bizana, Eastern Cape, South Africa',
  email: 'anelefabricado@gmail.com',
  portfolio: 'https://portfolio-27b98.web.app/',
  github: 'https://github.com/FABRICADO08',
  linkedin: 'https://www.linkedin.com/in/anele-simbela-2202b9349',
  summary: 'Software developer with a BSc in Computer Science and Physics and professional experience contributing to enterprise application delivery. Experienced in Mendix development, requirements analysis, REST API integrations, testing, debugging and technical documentation, with additional work across React, TypeScript and Android development. Focused on translating business needs into reliable, maintainable digital solutions.',
}

export const experience = [
  { role: 'Graduate Trainee', organisation: 'Mercedes-Benz South Africa', dates: 'February 2026 - Present', detail: 'Contributing to enterprise application delivery, with experience in Mendix development, requirements analysis, integrations, testing and technical documentation.' },
  { role: 'Internal Intern', organisation: 'Mercedes-Benz South Africa', dates: 'August 2024 - January 2026', detail: 'Supported the development and improvement of internal business applications, collaborating with developers and stakeholders on requirements, implementation, testing and support.' },
  { role: 'External Intern', organisation: 'Mercedes-Benz South Africa - NetCampus', dates: 'July 2023 - July 2024', detail: 'Completed an external internship placement, gaining practical experience in enterprise IT and software development within a corporate environment.' },
]

export const education = [
  { qualification: 'Honours in Computing', institution: 'University of South Africa (UNISA)', dates: 'In progress' },
  { qualification: 'BSc in Computer Science and Physics', institution: 'University of Fort Hare, South Africa', dates: 'Completed May 2023' },
]

export const projects = [
  { id: 'grill-the-code', art: 'code', card: { summary: 'Collaborative Mendix app with junior developers', tags: ['Mendix', 'Collaboration'] }, title: 'Grill-the-Code', description: 'A collaborative Mendix application built together with junior developers.', tech: 'Mendix', image: '', github: '', live: '' },
  { id: 'gps4mps', art: 'calendar', card: { summary: 'GPS4MPS calendar & playbook solution', tags: ['React', 'FullCalendar'] }, title: 'MPS Virtual Playbook', description: 'A React and TypeScript planning experience featuring calendar workflows, reusable interface components, role-aware navigation and Microsoft 365 integration. Organisation-specific information and access details are excluded to protect internal confidentiality.', tech: 'React, TypeScript, Vite, FullCalendar, Microsoft 365', image: '', github: '', live: '' },
  { id: 'security-scanner', art: 'shield', card: { summary: 'Mendix security analysis tool', tags: ['Python', 'Security'] }, title: 'Security Scanner', description: 'A Python-based tool for analysing the security of Mendix applications.', tech: 'Python, Security', image: '', github: '', live: '' },
  { id: 'budget-tracker', art: 'chart', card: { summary: 'Personal finance app (Kotlin/Android)', tags: ['Kotlin', 'Finance'] }, title: 'Budget Tracker', description: 'A Kotlin-based Android application focused on personal financial management. It is designed to help users track income and expenses, organise budgets and manage day-to-day finances through a clear mobile interface, with South African users in mind.', tech: 'Kotlin, Android, Jetpack Compose', image: '', github: 'https://github.com/FABRICADO08/Budget-Tracker', live: '' },
  { id: 'mendix-enterprise', art: 'code', title: 'Enterprise Mendix Applications', description: 'Contributions to enterprise low-code application delivery, including requirements analysis, Mendix development, REST API integration, testing, debugging and technical documentation. Project-specific information is intentionally limited where confidentiality applies.', tech: 'Mendix, Java, REST APIs, JavaScript, SQL, Agile', image: '', github: '', live: '' },
]

export const skills = ['Mendix', 'React', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'Jetpack Compose', 'HTML', 'CSS', 'REST APIs', 'Microsoft Azure', 'PostgreSQL', 'Docker', 'Git', 'Agile Project Management']

export const certifications = [
  { id: 'security-plus', label: 'CompTIA Security+', code: '', image: '/img/SecurityPlus Logo Certified CE.png', title: 'CompTIA Security+', description: 'Cybersecurity principles, risk management and security practices.' },
  { id: 'az-204', label: 'Microsoft Azure Developer', code: '(AZ-204)', image: '/img/azure-developer-associate-600x600.png', title: 'Microsoft Certified: Azure Developer Associate (AZ-204)', description: 'Designing, building, testing and maintaining cloud applications and services on Microsoft Azure.' },
  { id: 'pl-900', label: 'Power Platform', code: '(PL-900)', image: '/img/CERT-Fundamentals-Power-Platform.png', title: 'Microsoft Certified: Power Platform Fundamentals (PL-900)', description: 'Foundational knowledge of Microsoft Power Platform, including Power Apps and Power Automate.' },
  { id: 'az-900', label: 'Microsoft Azure Fundamentals', code: '(AZ-900)', image: '/img/AZ-900.png', title: 'Microsoft Certified: Azure Fundamentals (AZ-900)', description: 'Foundational knowledge of Azure cloud concepts, services, security and governance.' },
  { id: 'mendix-rapid', label: 'Mendix Rapid Developer', code: '', image: '/img/Rapid-min.png', title: 'Mendix Rapid Developer Certification', description: 'Foundational Mendix application development, data modelling and deployment.' },
  { id: 'agilepm', label: 'AgilePM Foundation', code: '', image: '/img/Agile_Project_Management_Foundation__600PX.png', title: 'AgilePM Foundation', description: 'Agile project management principles, practices and delivery frameworks.' },
]

// Home page design data (cards, strip, bars). The CV generator still uses the full lists above.
export const techStrip = [
  { id: 'mendix', name: 'Mendix', note: 'Advanced Developer' },
  { id: 'react', name: 'React', note: 'Frontend Expert' },
  { id: 'java', name: 'Java', note: 'Backend Developer' },
  { id: 'azure', name: 'Azure', note: 'Cloud Ready' },
  { id: 'python', name: 'Python', note: 'Developer' },
  { id: 'power', name: 'Power Platform', note: 'Automate & Build' },
  { id: 'agile', name: 'Agile', note: 'Project Management' },
]

// Self-rated proficiency shown as progress bars. Adjust to taste.
export const skillLevels = [
  { name: 'Mendix', level: 95 },
  { name: 'React', level: 90 },
  { name: 'Java', level: 85 },
  { name: 'Azure', level: 88 },
  { name: 'Python', level: 80 },
  { name: 'Agile & Scrum', level: 92 },
]

// The home page shows these four credentials, matching the design.
export const featuredCertificationIds = ['az-900', 'az-204', 'security-plus', 'pl-900']
