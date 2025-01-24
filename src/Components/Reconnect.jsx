import React from 'react';

const Reconnect = () => {
  return (
    <section className="flex h-screen animate__bounceInDown animate__animated bg-green-300 border-4 border-black m-4 sm:mx-8 md:mx-10 lg:mx-12 rounded-3xl">
      <div className="px-6 py-20 md:p-12 lg:px-10 lg:py-10 m-auto">
        <div className="max-w-full text-center">
          <h2 className="text-4xl font-bold text-black sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl heading_font aos-init aos-animate" data-aos="fade-down" data-aos-duration="300">
            <span>Shahnwaj Alam</span>
          </h2>
        </div>
        <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-6 my-8 md:my-12">
          <a
            href="https://drive.google.com/file/d/1OMR9zmSTgElTGtSB5_RNQWt8tUGHzZzN/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-up"
            data-aos-duration="800"
            className="flex items-center justify-center rounded-full gap-2 border-4 lg:border-4 border-black bg-[#c08f8f] px-6 py-4 text-lg sm:px-6 sm:py-4 sm:text-sm md:px-12 md:py-6 md:text-2xl lg:px-12 lg:py-6 lg:text-2xl font-semibold shadow-[6px_6px_0_0_#000] transition hover:shadow-none aos-init aos-animate"
          >
            View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/shahnwaj-alam-b08415206/"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex items-center justify-center text-center rounded-full gap-2 border-4 lg:border-4 border-black bg-[#c08f8f] px-6 py-4 text-lg sm:px-6 sm:py-4 sm:text-sm md:px-12 md:py-6 md:text-2xl lg:px-12 lg:py-6 lg:text-2xl font-semibold shadow-[6px_6px_0_0_#000] transition hover:shadow-none aos-init aos-animate"
          >
            Connect with me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reconnect;
