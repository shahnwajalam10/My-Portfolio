import React from "react";

const Education = () => {
  return (
    <section id="Education">
      <div className="bg-[#c4fdff] text-black py-8 lg:px-20 border-4 border-black md:mx-10 rounded-3xl">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          {/* Title Section */}
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-black heading_font">
              Education
            </h1>
          </div>
          {/* Timeline Section */}
          <div className="ml-0 md:ml-12 lg:w-2/3">
            <div className="relative wrap overflow-hidden p-10">
              <div className="border-2-2 absolute h-full border-green-50 border-8 opacity-0"></div>
              {/* Masai School */}
              {/* <div
                className="mb-8 flex justify-between flex-col md:flex-row-reverse items-center w-full left-timeline"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="order-1 w-full md:w-5/6 px-4 py-12 border-4 border-black shadow-[6px_6px_0_0_#000] transition hover:shadow-none bg-white rounded-3xl">
                  <span className="mb-3 text-base text-red-900">
                    Sept 2024 - Present
                  </span>
                  <h4 className="mb-1 text-2xl sm:text-3xl md:text-5xl text-red-900 heading_font font-bold">
                    Masai School
                  </h4>
                  <h5 className="mb-4 font-semibold text-xs sm:text-sm md:text-lg">
                    Web Developer
                  </h5>
                  <div className="text-sm md:text-base leading-snug text-900 gap-4 flex flex-col p-4">
                    <b>Skills</b> Javascript, MERN, DSA
                    <ul>
                      <li>  
                        Led mentorship sessions, providing guidance and support to peers to enhance technical skills and problem-solving abilities.
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              {/* Quantum University */}
              <div
                className="mb-8 flex justify-between items-center w-full right-timeline"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="order-1 w-full md:w-5/6 px-4 py-12 border-4 border-black shadow-[6px_6px_0_0_#000] transition hover:shadow-none bg-white rounded-3xl">
                  <span className="mb-3 text-base text-cyan-900">
                    October 2020 - June 2024
                  </span>
                  <h4 className="mb-1 text-2xl sm:text-3xl md:text-5xl text-cyan-900 heading_font font-bold">
                    Quantum University Roorkee, INDIA
                  </h4>
                  <h5 className="mb-4 font-semibold text-xs sm:text-sm md:text-lg">
                    Bachelor of Technology in Computer Science and Engineering
                  </h5>
                  <b>CGPA</b> 7.41
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
