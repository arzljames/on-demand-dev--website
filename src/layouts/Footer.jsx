import React from "react";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import logoLight from "../assets/logo-light.png";

const Footer = () => {
  const date = new Date();
  return (
    <div className="w-full bg-dark min-h-[25vh] py-8 md:px-20 lg:px-[10%] px-6 flex md:items-center justify-center flex-col">
      <Image
        className="w-[120px] md:w-[150px] mb-6"
        src={logoLight}
        alt="Logo"
      />
      <div className="text-[#818794] flex w-full md:w-[40%] md:min-w-[400px] justify-between mb-8 flex-col md:flex-row">
        <p className="hover:cursor-pointer hover:underline">Terms of Service</p>
        <p className="hover:cursor-pointer hover:underline">Privacy Policy</p>
        <p className="hover:cursor-pointer hover:underline">Security</p>
        <p className="hover:cursor-pointer hover:underline">Sitemap</p>
      </div>
      <div className="w-full border-t-[1px] border-[#32353b] pt-8 flex items-center md:flex-row justify-between text-main-text-color text-sm flex-col">
        <p>
          © {date.getFullYear()} On-Demand Developers. All rights reserved.{" "}
        </p>

        <div className="flex justify-center md:justify-end md:w-auto w-full mt-4 md:mt-0">
          <FaFacebookF
            size={18}
            className="cursor-pointer hover:text-main-color transition"
          />
          <FaYoutube
            size={18}
            className="ml-6 md:ml-4 cursor-pointer hover:text-main-color transition"
          />
          <FaTwitter
            size={18}
            className="ml-6 md:ml-4 cursor-pointer hover:text-main-color transition"
          />
          <FaLinkedin
            size={18}
            className="ml-6 md:ml-4 cursor-pointer hover:text-main-color transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
