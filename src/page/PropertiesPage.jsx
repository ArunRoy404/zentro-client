import PageHeading from "@/components/shared/PageHeading";
import PropertiesSection from "@/section/properties/PropertiesSection";
import React from "react";

const PropertiesPage = () => {
  return (
    <main className="pt-16 md:pt-17">
      <PageHeading
        title={"Explore Our Properties"}
        subtitle=" Find your dream home from a wide range of premium properties — apartments, villas, and commercial spaces. Discover the perfect place to live or invest."
      ></PageHeading>
      <PropertiesSection></PropertiesSection>
    </main>
  );
};

export default PropertiesPage;
