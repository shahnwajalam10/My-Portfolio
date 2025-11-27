import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Briefcase, 
  Code, 
  GraduationCap, 
  FolderOpen, 
  Mail
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation(); // Hook to track route changes

  // Function to handle smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Close mobile menu and set active link
  const handleNavClick = (path) => {
    setIsMenuOpen(false);
    setActiveLink(path);
    // Scroll to top immediately for same-page navigation
    if (location.pathname === path) {
      scrollToTop();
    }
  };

  // Scroll to top on route change
  useEffect(() => {
    setActiveLink(location.pathname);
    scrollToTop(); // Scroll to top whenever the route changes
  }, [location.pathname]);

  // Navigation items with icons for mobile
  const navItems = [
    { to: "/about", text: "About", icon: <User size={18} /> },
    { to: "/experience", text: "Experience", icon: <Briefcase size={18} /> },
    { to: "/skills", text: "Skills", icon: <Code size={18} /> },
    { to: "/education", text: "Education", icon: <GraduationCap size={18} /> },
    { to: "/projects", text: "Projects", icon: <FolderOpen size={18} /> },
    { to: "/contact", text: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* Fixed Navbar Wrapper */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Navbar Content */}
        <div className="navbar p-3 sm:p-4 md:p-6 lg:p-8 flex justify-between items-center bg-white border-t-4 border-black shadow-[0_-5px_0_0_rgba(0,0,0,1)]">
          {/* Logo */}
          <div className="flex-1">
            <Link
              to="/"
              className="text-xl sm:text-2xl font-extrabold uppercase px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 bg-black text-white border-4 border-[#FF5E5B] rounded-none shadow-[4px_4px_0px_0px_rgba(255,115,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform duration-200"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  scrollToTop();
                }
                handleNavClick("/");
              }}
            >
              SA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1 flex gap-2 lg:gap-4 items-center">
              {[
                { to: "/about", text: "About" },
                { to: "/experience", text: "Experience" },
                { to: "/skills", text: "Skills" },
                { to: "/education", text: "Education" },
                { to: "/projects", text: "Projects" },
                { to: "/contact", text: "Contact" },
              ].map((item) => (
                <li key={item.text}>
                  <Link
                    to={item.to}
                    className={`px-3 py-2 text-sm lg:text-base font-bold uppercase border-2 border-black transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
                      activeLink === item.to
                        ? "bg-black text-white"
                        : "text-black hover:bg-black hover:text-white"
                    }`}
                    onClick={() => handleNavClick(item.to)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="w-full bg-white border-t-2 border-b-4 border-black shadow-[0_5px_0_0_rgba(0,0,0,1)] md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              {[
                { to: "/about", text: "About" },
                { to: "/experience", text: "Experience" },
                { to: "/skills", text: "Skills" },
                { to: "/education", text: "Education" },
                { to: "/projects", text: "Projects" },
                { to: "/contact", text: "Contact" },
              ].map((item) => (
                <li key={item.text}>
                  <Link
                    to={item.to}
                    onClick={() => handleNavClick(item.to)}
                    className={`block px-4 py-3 text-base font-bold uppercase border-2 border-black transition-all ${
                      activeLink === item.to
                        ? "bg-black text-white"
                        : "text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="h-20 sm:h-24 md:h-28 lg:h-32 w-full"></div>
    </>
  );
};

export default Navbar;