import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-12 my-20" id="Projects">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12">
          <div className="flex flex-col items-center gap-4 my-8">
            <h2 className="text-gray-800 text-4xl sm:text-5xl heading_font font-bold">
              Projects
            </h2>
            <p className="text-xl lg:text-2xl text-gray-900 text-center">
              A collection of personal projects I actively work on to build practical experience, enhance my skills, and explore creative solutions as a fresher :)
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 p-6 sm:p-8 md:p-10">
            <Card
              date={"July 2023"}
              imgsrc={`https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              desc={
                "Implemented full CRUD operations for blog posts, developed an API with a 99% success rate using Thunder VS Code extension, and optimized MongoDB queries, reducing average response time by 30%."
              }
              link={"https://github.com/shahnwajalam10/BLOG-APP"}
              title={"BLOG-APP"}
              techused="React.js, Tailwind CSS, MongoD, Node js"
            />
            <Card
              date={"Nov 2024"}
              imgsrc={`https://images.unsplash.com/photo-1633510044266-8d7b1ee9f501?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              desc={
                "Led a team of 4 members in developing a Facebook clone using HTML, CSS, and JavaScript DOM, implementing features such as user authentication and dynamic content updates, while collaborating effectively through GitHub for version control and seamless team coordination."
              }
              link={"https://github.com/shahnwajalam10/Facebook-Clone"}
              title={"FACEBOOK CLONE"}
              techused="HTML, CSS, and JavaScript DOM"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
