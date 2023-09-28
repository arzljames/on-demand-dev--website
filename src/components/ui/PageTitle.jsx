import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="w-full flex items-center justify-center mt-20 mb-16">
      <span className="relative z-10">
        <h2 className="text-main-text-color text-3xl font-light relative tracking-wider z-10 uppercase">
          {title}
        </h2>
        <div className="w-[40%] h-[6px] bg-main-color absolute -left-4 bottom-1 z-0"></div>
      </span>
    </div>
  );
};

export default PageTitle;
