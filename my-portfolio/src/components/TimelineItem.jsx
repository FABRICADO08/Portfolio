// src/components/Timeline.jsx
import React from 'react';

const Timeline = () => {
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

            <div className="relative">
              
              <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                        <img
                         src="/img/SecurityPlus Logo Certified CE.png"

                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-2xl"
                        />
                <h4 className="text-xl font-semibold text-white">CompTIA Security+</h4>
                <p className="text-gray-300 mt-2">
                  Industry-standard certification covering cybersecurity fundamentals, risk management, and security protocols.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <img
                                src="/img/azure-developer-associate-600x600.png"

                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-2xl"
                        />
                <h4 className="text-xl font-semibold text-white">Azure Developer Associate (AZ-204)</h4>
                <p className="text-gray-300 mt-2">
                  Advanced certification demonstrating expertise in developing cloud applications and services on Microsoft Azure.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <img
                                src="/img/CERT-Fundamentals-Power-Platform.png"

                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-2xl"
                        />
                <h4 className="text-xl font-semibold text-white">Power Platform Fundamentals (PL-900)</h4>
                <p className="text-gray-300 mt-2">
                  Foundation certification covering Microsoft Power Platform tools including Power Apps, Power BI, and Power Automate.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <img
                                src="/img/AZ-900.png"

                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-2xl"
                        />
                <h4 className="text-xl font-semibold text-white">Azure Fundamentals (AZ-900)</h4>
                <p className="text-gray-300 mt-2">
                  Entry-level certification covering core Azure services, security, privacy, compliance, and pricing.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <img
                                src="/img/Rapid-min.png"

                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-2xl"
                        />
                <h4 className="text-xl font-semibold text-white">Mendix Rapid Developer Certification</h4>
                <p className="text-gray-300 mt-2">
                  Professional certification in Mendix low-code platform, covering app development, data modeling, and deployment.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <img
                                src="/img/Agile_Project_Management_Foundation__600PX.png"

                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-2xl"
                        />
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