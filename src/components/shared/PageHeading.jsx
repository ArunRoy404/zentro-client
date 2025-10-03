import React from "react";
import Section from "../Section/Section";

const PageHeading = ({ title, subtitle }) => {
  return (
    <Section bg={"bg-primary"}>
      <div className="container mx-auto px-4 pt-36 pb-24 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch With Us
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-[var(--secondary)]">
          Have questions about buying, selling, or renting a property? We’re
          here to help every step of the way.
        </p>
      </div>
    </Section>
  );
};

export default PageHeading;
