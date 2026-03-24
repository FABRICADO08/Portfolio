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
          Education & Professional Certifications
        </h1>
        <p className="text-center text-gray-400 text-xl mb-16">
          Education & Professional Certifications
        </p>

        {/* Timeline container */}
        <div className="relative pl-8 md:pl-16">

          <div className="mb-16 relative">
            <div className="ml-12 md:ml-16 bg-gray-800 p-6 rounded-xl border-l-4 border-blue-500 shadow-md">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                Bachelor of Science: Computer Science
              </h3>
              <p className="text-gray-300 mb-1">
                University of Fort Hare, Alice, SA — 2023
              </p>
              <p className="text-gray-400">
                Graduated with Bachelor's Degree in BSc in Computer Science and Physics
              </p>
            </div>
          </div>

          {/* Certifications Title */}
          <h2 className="text-3xl font-bold text-center text-blue-300 mb-12 mt-20">
            Professional Certifications
          </h2>

          {/* Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="relative">
                <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                  <img
                    src={cert.image}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                  <h4 className="text-xl font-semibold text-white">{cert.title}</h4>
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
