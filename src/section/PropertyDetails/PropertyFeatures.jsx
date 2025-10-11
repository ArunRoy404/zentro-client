import React from "react";
import { CheckCircle } from "lucide-react";

export default function PropertyFeatures({ features }) {
  return (
    <div className="mt-5">
      <h3 className="font-semibold text-[var(--primary)] mb-3">Features</h3>
      <ul className="grid grid-cols-2 gap-y-2 text-[var(--secondary)]">
        {features?.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[var(--primary)]" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
