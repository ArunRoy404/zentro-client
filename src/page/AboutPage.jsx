<<<<<<< HEAD
=======
import PageHeading from "@/components/shared/PageHeading";
import AboutCTA from "@/section/about/AboutCTA";
import AboutHeading from "@/section/about/AboutHeading";
import MissionVision from "@/section/about/MissionVision";
import Roles from "@/section/about/Roles";
import WhatWeDo from "@/section/about/WhatWeDo";
import WhoWeAre from "@/section/about/WhoWeAre";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <PageHeading
        title="About Zentro Realty"
        subtitle="At Zentro Realty, we’re passionate about helping people find their dream homes. With years of experience and a deep understanding of the real estate market, we provide trusted guidance and personalized services to make buying, selling, or renting a property seamless and stress-free."
      ></PageHeading>
      <div className="max-w-7xl mx-auto py-14">
        <AboutHeading></AboutHeading>
        <WhoWeAre></WhoWeAre>
        <MissionVision></MissionVision>
        <WhatWeDo></WhatWeDo>
        <Roles></Roles>
        <AboutCTA></AboutCTA>
      </div>
    </div>
  );
};

export default AboutPage;
>>>>>>> fde4f265844be79c12b65de31c072aebae1cfcd7
