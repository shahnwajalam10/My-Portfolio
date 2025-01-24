import React from "react";

const Card = ({ imgsrc, date, title, desc, link, techused }) => {
  return (
    <div
      className="w-80 h-full p-6 relative"
      style={{
        backgroundColor: "#f5f5f5", // Soft muted background color for a neubrutalism feel
        boxShadow: "6px 6px 0px rgba(0, 0, 0, 0.4), -6px -6px 0px rgba(0, 0, 0, 0.4)", // Bold shadow effect
      }}
    >
      <div className="flex flex-col h-full space-y-6">
        {/* Image Section */}
        <figure className="w-full h-56 mb-6 relative">
          <img
            src={imgsrc}
            alt="thumbnail"
            className="w-full h-full object-cover"
            style={{
              boxShadow: "12px 12px 0px rgba(0, 0, 0, 0.2)", // Sharp shadow for the image
            }}
          />
        </figure>

        {/* Content Section */}
        <div className="flex flex-col space-y-4">
          {/* Date */}
          <p className="text-sm text-gray-700">{date}</p>

          {/* Title */}
          <h2 className="text-3xl font-bold text-black">{title}</h2>

          {/* Description */}
          <p className="text-sm text-gray-900">{desc}</p>

          {/* Technologies */}
          <p className="text-xs text-gray-800">
            <b>Technology Used:</b> {techused}
          </p>

          {/* Button with sharp neubrutalism shadow */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-3 px-6 font-bold text-black uppercase tracking-wider bg-white hover:bg-gray-100"
            style={{
              border: "3px solid black", // Strong border with no rounded corners
              boxShadow: "6px 6px 0px rgba(0, 0, 0, 0.4), -6px -6px 0px rgba(0, 0, 0, 0.4)", // Bold shadow
              textTransform: "uppercase",
            }}
          >
            Check Out This Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
