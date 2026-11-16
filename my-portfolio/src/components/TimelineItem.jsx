import React, { useState, useEffect } from 'react';

const fallbackCertifications = [
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
];

const Timeline = () => {
  const [certifications, setCertifications] = useState(fallbackCertifications);

  useEffect(() => {
    fetch('/api/certifications')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setCertifications(data);
      })
      .catch(() => {});
  }, []);

  return (
    <section id="timeline" className="pt-32 pb-20 bg-gray-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl md:text-3xl font-bold text-center mb-2">
          Experience, Education & Certifications
        </h1>
        <p className="text-center text-gray-400 text-xl mb-16">
          Career progression, qualifications and continued learning
        </p>

        {/* Timeline container */}
        <div className="relative">

          <section aria-labelledby="experience-heading" className="mb-16">
            <h2 id="experience-heading" className="text-3xl font-bold mb-8">Experience at Mercedes-Benz South Africa</h2>
            <ol className="space-y-6">
              {[
                ['Graduate Trainee', 'February 2026 – Present', 'Graduate Trainee at Mercedes-Benz South Africa.'],
                ['Internal Intern', 'August 2024 – January 2026', 'Internal internship at Mercedes-Benz South Africa.'],
                ['External Intern through NetCampus', 'July 2023 – July 2024', 'External internship at Mercedes-Benz South Africa through NetCampus.'],
              ].map(([role, dates, description]) => <li key={role} className="bg-gray-800 p-6 rounded-xl border-l-4 border-blue-500"><p className="text-blue-300 mb-2">{dates}</p><h3 className="text-xl font-semibold mb-2">{role}</h3><p className="text-gray-300">{description}</p></li>)}
            </ol>
          </section>
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-blue-500 mb-6"><h3 className="text-2xl font-semibold text-blue-400 mb-2">Honours in Computing</h3><p className="text-gray-300">University of South Africa (UNISA)</p><p className="text-gray-400">Currently studying</p></div>
          <div className="mb-16 relative">
            <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-blue-500 shadow-md">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                BSc Computer Science and Physics
              </h3>
              <p className="text-gray-300 mb-1">
                University of Fort Hare, South Africa
              </p>
              <p className="text-gray-400">
                Graduated in May 2023.
              </p>
            </div>
          </div>

          {/* Certifications Title */}
          <h2 className="text-3xl font-bold text-center text-blue-300 mb-12 mt-20">
            Professional Certifications
          </h2>

          <p className="text-gray-300 mb-6">Certification titles are listed below; issuer verification links and award dates are not yet published.</p>
          {/* Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="relative">
                <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                  <img
                    src={cert.image}
                    alt="" loading="lazy" width="80" height="80"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                  <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                  <p className="text-gray-300 mt-2">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
