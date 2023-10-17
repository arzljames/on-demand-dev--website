import React from "react";

const TeamCard = ({ name, position, profile }) => {
  return (
    <div className="w-[49%] md:w-[23%] h-[100%] md:mr-[2%]">
      <div className=" cursor-pointer bg-main-color  rounded after:content-[''] after:block after:pb-[100%] mb-[2%] relative flex items-end">
        <img
          src={profile}
          alt="Team Profile"
          className="absolute w-full grayscale team-profile rounded h-full object-cover"
        />
      </div>

      <div className="mb-6 mt-4 text-sm md:text-base">
        <h3 className="text-white font-medium">{name}</h3>
        <p className="text-secondary-text-color font-light">{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
