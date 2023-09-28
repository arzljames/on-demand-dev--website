import Image from "next/image";
import React from "react";

const ServiceCard = ({ title, body, src }) => {
  return (
    <div className=" w-full md:w-[49%] lg:w-[23%] rounded-xl h-80 border-[#282A30] border md:mb-[3%] mb-6 flex flex-col items-center hover:bg-[#282A30] transition py-8 px-4">
      <Image src={src} className="mb-8" />
      <h2 className="text-main-text-color font-semibold uppercase text-lg mb-4">
        {title}
      </h2>
      <div>
        <p className="text-secondary-text-color text-center">{body}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
