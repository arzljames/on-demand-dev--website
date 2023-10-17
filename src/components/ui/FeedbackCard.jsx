import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const FeedbackCard = ({ name, email, feedback, avatar }) => {
  return (
    <div className="md:w-[49%] lg:w-[30%] lg:max-w-full md:max-w-[400px] h-[400px] w-full border bg-opacity-20 md:backdrop-blur-md border-secondary-dark bg-[#000000] rounded-[8px] flex flex-col md:mb-[3%] mb-12 shadow-lg relative">
      <div className="absolute left-[50%] w-[90px] h-[90px] rounded-full bg-red-50 translate-x-[-50%] translate-y-[-50%] border-[10px] border-[#282A30]">
        <img alt="Avatar" src={avatar} width={90} className="rounded-full" />
      </div>

      <div className="flex flex-col w-full items-center justify-center mt-16 px-6">
        <h2 className="text-main-text-color font-bold text-lg">{name}</h2>
        <p className="text-secondary-text-color">{email}</p>

        <div className="rounded-full w-[40px] h-[40px] bg-main-color my-8 text-white flex items-center justify-center text-lg">
          <BiSolidQuoteAltLeft />
        </div>
        <p className="text-secondary-text-color italic text-center">
          ❝ {feedback} ❞
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
