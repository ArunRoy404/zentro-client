import PageHeading from "@/components/shared/PageHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AboutHeading from "@/section/about/AboutHeading";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <PageHeading
        title="About Zentro Realty"
        subtitle="At Zentro Realty, we’re passionate about helping people find their dream homes. With years of experience and a deep understanding of the real estate market, we provide trusted guidance and personalized services to make buying, selling, or renting a property seamless and stress-free."
      ></PageHeading>
      <AboutHeading></AboutHeading>
    </div>
  );
};

export default AboutPage;
