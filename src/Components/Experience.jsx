import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Briefcase, Calendar, MapPin, Award, Code, Users } from "lucide-react";

const Experience = () => {
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
    <section id="experience" className="relative overflow-hidden py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="grid grid-cols-12 h-full">
          {Array(48).fill().map((_, i) => (
            <div key={i} className="border-2 border-dashed border-black"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 bg-gradient-to-br from-[#FFE5B4] to-[#FFD6A5] text-black py-16 lg:px-20 border-4 border-black md:mx-10 rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300 border-l-4 border-b-4 border-black transform rotate-12 -mr-8 -mt-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 border-r-4 border-t-4 border-black rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          {/* Title Section */}
          <div
            className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"
            data-aos="fade-right"
          >
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl font-bold text-black heading_font mb-4 z-10 relative">
                EXPERIENCE
              </h1>
              <div className="absolute -top-2 -left-2 bg-purple-300 w-16 h-16 rounded-full border-2 border-black -z-10"></div>
            </div>
            <div className="h-3 w-full bg-black mb-6"></div>
            <p className="text-xl font-mono mb-6">
              My professional journey and work experience
            </p>
            <div 
              className="bg-white p-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Briefcase size={24} className="mb-2" />
              <p className="font-mono text-sm">Experience is the teacher of all things.</p>
              <p className="font-mono text-xs mt-2 italic">— Julius Caesar</p>
            </div>
          </div>

          {/* Timeline Section */}
          
          <div className="ml-0 md:ml-12 lg:w-2/3 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-black hidden md:block"></div>
            
            {/* Decorative Dots on Timeline */}
            <div className="absolute left-0 top-0 w-6 h-6 bg-purple-300 border-2 border-black rounded-full transform -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-0 bottom-0 w-6 h-6 bg-blue-400 border-2 border-black rounded-full transform -translate-x-1/2 hidden md:block"></div>

            <div className="relative wrap overflow-hidden p-10">
              {/* Experience Entry 1 */}
              <div
                className="mb-12 flex justify-between items-center w-full right-timeline"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div 
                  className="order-1 w-full md:w-5/6 px-6 py-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 bg-white rounded-3xl group relative"
                >
                  <div className="absolute -bottom-2 -right-2 h-full w-full border-2 border-black bg-[#FFE5B4] -z-10 group-hover:bg-[#FFD6A5] transition-colors duration-300 rounded-3xl"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="bg-orange-300 p-3 rounded-full border-2 border-black flex items-center justify-center">
                      <Calendar size={24} />
                    </div>
                    <span className="font-mono text-gray-700 font-bold">
                      Sep 2025 - Present
                    </span>
                  </div>

                  <h4 className="mb-2 text-3xl sm:text-4xl md:text-5xl text-black heading_font font-bold">
                    ASSOCIATE SOFTWARE DEVELOPER
                  </h4>
                  <h5 className="mb-4 font-semibold text-lg md:text-xl font-mono text-gray-800">
                        Masters Union
                  </h5>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="px-4 py-2 bg-[#FFE5B4] border-2 border-black rounded-full font-mono text-sm font-bold flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Gururgram Haryana, India</span>
                    </div>
                    <div className="px-4 py-2 bg-[#FFE5B4] border-2 border-black rounded-full font-mono text-sm font-bold flex items-center gap-2">
                      <Code size={16} />
                      <span>Full Time</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-black pt-4">
                    <h6 className="font-bold text-lg mb-4 font-mono inline-block bg-orange-300 px-3 py-1 border-2 border-black transform rotate-1">KEY RESPONSIBILITIES:</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {[
                        "Developed full-stack web applications",
                        "Implemented RESTful APIs",
                        "Built responsive user interfaces",
                        "Collaborated with clients on projects",
                        "Optimized application performance",
                        "Maintained code quality and best practices"
                      ].map((responsibility, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-2 font-mono bg-gray-100 p-2 rounded-lg border-2 border-gray-300 hover:bg-gray-200 transition-colors"
                          data-aos="fade-up"
                          data-aos-delay={100 + index * 50}
                        >
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          {responsibility}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievement Callout */}
                  <div 
                    className="mt-6 bg-gradient-to-r from-orange-200 to-orange-300 p-4 border-2 border-black rounded-xl relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="absolute top-0 right-0 bg-white w-12 h-12 border-l-2 border-b-2 border-black rounded-bl-3xl"></div>
                    <h6 className="font-bold font-mono mb-2">ACHIEVEMENT HIGHLIGHT:</h6>
                    <p className="font-mono text-sm">Delivered multiple client projects with 100% satisfaction rate and maintained clean, scalable codebases.</p>
                  </div>
                </div>

                {/* Timeline marker for desktop */}
                <div className="hidden md:block w-10 h-10 absolute left-0 transform -translate-x-1/2 bg-white border-4 border-black rounded-full"></div>
              </div>

              {/* Experience Entry 2 - Example */}
              <div
                className="mb-0 flex justify-between items-center w-full right-timeline"
                data-aos="fade-up"
                data-aos-delay="300"
              >
              {/* <div 
                  className="order-1 w-full md:w-5/6 px-6 py-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 bg-white rounded-3xl group relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="absolute -bottom-2 -right-2 h-full w-full border-2 border-black bg-[#E0E7FF] -z-10 group-hover:bg-[#C7D2FE] transition-colors duration-300 rounded-3xl"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="bg-indigo-300 p-3 rounded-full border-2 border-black flex items-center justify-center">
                      <Calendar size={24} />
                    </div>
                    <span className="font-mono text-gray-700 font-bold">
                      Add Your Experience
                    </span>
                  </div>

                  <h4 className="mb-2 text-3xl sm:text-4xl md:text-5xl text-black heading_font font-bold">
                    YOUR POSITION
                  </h4>
                  <h5 className="mb-4 font-semibold text-lg md:text-xl font-mono text-gray-800">
                    Company Name
                  </h5>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="px-4 py-2 bg-[#E0E7FF] border-2 border-black rounded-full font-mono text-sm font-bold flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Location</span>
                    </div>
                    <div className="px-4 py-2 bg-[#E0E7FF] border-2 border-black rounded-full font-mono text-sm font-bold flex items-center gap-2">
                      <Users size={16} />
                      <span>Team Size</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-black pt-4">
                    <h6 className="font-bold text-lg mb-4 font-mono inline-block bg-indigo-300 px-3 py-1 border-2 border-black transform -rotate-2">KEY RESPONSIBILITIES:</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {[
                        "Add your responsibilities here",
                        "Customize this section",
                        "Update with your experience"
                      ].map((responsibility, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-2 font-mono bg-gray-100 p-2 rounded-lg border-2 border-gray-300 hover:bg-gray-200 transition-colors"
                          data-aos="fade-up"
                          data-aos-delay={100 + index * 50}
                        >
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          {responsibility}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div 
                    className="mt-6 bg-gradient-to-r from-indigo-200 to-indigo-300 p-4 border-2 border-black rounded-xl relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="absolute top-0 right-0 bg-white w-12 h-12 border-l-2 border-b-2 border-black rounded-bl-3xl"></div>
                    <h6 className="font-bold font-mono mb-2">ACHIEVEMENT HIGHLIGHT:</h6>
                    <p className="font-mono text-sm">Add your achievements and highlights here.</p>
                  </div>
                </div> 

                */}

                {/* Timeline marker for desktop */}
                {/* <div className="hidden md:block w-10 h-10 absolute left-0 transform -translate-x-1/2 bg-white border-4 border-black rounded-full"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

