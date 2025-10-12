"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Section from "@/components/Section/Section";

const AboutCTA = () => {
  return (
    <Section bg="bg-gray-50">
      {" "}
      <div className="text-center mt-28">
        <h2 className="text-4xl font-bold mb-6">
          Start Your Property Journey With Us
        </h2>

        <p className="text-lg text-secondary max-w-3xl mx-auto mb-8">
          Join thousands of happy customers, trusted agents, and successful
          property owners. Together, we’re redefining the future of real estate
          — one property at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base">
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-base bg-transparent"
          >
            View Properties
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default AboutCTA;
