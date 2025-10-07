import PageHeading from "@/components/shared/PageHeading";
import AgentApplyForm from "@/section/applyAgent/AgentApplyForm";
import React from "react";

const AgentApplyPage = () => {
  return (
    <div>
      <PageHeading
        title="Apply to Become a Zentro Agent"
        subtitle="Fill out the form below to start your journey as a verified agent on Zentro. Once approved, you’ll gain access to exclusive listings, client tools, and commissions."
      ></PageHeading>
      <AgentApplyForm></AgentApplyForm>
    </div>
  );
};

export default AgentApplyPage;
