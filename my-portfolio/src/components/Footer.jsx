import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-12 mt-8 border-t border-gray-100">
      <div className="flex space-x-6">
        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/simbela-anele-2202b9349"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>

        {/* Email Link */}
        <a
          href="mailto:anelefabricado@gmail.com"
          className="text-gray-600 hover:text-red-500 transition-colors duration-300"
          aria-label="Email"
        >
          <Mail size={28} />
        </a>
      </div>
      
      {/* Optional: Add a small copyright or text like the original */}
      <p className="mt-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Anele Simbela
      </p>
    </footer>
  );
};

export default Footer;