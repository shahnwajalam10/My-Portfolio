import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white border-t-4 border-black">
      <div className="max-w-screen-xl px-6 md:px-8 mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 text-center" data-aos="fade-down">
          <h2 className="text-5xl sm:text-6xl font-extrabold uppercase mb-6 text-black heading_font border-4 border-black px-8 py-4 inline-block bg-[#A5D8FF] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            PROJECTS
          </h2>
          <p className="text-xl lg:text-2xl text-gray-900 font-mono max-w-3xl mx-auto mt-6">
            A collection of personal projects I actively work on to build practical experience, enhance my skills, and explore creative solutions as a fresher :)
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 p-4">
          <Card
            date={"JULY 2023"}
            imgsrc={`https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            desc={
              "Implemented full CRUD operations for blog posts, developed an API with a 99% success rate using Thunder VS Code extension, and optimized MongoDB queries, reducing average response time by 30%."
            }
            link={"https://github.com/shahnwajalam10/BLOG-APP"}
            title={"BLOG APP"}
            techused="React.js, Tailwind CSS, MongoDB, Node.js"
            borderColor="border-blue-400"
          />
          <Card
            date={"NOV 2024"}
            imgsrc={`https://images.unsplash.com/photo-1633510044266-8d7b1ee9f501?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            desc={
              "Led a team of 4 members in developing a Facebook clone using HTML, CSS, and JavaScript DOM, implementing features such as user authentication and dynamic content updates."
            }
            link={"https://github.com/shahnwajalam10/Facebook-Clone"}
            title={"FACEBOOK CLONE"}
            techused="HTML, CSS, JavaScript DOM"
            borderColor="border-green-400"
          />
          {/* Add your third project card here when ready */}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <a
            href="https://github.com/shahnwajalam10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-black text-white font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
          >
            VIEW MORE ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;