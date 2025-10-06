import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Ourexpertise = () => {
  return (
    <section className="py-20 md:py-32">
      {/* Container */}
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
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
          {/* Residential Properties */}
          <div className="border border-border p-8 rounded-2xl hover:bg-muted transition-colors">
            <h3 className="text-2xl font-bold mb-4">Residential Properties</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From starter homes to luxury estates, we help you find the perfect
              place to call home.
            </p>
            <Button variant="ghost" className="group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Commercial Spaces */}
          <div className="border border-border p-8 rounded-2xl hover:bg-muted transition-colors">
            <h3 className="text-2xl font-bold mb-4">Commercial Spaces</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Strategic locations and premium facilities for your business
              growth.
            </p>
            <Button variant="ghost" className="group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Investment Properties */}
          <div className="border border-border p-8 rounded-2xl hover:bg-muted transition-colors">
            <h3 className="text-2xl font-bold mb-4">Investment Properties</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Smart investment opportunities with high returns and long-term
              value.
            </p>
            <Button variant="ghost" className="group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Property Management */}
          <div className="border border-border p-8 rounded-2xl hover:bg-muted transition-colors">
            <h3 className="text-2xl font-bold mb-4">Property Management</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Full-service management to maximize your property's potential.
            </p>
            <Button variant="ghost" className="group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourexpertise;
