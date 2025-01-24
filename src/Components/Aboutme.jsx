import React from "react";

const Aboutme = () => {
  return (
    <section id="About">
      <div className="flex max-w-full px-10 py-20 sm:py-12 sm:px-6 lg:py-16 lg:px-40">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 m-auto">
          <div
            data-aos="fade-left"
            className="relative h-64 overflow-hidden border-4 border-black shadow-[6px_6px_0_0_#000] transition hover:shadow-none sm:h-full lg:order-last lg:h-full rounded-3xl aos-init aos-animate"
          >
            <img
              alt="Party"
              src="/images/profile_pic.jpg"
              width={1200}
              height={1200}
              className="inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="lg:py-24" data-svelte-h="svelte-m8hwe5">
            <h2
              className="text-4xl font-bold text-black sm:text-6xl heading_font aos-init aos-animate"
              data-aos="fade-right"
            >
              About Myself
            </h2>
            <p
              className="mt-14 text-gray-600 text-2xl aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              ✨ Highly skilled Full Stack Web Developer proficient in the MERN stack with expertise in front-end and back-end development.
            </p>
            <p
              className="mt-8 text-gray-600 text-2xl aos-init"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              ✨ Proven ability to build and collaborate on impactful projects.
            </p>
            <p
              className="mt-8 mb-14 text-gray-600 text-2xl aos-init"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              ✨ Strong problem-solving and communication skills, ready to contribute to innovative web initiatives.
            </p>
            <a
              href="https://www.linkedin.com/in/shahnwaj-alam-b08415206/"
              data-aos="fade-right"
              data-aos-duration="1500"
              className="justify-center gap-2 rounded-full border-4 border-black bg-[#FFB2EF] px-12 py-4 font-semibold shadow-[6px_6px_0_0_#000] transition hover:shadow-none text-xl aos-init"
              target="_blank"
              rel="noreferrer"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
