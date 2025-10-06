import PageHeading from "@/components/shared/PageHeading";
import AboutRolesSection from "@/section/about/AboutCTA";
import AboutCTA from "@/section/about/AboutCTA";
import AboutHeading from "@/section/about/AboutHeading";
import Roles from "@/section/about/Roles";
import WhatWeDo from "@/section/about/WhatWeDo";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <PageHeading
        title="About Zentro Realty"
        subtitle="At Zentro Realty, we’re passionate about helping people find their dream homes. With years of experience and a deep understanding of the real estate market, we provide trusted guidance and personalized services to make buying, selling, or renting a property seamless and stress-free."
      ></PageHeading>
      <AboutHeading></AboutHeading>
      <WhatWeDo></WhatWeDo>
      <AboutRolesSection></AboutRolesSection>
    </div>
  );
};

export default AboutPage;
