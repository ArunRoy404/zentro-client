import React from "react";
import {
  Building2,
  Mail,
  FileBadge2,
  Star,
  Briefcase,
  MapPin,
  User,
} from "lucide-react";

export default function PropertyAgentCard({ agent }) {
  return (
    <div className="border border-[var(--shad)] p-10 shadow">
      <h2 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
        <Building2 className="text-[var(--primary)]" /> Agent Info
      </h2>

      <div className="space-y-2 text-[var(--secondary)]">
        <p className="flex items-center gap-2">
          <User size={16} /> {agent.name}
        </p>
        <p className="flex items-center gap-2">
          <Mail size={16} /> {agent.email}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={16} /> {agent.officeAddress}
        </p>
        <p className="flex items-center gap-2">
          <FileBadge2 size={16} /> License No: {agent.licenseNo}
        </p>
        <p className="flex items-center gap-2">
          <Star size={16} /> Rating: {agent.rating}
        </p>
        <p className="flex items-center gap-2">
          <Briefcase size={16} /> Total Sales: {agent.totalSales}
        </p>
        <p className="flex items-center gap-2">
          <Briefcase size={16} /> Total Rentals: {agent.totalRentals}
        </p>

        <p className="mt-2 italic text-[var(--secondary)]">“{agent.bio}”</p>
      </div>
    </div>
  );
}
