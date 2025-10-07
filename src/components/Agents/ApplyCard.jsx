import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ApplyCard() {
  return (
    <div className="relative overflow-hidden shadow-shad p-8 bg-background/5 border border-border">
      <Image
        src="/images/agent-illustration.jpg"
        alt="Agent Illustration"
        width={200}
        height={200}
        className="mb-6 mx-auto rounded-lg"
      />
      <p className="text-foreground/70 mb-6">
        Applying as an agent with Zentro allows you to grow your business while
        providing a professional service to your clients. Highlight your profile
        and start earning today!
      </p>
      <Button asChild size="lg">
        <a href="/agents/apply-agent">Apply Now</a>
      </Button>
    </div>
  );
}
