"use client";
import Link from "next/link";
import { NAV_LINKS } from "@/constant";
import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoLight from "../assets/logo-light.png";

export const Header = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between items-center h-16 md:h-20 md:px-20 lg:px-[10%] px-6 w-full select-none  z-20 ${
        scrollPosition > 500
          ? "sticky top-0 shadow-xl border-[#282A30] border-b bg-opacity-90 backdrop-blur-sm bg-dark"
          : "md:static sticky top-0 bg-dark"
      }`}
    >
      <div className="flex items-center">
        <div
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="p-1 md:hidden flex cursor-pointer text-white text-lg md:text-2xl rounded items-center justify-center mr-4"
        >
          {isDrawerOpen ? <FiX /> : <FiMenu />}
        </div>
        <Link href="/#">
          <Image
            className="w-[120px] md:w-[150px]"
            src={logoLight}
            alt="Logo"
          />
        </Link>
      </div>
      <nav className="md:flex hidden">
        <ul className="flex transition navlinks">
          {NAV_LINKS.map((item, index) => {
            const link = pathname.toLowerCase().includes("contact")
              ? "/" + item.href.replace("/contact", "")
              : item.href;
            return (
              <li
                className="ml-10 font-medium text-sm uppercase text-main-text-color z-20 tracking-wider"
                key={index}
              >
                <Link href={link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Link
        href="/contact-us"
        className="border py-2 px-4 rounded transition text-sm md:text-base font-medium shadow-none flex text-main-color border-main-color  hover:bg-main-color hover:text-white z-20"
      >
        Contact Us
      </Link>

      {isDrawerOpen && (
        <div className="flex flex-col md:hidden fixed w-full h-[100vh] z-20 bg-dark right-0 top-16 px-2 border-[1px] border-secondary-dark py-4">
          <ul className="flex w-full flex-col transition mb-4">
            {NAV_LINKS.map((item, index) => {
              const link = pathname.toLowerCase().includes("contact")
                ? "/" + item.href.replace("/contact", "")
                : item.href;
              return (
                <li
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-sm font-base text-main-text-color z-20 transition rounded hover:bg-secondary-dark mb-1 h-12 cursor-pointer  px-5"
                  key={index}
                >
                  <Link className="h-full w-full flex items-center" href={link}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
