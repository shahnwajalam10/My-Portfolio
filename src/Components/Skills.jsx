import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, useInView, useAnimation } from 'framer-motion';

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
  { name: 'HTML5', icon: <FaHtml5 className="text-[#E44D26]" />, color: '#E44D26' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-[#264DE4]" />, color: '#264DE4' },
  { name: 'JavaScript', icon: <FaJsSquare className="text-[#F7DF1E]" />, color: '#F7DF1E' },
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, color: '#61DAFB' },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-[#38BDF8]" />, color: '#38BDF8' },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#68A063]" />, color: '#68A063' },
  { name: 'Express', icon: <SiExpress className="text-[#000000]" />, color: '#000000' },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, color: '#47A248' },
  { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" />, color: '#F05032' },
  { name: 'GitHub', icon: <FaGithub className="text-[#181717]" />, color: '#181717' }
];

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      once: true,
    });
    
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen bg-white px-6 py-16 md:px-12 lg:px-24 border-b-4 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Animated background elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-20 -right-20 w-64 h-64 border-4 border-black bg-[#F7DF1E] rotate-45 -z-10 hidden lg:block"
        />
        
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-1/4 -left-16 w-32 h-32 border-4 border-black bg-[#61DAFB] -z-10 hidden lg:block"
        />

        <div className="mb-20" data-aos="fade-down" data-aos-delay="100">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-extrabold uppercase mb-4 text-black"
          >
            TECH STACKS
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-100 bg-black mb-6 origin-left"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-gray-800 font-lg max-w-2xl font-mono"
          >
            TECHNOLOGIES I BUILD WITH 
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 relative"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex flex-col items-center justify-center gap-4 p-8 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* 3D effect border */}
              <div className="absolute inset-0 border-4 border-black translate-z-10 group-hover:translate-z-20 transition-all duration-300 -z-10" />
              
              {/* Dynamic color overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-20" 
                style={{ backgroundColor: tech.color }}
              />
              
              <div className="p-4 bg-white border-2 border-black group-hover:rotate-6 transition-transform duration-300">
                {React.cloneElement(tech.icon, { size: 50 })}
              </div>
              
              <span className="text-lg font-bold uppercase text-black tracking-tight">
                {tech.name}
              </span>
              
              {/* Pixel art corner */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-black" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-white" />
            </motion.div>
          ))}
        </motion.div>

        {/* Animated floating elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Skills;