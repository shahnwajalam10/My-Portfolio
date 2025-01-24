import React from "react";

const Workexperience = () => {
  return (
    <section id="Work">
      <div className="bg-[#fbffc3] text-black py-8 lg:px-20 border-4 border-black md:mx-10 rounded-3xl">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-6 sm:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-black heading_font">
              Work Trainee Experience
            </h1>
            <span className="text-gray-900 text-xl lg:text-2xl mt-4 mb-6 md:mb-8">
                Gained practical experience as a Trainee Developer, enhancing technical skills.
            </span>

          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute h-full border-green-50 border-8 opacity-0"></div>

                {/* Apprenticeship Timeline Item */}
                <div className="mb-8 flex justify-between flex-col md:flex-row items-center w-full left-timeline">
                  <div className="order-1 w-auto"></div>
                  <div className="order-1 w-full sm:w-5/6 px-4 py-12 border-4 border-black shadow-[6px_6px_0_0_#000] transition hover:shadow-none bg-white rounded-3xl">
                    <span className="mb-3 text-base text-blue-900">
                      Sep 2024 - Present
                    </span>
                    <h4 className="mb-1 text-2xl md:text-3xl lg:text-5xl text-blue-900 heading_font font-bold">
                      Apprenticeship
                    </h4>
                    <h5 className="mb-4 font-semibold text-xs md:text-lg">
                      Masai School
                    </h5>
                    <div className="text-sm md:text-base leading-snug text-900 text-opacity-100 gap-4 flex flex-col p-4">
                      <ul className="list-disc">
                        <li>
                          Successfully completed an apprenticeship at Masai
                          School, gaining comprehensive hands-on experience with
                          the MERN stack (MongoDB, Express.js, React.js,
                          Node.js).
                        </li>
                        <li>
                          Built robust and scalable web applications, showcasing
                          expertise in full-stack development.
                        </li>
                        <li>
                          Strengthened analytical and problem-solving skills
                          through intensive training in Data Structures and
                          Algorithms.
                        </li>
                        <li>
                          Developed a strong work ethic, adaptability, and
                          discipline to thrive in dynamic and challenging
                          environments.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Trainee Developer Timeline Item */}
                <div className="mb-8 flex justify-between flex-col md:flex-row items-center w-full right-timeline">
                  <div className="order-1 w-auto"></div>
                  <div className="order-1 w-full sm:w-5/6 px-4 py-12 border-4 border-black shadow-[6px_6px_0_0_#000] transition hover:shadow-none bg-white rounded-3xl">
                    <span className="mb-3 text-base text-red-900">
                      Nov 2023 - Apr 2024
                    </span>
                    <h4 className="mb-1 text-2xl md:text-3xl lg:text-5xl text-red-900 heading_font font-bold">
                      Chetu World Class Software Solutions
                    </h4>
                    <h5 className="mb-4 font-semibold text-xs md:text-lg">
                      Trainee Developer
                    </h5>
                    <div className="text-sm md:text-base leading-snug text-900 text-opacity-100 gap-4 flex flex-col p-4">
                      <ul className="list-disc">
                        <li>
                          Completed an intensive training program specializing
                          in React.js development.
                        </li>
                        <li>
                          Contributed to the design, development, and
                          maintenance of user interfaces and reusable components
                          using React.js.
                        </li>
                        <li>
                          Acquired hands-on experience in building dynamic,
                          responsive, and feature-rich web applications.
                        </li>
                        <li>
                          Implemented best practices for writing clean,
                          maintainable, and performance-optimized code.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workexperience;
