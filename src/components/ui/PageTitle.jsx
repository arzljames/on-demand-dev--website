import React from "react";

const PageTitle = ({ subheading, title, color, subtitle }) => {
  return (
    <div className="w-full flex items-center justify-center mt-20 mb-16 flex-col">
      {subheading && (
        <p className="mb-2 uppercase text-main-color font-semibold text-sm tracking-wide">
          {subheading}
        </p>
      )}
      <span className="relative z-10 mb-2">
        <h2
          className={`${
            color ? color : "text-main-text-color"
          } text-3xl font-extralight relative tracking-wider z-10 uppercase`}
        >
          {title}
        </h2>
        <div className="w-[40%] h-[6px] bg-main-color absolute -left-4 bottom-1 z-0"></div>
      </span>
      {subtitle && (
        <p className="text-main-text-color text-center">{subtitle}</p>
      )}
    </div>
  );
};

export default PageTitle;
