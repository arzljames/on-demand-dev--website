"use client";
import { NAV_LINKS } from "@/constant";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
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
      className={`flex justify-between items-center h-20 md:px-20 px-6 w-full select-none bg-[#1f2125] z-20 ${
        scrollPosition > 500
          ? "sticky top-0 shadow-xl border-b-slate-900 "
          : "static "
      }`}
    >
      <h1 className="text-main-text-color font-semibold">Logo Here</h1>
      <nav className="md:flex hidden">
        <ul className="flex  transition">
          {NAV_LINKS.map((item, index) => {
            return (
              <li
                className="ml-8 text-sm font-medium uppercase tracking-widest text-main-text-color z-20"
                key={index}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Button
        variant="outline"
        className=" shadow-none md:flex hidden text-main-color border-main-color hover:bg-main-color hover:text-white z-20"
      >
        Contact Us
      </Button>
      <div className="md:hidden flex cursor-pointer text-white text-2xl rounded-full items-center justify-center w-10 h-10">
        <FiMenu />
      </div>
    </header>
  );
};

export default Navbar;
