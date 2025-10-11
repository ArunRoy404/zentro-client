import React from "react";
import { FileText } from "lucide-react"; // Icon import

const PropertyDescription = ({ description }) => {
  return (
    <div className="border border-[var(--shad)] p-10 flex items-start gap-3">
      <div className="text-[var(--primary)]">
        <FileText size={22} />
      </div>
      <div>
        <h3 className="font-semibold mb-1">Description</h3>
        <p className="text-[var(--secondary)] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default PropertyDescription;

