import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Users, Sparkles } from "lucide-react";

const Aboutme = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out",
      mirror: false,
    });
  }, []);

  return (
    <section
      id="about"
      className="py-24 border-t-4 border-black bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl px-6 mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="lg:py-12" data-aos="fade-up" data-aos-delay="100">
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-8 text-black  border-4 border-black px-8 py-4 inline-block bg-[#A5D8FF] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
            >
              ABOUT MYSELF
            </h2>

            <div className="space-y-8 mt-12">
              <div
                className="flex items-start gap-4"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center animate-[pulse_2s_infinite]">
                    <div className="w-3 h-3 bg-[#A5D8FF] rounded-full"></div>
                  </div>
                </div>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-800 font-mono">
                  Highly skilled Full Stack Web Developer proficient in the MERN
                  stack with expertise in front-end and back-end development.
                </p>
              </div>

              <div
                className="flex items-start gap-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center animate-[pulse_2s_infinite]">
                    <div className="w-3 h-3 bg-[#A5D8FF] rounded-full"></div>
                  </div>
                </div>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-800 font-mono">
                  Proven ability to build and collaborate on impactful projects
                  with clean, efficient code.
                </p>
              </div>

              <div
                className="flex items-start gap-4"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center animate-[pulse_2s_infinite]">
                    <div className="w-3 h-3 bg-[#A5D8FF] rounded-full"></div>
                  </div>
                </div>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-800 font-mono">
                  Strong problem-solving and communication skills, ready to
                  contribute to innovative web initiatives.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <a
                href="https://www.linkedin.com/in/shahnwaj-alam-b08415206/"
                target="_blank"
                rel="noreferrer"
                data-aos="fade-up"
                data-aos-delay="500"
                className="px-8 py-4 bg-black text-white font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 uppercase text-sm md:text-base font-mono hover-pop"
                aria-label="Connect with me on LinkedIn"
              >
                Let's Connect & Build Together
              </a>
              {/* <a
                href="https://drive.google.com/file/d/17eLSGuAwBhjAT8xMV_aD88nUTnMd-LEu/view?usp=sharing"
                download
                data-aos="fade-up"
                data-aos-delay="600"
                className="px-8 py-4 bg-[#A5D8FF] text-black font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 uppercase text-sm md:text-base font-mono hover-pop"
                aria-label="Download my resume"
              >
                Download Resume
              </a> */}
            </div>
          </div>

          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-80 sm:h-96 lg:h-[500px]"
            data-aos="fade-left"
            data-aos-delay="300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Decorative background layers */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-4 border-black bg-[#A5D8FF] -z-10 rounded-3xl"></div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-full h-full border-4 border-black bg-[#FFD6A5] -z-20 rounded-3xl"
              animate={{
                rotate: isHovered ? 5 : 0,
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Main image container */}
            <motion.div
              className="relative h-full border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-3xl overflow-hidden group"
              whileHover={{ scale: 1.02, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                alt="Profile Picture"
                src="/images/profile_pic_5.png"
                className="w-full h-full object-cover"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    className="bg-white/95 backdrop-blur-sm border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-extrabold uppercase text-black heading_font mb-2">
                      Full Stack Developer
                    </h3>
                    <p className="text-sm font-mono text-gray-700">
                      Passionate about building innovative web solutions
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-black"></div>
              <div className="absolute top-0 right-0 w-4 h-4 bg-white"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-yellow-300 border-2 border-black"></div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -left-4 bg-yellow-300 border-4 border-black p-3 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-10"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Users size={24} className="text-black" />
            </motion.div>

            {/* Additional floating element */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-purple-300 border-4 border-black p-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 hidden md:block"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Sparkles size={20} className="text-black" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;