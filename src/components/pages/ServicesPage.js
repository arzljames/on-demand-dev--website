import React from "react";
import classess from "./container.module.css";
import ServiceCard from "../ui/ServiceCard";
import { SERVICES } from "@/constant";
import PageTitle from "../ui/PageTitle";

const ServicesPage = () => {
  return (
    <div className={`${classess.container} py-10 `}>
      <PageTitle title="Services" />

      <div className="flex flex-wrap items-center justify-between">
        {SERVICES.map((item, index) => {
          return (
            <ServiceCard
              key={index}
              title={item.title}
              body={item.body}
              src={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
