import React from "react";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Access exclusive property listings before the public",
  "Earn commissions on rentals and sales",
  "Build your professional profile with verified ratings",
  "Get support from our dedicated team",
  "Manage all your client interactions in one place",
];

export default function WhyApplyList() {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6 text-foreground">
        Why Apply as an Agent?
      </h2>
      <ul className="space-y-4">
        {benefits.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-foreground/80 transition-all duration-300 hover:translate-x-2"
          >
            <CheckCircle className="text-secondary w-6 h-6 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
