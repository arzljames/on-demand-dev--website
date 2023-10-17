"use client";
import React from "react";
import PageTitle from "@/components/ui/PageTitle";
import ContactForm from "@/components/form/ContactForm";

const ContactUs = () => {
  return (
    <div className="w-full min-h-[100vh] bg-dark md:px-20 lg:px-[10%] px-6 flex flex-col relative">
      <PageTitle
        title="Contact Us"
        subtitle="Do you have any questions? Send us a message!"
      />

      <ContactForm />
    </div>
  );
};

export default ContactUs;
