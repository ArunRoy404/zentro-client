"use client";

import { Button } from "@/components/ui/button";
import { Shield, Briefcase, Search, ArrowRight } from "lucide-react";
import { Stats } from "./Stats";
import Section from "@/components/Section/Section";

export default function AboutRolesSection() {
  const roles = [
    {
      icon: <Shield className="w-7 h-7 text-secondary" />,
      title: "Admin",
      desc: "Admins oversee platform operations, manage users, monitor activity, and ensure a secure, seamless experience for everyone.",
    },
    {
      icon: <Briefcase className="w-7 h-7 text-secondary" />,
      title: "Agent",
      desc: "Agents bring listings to life, connect buyers and sellers, and provide professional guidance through every transaction.",
    },
    {
      icon: <Search className="w-7 h-7 text-secondary" />,
      title: "Customer",
      desc: "Customers enjoy an easy, powerful property search experience — browse, filter, and connect with agents effortlessly.",
    },
  ];

  return (
    <Section bg="bg-gray-50">
      {/* Roles Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Who Uses Our Platform
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {roles.map((role, i) => (
            <div
              key={i}
              className="p-8 bg-background hover:bg-shad/10 transition-colors duration-300 rounded-xl text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                {role.icon}
                <h3 className="text-2xl font-semibold text-primary">
                  {role.title}
                </h3>
              </div>
              <p className="text-secondary leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
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
        <div className="mt-10">
          <Stats></Stats>
        </div>
      </div>
    </Section>
  );
}
