import React from "react";
import { Button } from "@/components/ui/button";

export default function ApplyCard() {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-shad p-8 bg-background/5 border border-border">
      <img
        src="/images/agent-illustration.png"
        alt="Agent Illustration"
        className="w-full h-auto mb-6 rounded-lg"
      />
      <p className="text-foreground/70 mb-6">
        Applying as an agent with Zentro allows you to grow your business while
        providing a professional service to your clients. Highlight your profile
        and start earning today!
      </p>
      <Button asChild size="lg">
        <a href="/apply-agent">Apply Now</a>
      </Button>
    </div>
  );
}
