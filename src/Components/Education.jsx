import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BookOpen, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="education" className="relative overflow-hidden py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="grid grid-cols-12 h-full">
          {Array(48).fill().map((_, i) => (
            <div key={i} className="border-2 border-dashed border-black"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 bg-gradient-to-br from-[#c4fdff] to-[#a5e9ff] text-black py-16 lg:px-20 border-4 border-black md:mx-10 rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 border-l-4 border-b-4 border-black transform rotate-12 -mr-8 -mt-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-400 border-r-4 border-t-4 border-black rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          {/* Title Section */}
          <div
            className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"
            data-aos="fade-right"
          >
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl font-bold text-black heading_font mb-4 z-10 relative">
                EDUCATION
              </h1>
              <div className="absolute -top-2 -left-2 bg-yellow-300 w-16 h-16 rounded-full border-2 border-black -z-10"></div>
            </div>
            <div className="h-3 w-full bg-black mb-6"></div>
            <p className="text-xl font-mono mb-6">
              My academic journey that shaped my technical foundation
            </p>
            <div 
              className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <BookOpen size={24} className="mb-2" />
              <p className="font-mono text-sm">Education is not the learning of facts, but the training of the mind to think.</p>
              <p className="font-mono text-xs mt-2 italic">— Albert Einstein</p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="ml-0 md:ml-12 lg:w-2/3 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-black hidden md:block"></div>
            
            {/* Decorative Dots on Timeline */}
            <div className="absolute left-0 top-0 w-6 h-6 bg-yellow-300 border-2 border-black rounded-full transform -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-0 bottom-0 w-6 h-6 bg-pink-400 border-2 border-black rounded-full transform -translate-x-1/2 hidden md:block"></div>

            <div className="relative wrap overflow-hidden p-10">
              {/* Quantum University */}
              <div
                className="mb-12 flex justify-between items-center w-full right-timeline"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div 
                  className="order-1 w-full md:w-5/6 px-6 py-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 bg-white rounded-3xl group relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="absolute -bottom-2 -right-2 h-full w-full border-2 border-black bg-[#A5D8FF] -z-10 group-hover:bg-[#74CAFF] transition-colors duration-300 rounded-3xl"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="bg-yellow-300 p-3 rounded-full border-2 border-black flex items-center justify-center">
                      <Calendar size={24} />
                    </div>
                    <span className="font-mono text-gray-700 font-bold">
                      OCT 2020 - JUN 2024
                    </span>
                  </div>

                  <h4 className="mb-2 text-3xl sm:text-4xl md:text-5xl text-black heading_font font-bold">
                    QUANTUM UNIVERSITY
                  </h4>
                  <h5 className="mb-4 font-semibold text-lg md:text-xl font-mono text-gray-800">
                    B.Tech in Computer Science & Engineering
                  </h5>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="px-4 py-2 bg-[#A5D8FF] border-2 border-black rounded-full font-mono text-sm font-bold flex items-center gap-2">
                      <Award size={16} />
                      <span>CGPA: 7.41</span>
                    </div>
                    <div className="px-4 py-2 bg-[#A5D8FF] border-2 border-black rounded-full font-mono text-sm font-bold flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Roorkee, India</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-black pt-4">
                    <h6 className="font-bold text-lg mb-4 font-mono inline-block bg-yellow-300 px-3 py-1 border-2 border-black transform -rotate-2">KEY COURSES:</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {[
                        "Data Structures & Algorithms",
                        "Database Management Systems",
                        "Artificial Intelligence",
                        "Computer Networks",
                        "Operating Systems",
                        "Web Development",
                        "Software Engineering"
                      ].map((course, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-2 font-mono bg-gray-100 p-2 rounded-lg border-2 border-gray-300 hover:bg-gray-200 transition-colors"
                          data-aos="fade-up"
                          data-aos-delay={100 + index * 50}
                        >
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievement Callout */}
                  <div 
                    className="mt-6 bg-gradient-to-r from-yellow-200 to-yellow-300 p-4 border-2 border-black rounded-xl relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="absolute top-0 right-0 bg-white w-12 h-12 border-l-2 border-b-2 border-black rounded-bl-3xl"></div>
                    <h6 className="font-bold font-mono mb-2">ACHIEVEMENT HIGHLIGHT:</h6>
                    <p className="font-mono text-sm">Participated in Cybersecurity Awareness Training by Quick Heal Academy.</p>
                  </div>
                </div>

                {/* Timeline marker for desktop */}
                <div className="hidden md:block w-10 h-10 absolute left-0 transform -translate-x-1/2 bg-white border-4 border-black rounded-full"></div>
              </div>

              {/* Add a second educational entry */}
              <div
                className="mb-0 flex justify-between items-center w-full right-timeline"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="order-1 w-full md:w-5/6 px-6 py-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 bg-white rounded-3xl group relative">
                  <div className="absolute -bottom-2 -right-2 h-full w-full border-2 border-black bg-[#FFD6A5] -z-10 group-hover:bg-[#FFBE7B] transition-colors duration-300 rounded-3xl"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="bg-pink-300 p-3 rounded-full border-2 border-black flex items-center justify-center">
                      <Calendar size={24} />
                    </div>
                    <span className="font-mono text-gray-700 font-bold">
                      JUN 2017 - MAY 2019
                    </span>
                  </div>

                  <h4 className="mb-2 text-3xl sm:text-4xl md:text-5xl text-black heading_font font-bold">
                    QUAZI AHMAD INTER COLLEGE
                  </h4>
                  <h5 className="mb-4 font-semibold text-lg md:text-xl font-mono text-gray-800">
                    Higher Secondary Education
                  </h5>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="px-4 py-2 bg-[#FFD6A5] border-2 border-black rounded-full font-mono text-sm font-bold flex items-center gap-2">
                      <Award size={16} />
                      <span>Percentage: 78.4%</span>
                    </div>
                    <div className="px-4 py-2 bg-[#FFD6A5] border-2 border-black rounded-full font-mono text-sm font-bold flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Jale, Darbhanga</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-black pt-4">
                    <h6 className="font-bold text-lg mb-4 font-mono inline-block bg-pink-300 px-3 py-1 border-2 border-black transform rotate-1">FOCUS AREAS:</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {[
                        "Physics",
                        "Chemistry",
                        "Mathematics",
                      ].map((course, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-2 font-mono bg-gray-100 p-2 rounded-lg border-2 border-gray-300 hover:bg-gray-200 transition-colors"
                          data-aos="fade-up"
                          data-aos-delay={100 + index * 50}
                        >
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline marker for desktop */}
                <div className="hidden md:block w-10 h-10 absolute left-0 transform -translate-x-1/2 bg-white border-4 border-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;