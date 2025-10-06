"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section/Section";

const expertiseData = [
  {
    id: 1,
    title: "Residential Properties",
    desc: "From starter homes to luxury estates, we help you find the perfect place to call home.",
  },
  {
    id: 2,
    title: "Commercial Spaces",
    desc: "Strategic locations and premium facilities for your business growth.",
  },
  {
    id: 3,
    title: "Investment Properties",
    desc: "Smart investment opportunities with high returns and long-term value.",
  },
  {
    id: 4,
    title: "Property Management",
    desc: "Full-service management to maximize your property's potential.",
  },
];

const OurExpertise = () => {
  return (
    <Section>
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Our Expertise
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Comprehensive real estate solutions tailored to your needs
        </p>
      </div>

      {/* Expertise Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {expertiseData.map((item) => (
          <div
            key={item.id}
            className="border border-border p-8 bg-background hover:bg-muted transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {item.desc}
            </p>
            <Button variant="ghost" className="group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default OurExpertise;
