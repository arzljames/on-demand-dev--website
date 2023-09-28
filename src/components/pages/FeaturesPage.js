import React from "react";
import classess from "./container.module.css";
import FeatureCard from "@/components/ui/FeatureCard";
import { FEATURES } from "@/constant";
import PageTitle from "../ui/PageTitle";

const FeaturesPage = () => {
  return (
    <div className={`${classess.container} py-10`}>
      <PageTitle title="Features" />

      <div className="flex flex-wrap items-center justify-between">
        {FEATURES.map((item, index) => {
          return (
            <FeatureCard key={index} title={item.title} src={item.image} />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesPage;
