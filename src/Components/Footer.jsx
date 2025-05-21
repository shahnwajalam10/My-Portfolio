import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdRocketLaunch } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const links = [
    {
      icon: <FaGithub />,
      href: "https://github.com/shahnwajalam10",
      label: "GitHub",
      color: "bg-[#24292E]"
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/",
      label: "LinkedIn",
      color: "bg-[#0A66C2]"
    },
    {
      icon: <SiLeetcode />,
      href: "https://leetcode.com/shahnwajalam01/",
      label: "LeetCode",
      color: "bg-[#FFA116]"
    },
    {
      icon: <MdEmail />,
      href: "mailto:shahnwajalam10@gmail.com",
      label: "Email",
      color: "bg-[#EA4335]"
    }
  ];

  return (
    <footer className="bg-[#F8F4E3] text-black py-10 px-4 mt-20 border-4 border-black shadow-[6px_6px_0_0_#000]">
      <div className="max-w-6xl mx-auto">
        {/* Rocket icon */}
        <div
          className="flex justify-center mb-6"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="bg-[#FE4A49] p-3 rounded-full border-2 border-black shadow-[3px_3px_0_0_#000] hover:shadow-[5px_5px_0_0_#000] transition-all animate-bounce hover:animate-none hover:-translate-y-1">
            <MdRocketLaunch className="text-2xl text-black" />
          </div>
        </div>

        {/* Social links */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-6"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group flex flex-col items-center"
            >
              <div
                className={`w-12 h-12 ${link.color} text-white text-2xl flex items-center justify-center border-2 border-black shadow-[3px_3px_0_0_#000] hover:shadow-[5px_5px_0_0_#000] hover:-translate-y-1 transition-all`}
              >
                {link.icon}
              </div>
              <span className="mt-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white px-2 py-0.5 border border-black shadow-[2px_2px_0_0_#000] rounded">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <p className="inline-block text-xs font-mono mb-1 border-2 border-black bg-white px-3 py-1 shadow-[3px_3px_0_0_#000]">
            &copy; 2025 SHAHNWAJ ALAM. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
