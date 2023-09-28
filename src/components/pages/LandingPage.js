import React from "react";
import { Button } from "@/components/ui/Button";
import Laptop from "../../assets/landing-page/laptop.png";
import Image from "next/image";
import { LANDING_PAGE_FEATURES, TAG_LINES } from "@/constant";
import classess from "./container.module.css";

const LandingPage = () => {
  return (
    <>
      <div
        className={`${classess.container} flex justify-center items-start flex-col pb-14 relative z-10`}
      >
        <div className="z-20">
          <h1 className="text-5xl font-bold mb-3 text-main-text-color leading-[1.2]">
            {TAG_LINES.header}
          </h1>
          <h2 className="text-3xl mb-10 font-light text-main-text-color">
            {TAG_LINES.sub_header}
          </h2>
          <Button className="bg-main-color hover:bg-main-color-dark p-6 text-base">
            Schedule Free Consultation
          </Button>
        </div>

        <Image
          src={Laptop}
          width={1100}
          className="absolute right-0 z-[1] object-cover"
        />
      </div>
      <div className="min-h-[40vh] w-full bg-[#282a30] flex md:items-center md:justify-between md:px-20 px-6 py-10 md:flex-row flex-col">
        {LANDING_PAGE_FEATURES.map((item, index) => {
          return (
            <div key={index} className="md:w-[23%] md:mb-0 mb-10 w-full">
              <Image src={item.icon} className="mb-8" />
              <h2 className="text-main-text-color font-bold text-lg mb-4">
                {item.title}
              </h2>
              <p className="text-secondary-text-color">{item.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LandingPage;
