import React from 'react';
import { FiDownload, FiLinkedin, FiArrowRight } from 'react-icons/fi';

const Reconnect = () => {
  return (
    <section className="relative h-screen bg-white border-t-4 border-black overflow-hidden flex items-center justify-center">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#A5D8FF] opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-float1"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#FF9E9E] opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-float2"></div>
      </div>

      <div className="relative z-10 px-6 sm:px-8 md:px-12 w-full max-w-6xl mx-auto">
        <div className="text-center">
          {/* Main Title with animated border */}
          <div 
            className="inline-block border-4 border-black bg-white p-1 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-500"
            data-aos="zoom-in"
          >
            <h1 className="text-5xl bg-green-300 sm:text-6xl md:text-7xl lg:text-8xl xl:text-2xl font-extrabold uppercase px-8 py-6  text-black heading_font ">
              Hi, I'm Shahnwaj Alam
            </h1>
          </div>

          {/* Subtitle with animated underline */}
          <div 
            className="relative inline-block mb-12 group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-xl md:text-2xl font-mono bg-white px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Full Stack Developer | MERN Specialist | Problem Solver
            </p>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-black group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Buttons with animated icons */}
          <div 
            className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="https://drive.google.com/file/d/17eLSGuAwBhjAT8xMV_aD88nUTnMd-LEu/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-between px-8 py-5 bg-black text-white font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 uppercase text-lg"
            >
              <div className="flex items-center gap-3">
                <FiDownload className="text-2xl" />
                View Resume
              </div>
              <FiArrowRight className="text-2xl transform group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute -bottom-2 -right-2 h-full w-full border-2 border-black bg-[#A5D8FF] -z-10 group-hover:bg-[#74CAFF] transition-colors duration-300"></div>
            </a>

            <a
              href="https://www.linkedin.com/in/shahnwaj-alam-b08415206/"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-between px-8 py-5 bg-white text-black font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 uppercase text-lg"
            >
              <div className="flex items-center gap-3">
                <FiLinkedin className="text-2xl" />
                Connect
              </div>
              <FiArrowRight className="text-2xl transform group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute -bottom-2 -right-2 h-full w-full border-2 border-black bg-[#FF9E9E] -z-10 group-hover:bg-[#FF6B6B] transition-colors duration-300"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-4 border-black rounded-full flex justify-center p-1">
          <div className="w-2 h-2 bg-black rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Reconnect;