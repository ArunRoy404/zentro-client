"use client";

import { Button } from "@/components/ui/button";
import { Shield, Briefcase, Search } from "lucide-react";

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
    <section className="py-20 px-4 sm:px-8 lg:px-20 bg-background text-primary">
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
        <Button className="px-8 py-6 text-lg font-semibold">
          Explore Properties
        </Button>
      </div>
    </section>
  );
}
