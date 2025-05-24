import React from "react";
import Navbar from "../navbar";
import ContactForm from "./form";

const Banner = () => {
  return (
    <div>
      <Navbar theme="light" />
      <div className="app-width py-32 flex flex-col md:flex-row justify-between gap-10">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Get in touch
          </h1>
          <p className="text-gray-600 text-lg max-w-[316px]">
            Let us know how we can support you or answer any question
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Banner;
