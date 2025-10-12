import ApplyCard from "@/components/Agents/ApplyCard";
import WhyApplyList from "@/components/Agents/WhyApplyList";
import Section from "@/components/Section/Section";
import React from "react";

const WhyApplySection = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12">
        <WhyApplyList></WhyApplyList>
        <ApplyCard></ApplyCard>
      </div>
    </Section>
  );
};

export default WhyApplySection;
