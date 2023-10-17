import Image from "next/image";
import React from "react";

const ProjectCard = ({ image, title }) => {
  return (
    <div className="project-card min-h-[200px] md:min-h-[300px] h-[40vh] md:h-[50vh] w-full md:w-[49%] mb-4 md:mb-[1%] mr-[1%] cursor-pointer rounded overflow-hidden bg-red-50 relative">
      <Image
        src={image}
        className="project-image w-full h-full object-cover object-center"
      />

      <div className="project-card-overlay relative z-10 flex items-end">
        <h1 className="project-title text-white font-semibold z-20 pl-6 pb-6 text-2xl shadow-sm">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ProjectCard;
