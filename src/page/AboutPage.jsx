import { CoreValues } from "@/section/about/coreValues";
import Ourexpertise from "@/section/about/ourexpertise";
import OurStory from "@/section/about/ourstory";
import PageHeading from "@/components/shared/PageHeading";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageHeading
        title="About Zentro Realty"
        subtitle="At Zentro Realty, we’re passionate about helping people find their dream homes. With years of experience and a deep understanding of the real estate market, we provide trusted guidance and personalized services to make buying, selling, or renting a property seamless and stress-free. "
      ></PageHeading>
      <OurStory />
      <CoreValues />
      <Ourexpertise />
    </>
  );
};

export default AboutPage;
