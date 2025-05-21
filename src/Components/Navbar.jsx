import React, { useState } from "react";
import { FaGithubSquare, FaLinkedin, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar p-4 md:p-8 flex justify-between items-center bg-white border-t-4 border-black shadow-[0_-5px_0_0_rgba(0,0,0,1)]">
      {/* Logo */}
      <div className="flex-1">
        {/* <Link 
          to="/" 
          className="text-4xl font-extrabold uppercase px-6 py-4 md:px-10 md:py-6 bg-black text-white border-4 border-black rounded-none transform hover:scale-105 transition-all hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
        >
          SA
        </Link> */}
        <Link
          to="/"
          className="text-2xl font-extrabold uppercase px-6 py-4 md:px-10 md:py-6 bg-black text-white border-4 border-[#FF5E5B] rounded-none shadow-[4px_4px_0px_0px_rgba(255,115,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform duration-200"
        >
          SA
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4 items-center">
          {[
            { to: "/about", text: "About" },
            { to: "/skills", text: "Skills" },
            { to: "/education", text: "Education" },
            { to: "/projects", text: "Projects" },
            { to: "/contact", text: "Contact" },
          ].map((item) => (
            <li key={item.text}>
              <Link
                to={item.to}
                className="px-4 py-2 text-black font-bold uppercase border-2 border-black hover:bg-black hover:text-white transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                {item.text}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/shahnwajalam10"
              className="flex items-center gap-2 px-4 py-2 bg-transparent text-black font-bold uppercase border-2 border-black hover:bg-black hover:text-white transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithubSquare size={20} />
              <span className="hidden lg:inline">GitHub</span>
            </a>
          </li>
          {/* <li>
            <a
              href="https://www.linkedin.com/in/shahnwaj-alam-b08415206/"
              className="flex items-center gap-2 px-4 py-2 bg-transparent text-black font-bold uppercase border-2 border-black hover:bg-black hover:text-white transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size={20} />
              <span className="hidden lg:inline">LinkedIn</span>
            </a>
          </li> */}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-24 right-4 w-64 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-50 md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {[
              { to: "/about", text: "About" },
              { to: "/skills", text: "Skills" },
              { to: "/education", text: "Education" },
              { to: "/projects", text: "Projects" },
              { to: "/contact", text: "Contact" },
            ].map((item) => (
              <li key={item.text}>
                <Link
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-black font-bold uppercase border-2 border-black hover:bg-black hover:text-white transition-all"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li className="flex gap-2">
              <a
                href="https://github.com/shahnwajalam10"
                className="flex-1 flex justify-center items-center gap-2 px-4 py-3 bg-transparent text-black font-bold uppercase border-2 border-black hover:bg-black hover:text-white transition-all"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithubSquare size={20} />
                GitHub
              </a>
              {/* <a
                href="https://www.linkedin.com/in/shahnwaj-alam-b08415206/"
                className="flex-1 flex justify-center items-center gap-2 px-4 py-3 bg-transparent text-black font-bold uppercase border-2 border-black hover:bg-black hover:text-white transition-all"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a> */}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
