import React from "react";

const ServiceCard = ({ title, body, src }) => {
  return (
    <div className=" w-full md:w-[49%] lg:w-[23%] hover:scale-105 rounded-xl min-h-80 border-[#383b4400] hover:border-[#30333a] hover:shadow-2xl border md:mb-[3%] mb-6 flex flex-col items-center hover:bg-[#282A30] transition py-8 px-4">
      <img src={src} className="mb-8  w-[90px]" alt="Service" />
      <h2 className="text-main-text-color font-semibold uppercase text-lg mb-4 text-center">
        {title}
      </h2>
      <div>
        <p className="text-secondary-text-color text-center">{body}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
