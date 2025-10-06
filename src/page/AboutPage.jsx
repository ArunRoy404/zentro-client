import PageHeading from "@/components/shared/PageHeading";
import AboutCTA from "@/section/about/AboutCTA";
import AboutHeading from "@/section/about/AboutHeading";
import { CoreValues } from "@/section/about/CoreValues";
import OurExpertise from "@/section/about/OurExpertise";
import RolesSection from "@/section/about/RolesSection";
import StatsSection from "@/section/about/StatsSection";
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
      <OurExpertise></OurExpertise>
      <RolesSection></RolesSection>
      <StatsSection></StatsSection>
      <AboutCTA></AboutCTA>
      <CoreValues></CoreValues>
    </div>
  );
};

export default AboutPage;
