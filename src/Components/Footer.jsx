import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row justify-center text-xl font-bold uppercase mb-6 space-x-4">
          <a href="#" className="px-6 py-3 border-2 border-white transform hover:scale-105 transition-transform mb-4 sm:mb-0">About</a>
          <a href="#" className="px-6 py-3 border-2 border-white transform hover:scale-105 transition-transform mb-4 sm:mb-0">Projects</a>
          <a href="#" className="px-6 py-3 border-2 border-white transform hover:scale-105 transition-transform mb-4 sm:mb-0">Skills</a>
          <a href="#" className="px-6 py-3 border-2 border-white transform hover:scale-105 transition-transform mb-4 sm:mb-0">Contact</a>
        </div>

        <div className="text-sm font-light mb-6">
          <p>&copy; 2025 Shahnwaj. All Rights Reserved.</p>
        </div>

        <div className="flex justify-center space-x-8 text-3xl sm:text-4xl">
          <a
            href="https://github.com/shahnwajalam10"
            className="border-2 border-white p-2 transform hover:scale-110 hover:rotate-12 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shahnwaj-alam-b08415206/"
            className="border-2 border-white p-2 transform hover:scale-110 hover:rotate-12 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:shahnwajalam10@gmail.com"
            className="border-2 border-white p-2 transform hover:scale-110 hover:rotate-12 transition-transform"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
