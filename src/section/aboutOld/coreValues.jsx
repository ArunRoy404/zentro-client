"use client";
import React from "react";
import CountUp from "react-countup";
import { StatsSection } from "./state";

export const CoreValues = () => {
  return (
    <>
      {/* Core Values Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center bg-primary-foreground/5 p-8 rounded-2xl hover:bg-primary-foreground/10 transition-colors">
              <div className="text-6xl font-bold mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p className="opacity-90 leading-relaxed">
                We believe in transparent, honest dealings with every client,
                every time.
              </p>
            </div>

            <div className="text-center bg-primary-foreground/5 p-8 rounded-2xl hover:bg-primary-foreground/10 transition-colors">
              <div className="text-6xl font-bold mb-4">02</div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="opacity-90 leading-relaxed">
                We strive for perfection in every property and every
                interaction.
              </p>
            </div>

            <div className="text-center bg-primary-foreground/5 p-8 rounded-2xl hover:bg-primary-foreground/10 transition-colors">
              <div className="text-6xl font-bold mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="opacity-90 leading-relaxed">
                We embrace new technologies and methods to serve you better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
    </>
  );
};
