import AgentBenefitsSection from "@/section/agents/AgentBenefitsSection";
import AgentCTASection from "@/section/agents/AgentCTASection";
import { AgentsHeading } from "@/section/agents/AgentsHeading";
import ApplyRequirementsSection from "@/section/agents/ApplyRequirementsSection";
import WhyApplySection from "@/section/agents/WhyApplySection";
import React from "react";

const AgentsPage = () => {
  return (
    <div>
      <AgentsHeading></AgentsHeading>
      <WhyApplySection></WhyApplySection>
      <ApplyRequirementsSection></ApplyRequirementsSection>
      <AgentBenefitsSection></AgentBenefitsSection>
      <AgentCTASection></AgentCTASection>
    </div>
  );
};

export default AgentsPage;
