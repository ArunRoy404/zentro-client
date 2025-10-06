"use client";

import Section from "@/components/Section/Section";
import { Home, DollarSign, Users, ShieldCheck, BarChart } from "lucide-react";

export default function WhatWeDo() {
  const services = [
    {
      icon: <Home className="w-7 h-7 text-secondary" />,
      title: "Buy or Rent Properties",
      desc: "Discover a wide range of properties — from cozy residential homes to prime commercial spaces that fit every lifestyle and business need.",
    },
    {
      icon: <DollarSign className="w-7 h-7 text-secondary" />,
      title: "Sell With Confidence",
      desc: "List your property with ease and reach thousands of verified buyers, ensuring a fast, secure, and profitable transaction.",
    },
    {
      icon: <Users className="w-7 h-7 text-secondary" />,
      title: "Connect With Agents",
      desc: "Collaborate with verified and experienced agents who guide you through every step — from property search to final deal.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-secondary" />,
      title: "Secure Transactions",
      desc: "Enjoy transparent, protected, and seamless transactions with advanced verification and data security at every step.",
    },
    {
      icon: <BarChart className="w-7 h-7 text-secondary" />,
      title: "Admin Tools",
      desc: "Admins can manage users, monitor listings, and analyze platform performance from one powerful and intuitive dashboard.",
    },
  ];

  return (
    <Section bg="bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Home className="w-8 h-8 text-secondary" />
          <h2 className="text-4xl font-bold">What We Do</h2>
        </div>
        <p className="text-lg text-secondary max-w-2xl mx-auto">
          From property discovery to secure transactions — everything you need
          for a smooth real estate experience is here.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-[var(--background)] hover:bg-[var(--shad)]/10 transition-colors duration-300 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              {item.icon}
              <h3 className="text-xl font-semibold text-[var(--primary)]">
                {item.title}
              </h3>
            </div>
            <p className="text-[var(--secondary)] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
