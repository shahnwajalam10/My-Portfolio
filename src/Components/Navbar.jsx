import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar p-8 flex justify-between items-center bg-white border-t-4 border-black">
      <div className="flex-1">
        <button className="text-4xl font-extrabold uppercase px-10 py-6 bg-black text-white border-4 border-black rounded-none transform hover:scale-110 transition-all">
          SA
        </button>
      </div>
      <div className="flex-none space-x-12">
        <ul className="menu menu-horizontal px-1 flex gap-8 md:flex-row flex-col items-center">
          <li>
            <a
              href="https://github.com/shahnwajalam10"
              className="flex items-center gap-3 px-8 py-4 bg-transparent text-black font-bold uppercase border-4 border-black rounded-none hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-black transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithubSquare size={35} />
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shahnwaj-alam-b08415206/"
              className="flex items-center gap-3 px-8 py-4 bg-transparent text-black font-bold uppercase border-4 border-black rounded-none hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-black transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size={35} />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
