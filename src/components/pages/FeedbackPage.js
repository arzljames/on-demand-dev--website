import React from "react";
import classess from "./container.module.css";
import PageTitle from "../ui/PageTitle";
import FeedbackCard from "../ui/FeedbackCard";
import { FEEDBACK } from "@/constant";

const FeedbackPage = () => {
  return (
    <div className={`${classess.containerlight} py-10`}>
      <PageTitle title="What clients say" />

      <div className="flex flex-wrap items-center justify-between pt-[50px]">
        {FEEDBACK.map((item, index) => {
          return (
            <FeedbackCard
              key={index}
              avatar={item.image}
              name={item.name}
              email={item.email}
              feedback={item.feedback}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackPage;
