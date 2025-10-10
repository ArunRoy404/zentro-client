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
    <main className="pt-16 md:pt-17">
      <PageHeading
        title="About Zentro Realty"
        subtitle="At Zentro Realty, we help people find their dream homes with trusted guidance and personalized services, making buying, selling, or renting seamless."
      ></PageHeading>
      <AboutHeading></AboutHeading>
      <WhatWeDo></WhatWeDo>
      <OurExpertise></OurExpertise>
      <RolesSection></RolesSection>
      <StatsSection></StatsSection>
      <AboutCTA></AboutCTA>
      <CoreValues></CoreValues>
    </main>
  );
};

export default AboutPage;
