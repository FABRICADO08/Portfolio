// src/components/Timeline.jsx
import React from 'react';

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-gray-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* Profile Image – centered at top */}
        <div className="flex justify-center mb-12">
          <img
            src="/img/ANELE.Simbela.profile.png"
            alt="Anele Simbela"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          Anele Simbela
        </h1>
        <p className="text-center text-gray-400 text-xl mb-16">
          Education & Professional Certifications
        </p>

        {/* Timeline container */}
        <div className="relative pl-8 md:pl-16">

          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>

          {/* Education Item */}
          <div className="mb-16 relative">
            <div className="absolute -left-3 md:-left-7 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <i className="fas fa-graduation-cap text-white text-2xl"></i>
            </div>
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
          <div className="space-y-12">

            <div className="relative">
              <div className="absolute -left-4 md:-left-8 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <div className="ml-10 md:ml-14 bg-gray-800 p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-white">CompTIA Security+</h4>
                <p className="text-gray-300 mt-2">
                  Industry-standard certification covering cybersecurity fundamentals, risk management, and security protocols.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 md:-left-8 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="fab fa-microsoft text-white text-xl"></i>
              </div>
              <div className="ml-10 md:ml-14 bg-gray-800 p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-white">Azure Developer Associate (AZ-204)</h4>
                <p className="text-gray-300 mt-2">
                  Advanced certification demonstrating expertise in developing cloud applications and services on Microsoft Azure.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 md:-left-8 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-cloud text-white text-xl"></i>
              </div>
              <div className="ml-10 md:ml-14 bg-gray-800 p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-white">Power Platform Fundamentals (PL-900)</h4>
                <p className="text-gray-300 mt-2">
                  Foundation certification covering Microsoft Power Platform tools including Power Apps, Power BI, and Power Automate.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 md:-left-8 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-cloud-upload-alt text-white text-xl"></i>
              </div>
              <div className="ml-10 md:ml-14 bg-gray-800 p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-white">Azure Fundamentals (AZ-900)</h4>
                <p className="text-gray-300 mt-2">
                  Entry-level certification covering core Azure services, security, privacy, compliance, and pricing.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 md:-left-8 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-code text-white text-xl"></i>
              </div>
              <div className="ml-10 md:ml-14 bg-gray-800 p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-white">Mendix Rapid Developer Certification</h4>
                <p className="text-gray-300 mt-2">
                  Professional certification in Mendix low-code platform, covering app development, data modeling, and deployment.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 md:-left-8 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-project-diagram text-white text-xl"></i>
              </div>
              <div className="ml-10 md:ml-14 bg-gray-800 p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-white">AgilePM Foundation</h4>
                <p className="text-gray-300 mt-2">
                  Certification in Agile Project Management methodology, covering principles, practices, and frameworks.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;