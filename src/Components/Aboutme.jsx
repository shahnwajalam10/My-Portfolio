import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutme = () => {
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

          {/* Image */}
          <div
            className="relative h-80 sm:h-96 lg:h-[500px]"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="absolute -bottom-3 -right-3 w-full h-full border-4 border-black bg-[#A5D8FF] -z-10 rounded-3xl"></div>
            <div className="relative h-full border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:rotate-2">
              <img
                alt="Profile Picture"
                src="/images/profile_pic_1.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;