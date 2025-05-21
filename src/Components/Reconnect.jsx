import React, { useState, useEffect } from 'react';
import { FiDownload, FiLinkedin, FiArrowRight, FiGithub, FiMail } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Reconnect = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi, I'm Shahnwaz Alam";
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [buttonHover, setButtonHover] = useState(null);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        setShowCursor(prev => !prev);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Animation controls
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Button hover effects
  const buttonVariants = {
    hover: {
      y: -5,
      x: -5,
      boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      y: 0,
      x: 0,
      boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)"
    }
  };

  const floatingVariants = {
    float1: {
      y: [0, -20, 0],
      x: [0, -10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float2: {
      y: [0, 20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    }
  };

  const socialLinks = [
    {
      icon: <FiLinkedin className="text-2xl" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/shahnwaj-alam-b08415206/",
      bgColor: "bg-blue-500",
      hoverBg: "bg-blue-600"
    },
    {
      icon: <FiGithub className="text-2xl" />,
      label: "GitHub",
      url: "https://github.com/shahnwajalam10",
      bgColor: "bg-gray-800",
      hoverBg: "bg-gray-900"
    },
    {
      icon: <FiMail className="text-2xl" />,
      label: "Email",
      url: "mailto:shahnwajalam10@gmail.com",
      bgColor: "bg-red-500",
      hoverBg: "bg-red-600"
    }
  ];

  // Function to handle both download and open in new tab
  const handleResumeClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    const fileUrl = './resume/shahnwaj_alam_resume.pdf';

    // Trigger file download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'shahnwaj_alam_resume.pdf'; // Specify the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Open file in a new tab
    window.open(fileUrl, '_blank');
  };

  return (
    <section 
      className="relative h-screen bg-white border-t-4 border-black overflow-hidden flex items-center justify-center"
      ref={ref}
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-[#A5D8FF] opacity-20 rounded-full mix-blend-multiply filter blur-3xl"
          variants={floatingVariants}
          animate="float1"
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-72 h-72 bg-[#FF9E9E] opacity-20 rounded-full mix-blend-multiply filter blur-3xl"
          variants={floatingVariants}
          animate="float2"
        ></motion.div>
      </div>

      <div className="relative z-10 px-6 sm:px-8 md:px-12 w-full max-w-6xl mx-auto">
        <div className="text-center">
          {/* Main Title with animated border */}
          <motion.div 
            className="inline-block border-4 border-black bg-white p-1 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-500"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h1 className="text-5xl bg-green-300 sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase px-8 py-6 text-black heading_font">
              {text}
              <span className={`inline-block w-1 h-12 bg-black ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
            </h1>
          </motion.div>

          {/* Subtitle with animated underline */}
          <motion.div 
            className="relative inline-block mb-12 group"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl md:text-2xl font-mono bg-white px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Full Stack Developer | MERN Specialist | Problem Solver
            </p>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-black group-hover:w-full transition-all duration-500"></div>
          </motion.div>

          {/* Resume Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <motion.a
              href="#"
              onClick={handleResumeClick}
              className="group relative flex items-center justify-between px-8 py-5 bg-black text-white font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mx-auto max-w-xs"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onMouseEnter={() => setButtonHover('resume')}
              onMouseLeave={() => setButtonHover(null)}
            >
              <div className="flex items-center gap-3">
                <FiDownload className="text-2xl" />
                View Resume
              </div>
              <FiArrowRight className="text-2xl transform group-hover:translate-x-2 transition-transform duration-300" />
              <div 
                className={`absolute -bottom-2 -right-2 h-full w-full border-2 border-black ${buttonHover === 'resume' ? 'bg-[#74CAFF]' : 'bg-[#A5D8FF]'} -z-10 transition-colors duration-300`}
              ></div>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`group relative flex items-center justify-center px-6 py-3 ${link.bgColor} text-white font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onMouseEnter={() => setButtonHover(`social-${index}`)}
                onMouseLeave={() => setButtonHover(null)}
              >
                <div className="flex items-center gap-2">
                  {link.icon}
                  {link.label}
                </div>
                <div 
                  className={`absolute -bottom-1 -right-1 h-full w-full border-2 border-black ${buttonHover === `social-${index}` ? link.hoverBg : link.bgColor} -z-10 transition-colors duration-300`}
                ></div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-4 border-black rounded-full flex justify-center p-1">
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Reconnect;