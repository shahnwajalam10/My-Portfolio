import React from "react";

const Card = ({ imgsrc, date, title, desc, link, deployLink, techused }) => {
  return (
    <div className="relative w-full h-full border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Light blue background layer */}
      <div className="absolute -bottom-2 -right-2 h-full w-full border-2 border-black bg-[#A5D8FF] -z-10"></div>
      
      <div className="flex flex-col h-full p-0 overflow-hidden">
        {/* Image Section */}
        <div className="relative overflow-hidden border-b-4 border-black">
          <img
            src={imgsrc}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-mono text-sm">
            {date}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-6">
          {/* Title */}
          <h2 className="text-2xl font-extrabold uppercase mb-3 text-black heading_font">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-800 mb-4 flex-grow">{desc}</p>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="font-bold text-sm uppercase mb-2 font-mono">TECH STACK:</h3>
            <div className="flex flex-wrap gap-2">
              {techused.split(",").map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-[#A5D8FF] border-2 border-black text-xs font-mono font-bold"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-6 py-3 bg-black text-white font-bold border-2 border-black uppercase tracking-wider"
            >
              GitHub
            </a>
            <a
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-6 py-3 bg-[#A5D8FF] text-black font-bold border-2 border-black uppercase tracking-wider"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;