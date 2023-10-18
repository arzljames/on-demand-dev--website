"use client";
import Link from "next/link";
import React, { useRef } from "react";

const ProjectCard = ({ image, title, link }) => {
  const [imageHeight, setImageHeight] = React.useState(0);

  const handleImageLoad = (event) => {
    setImageHeight(event.target.clientHeight);
  };

  return (
    <Link
      href={link}
      target="_blank"
      className="project-card min-h-[200px] md:min-h-[300px] h-[40vh] md:h-[50vh] w-full md:w-[49%] mb-4 md:mb-[1%] mr-[1%] cursor-pointer rounded overflow-hidden  relative border-secondary-dark border-4 shadow-xl"
    >
      <img
        onLoad={handleImageLoad}
        src={image}
        className={"project-image object-cover rounded"}
        alt="Project"
      />

      <div className="project-card-overlay z-10 flex sticky items-end overflow-hidden">
        <div className="bg-main-color w-full p-4 bg-opacity-90">
          <h1 className="project-title text-white font-semibold z-20 text-2xl shadow-sm">
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
