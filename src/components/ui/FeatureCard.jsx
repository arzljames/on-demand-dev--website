import Image from "next/image";
import React from "react";

const FeatureCard = ({ title, src }) => {
  return (
    <div className="md:w-[49%] lg:w-[32%] md:max-w-[400px] h-[500px] w-full  rounded-sm flex flex-col overflow-hidden md:mb-[3%] mb-10 cursor-pointer">
      <div className="flex-1 overflow-hidden flex items-center justify-center">
        <Image src={src} className="h-full object-cover w-full object-center" />
      </div>
      <div className="h-16 bg-[#2D3036] flex items-center justify-center">
        <h5 className="text-main-text-color font-semibold text-lg">{title}</h5>
      </div>
    </div>
  );
};

export default FeatureCard;
