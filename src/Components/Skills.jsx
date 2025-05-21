import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';

const techStack = [
  { name: 'HTML5', icon: <FaHtml5 size={50} className="text-[#E44D26]" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={50} className="text-[#264DE4]" /> },
  { name: 'JavaScript', icon: <FaJsSquare size={50} className="text-[#F7DF1E]" /> },
  { name: 'React', icon: <FaReact size={50} className="text-[#61DAFB]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} className="text-[#38BDF8]" /> },
  { name: 'Node.js', icon: <FaNodeJs size={50} className="text-[#68A063]" /> },
  { name: 'Express.js', icon: <SiExpress size={50} className="text-[#000000]" /> },
  { name: 'MongoDB', icon: <SiMongodb size={50} className="text-[#47A248]" /> },
  { name: 'Git', icon: <FaGitAlt size={50} className="text-[#F05032]" /> },
  { name: 'GitHub', icon: <FaGithub size={50} className="text-[#181717]" /> }
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <section id="skills" className="min-h-screen bg-white px-6 py-16 md:px-12 lg:px-24 border-b-4 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16" data-aos="fade-down">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase mb-4 text-black outline-text">
            TECH STACK
          </h1>
          <div className="h-2 w-full bg-[#A5D8FF] mb-4"></div>
          <p className="text-xl text-gray-800 font-mono max-w-2xl">
            TECHNOLOGIES I BUILD WITH
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group relative flex flex-col items-center justify-center gap-4 p-6 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
            >
              <div className="p-2 border-2 border-black bg-white">
                {tech.icon}
              </div>
              <span className="text-lg font-bold uppercase text-black font-mono tracking-tight">
                {tech.name}
              </span>
              <div className="absolute -bottom-2 -right-2 h-full w-full border-2 border-black bg-[#A5D8FF] -z-10 group-hover:bg-[#74CAFF] transition-colors duration-200"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;