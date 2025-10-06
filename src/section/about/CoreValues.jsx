"use client";
import React from "react";
import Section from "@/components/Section/Section";

export const CoreValues = () => {
  return (
    <Section bg="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
            At the heart of our real estate business are the guiding principles
            that shape every decision, every deal, and every dream we help bring
            to life. These values define who we are and how we work with our
            clients, partners, and communities.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Integrity */}
          <div className="text-center bg-primary-foreground/5 backdrop-blur-sm p-10 rounded-2xl shadow-lg hover:shadow-xl hover:bg-primary-foreground/10 transition duration-300">
            <div className="text-6xl font-bold mb-4 text-secondary">01</div>
            <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
            <p className="opacity-90 leading-relaxed text-base">
              We build trust through transparency, honesty, and accountability.
              Every client deserves clear communication and ethical practices
              throughout their real estate journey, ensuring lasting
              relationships built on confidence.
            </p>
          </div>

          {/* Excellence */}
          <div className="text-center bg-primary-foreground/5 backdrop-blur-sm p-10 rounded-2xl shadow-lg hover:shadow-xl hover:bg-primary-foreground/10 transition duration-300">
            <div className="text-6xl font-bold mb-4 text-secondary">02</div>
            <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
            <p className="opacity-90 leading-relaxed text-base">
              We aim for perfection in every detail — from property listings to
              client interactions. Our dedication to quality ensures that every
              transaction exceeds expectations and reflects our commitment to
              exceptional service.
            </p>
          </div>

          {/* Innovation */}
          <div className="text-center bg-primary-foreground/5 backdrop-blur-sm p-10 rounded-2xl shadow-lg hover:shadow-xl hover:bg-primary-foreground/10 transition duration-300">
            <div className="text-6xl font-bold mb-4 text-secondary">03</div>
            <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
            <p className="opacity-90 leading-relaxed text-base">
              We embrace modern technology, data-driven insights, and creative
              strategies to deliver smarter real estate solutions. Innovation
              helps us stay ahead and provide unmatched experiences for our
              clients and partners.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
