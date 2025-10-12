import React from "react";
import { MapPin, Ruler, Tag, Heart, CircleDollarSign } from "lucide-react";

export default function PropertyInfo({ property }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--primary)] mb-2">
        {property.title}
      </h1>

      <div className="space-y-2 text-[var(--secondary)]">
        <p className="flex items-center gap-2">
          <CircleDollarSign size={18} className="text-[var(--primary)]" />
          <span className="font-semibold text-[var(--primary)]">
            {property.price.toLocaleString()} BDT
          </span>
        </p>

        <p className="flex items-center gap-2">
          <MapPin size={18} className="text-[var(--primary)]" />
          {property.location.city}, {property.location.state}
        </p>

        <p className="flex items-center gap-2">
          <Ruler size={18} className="text-[var(--primary)]" />
          {property.propertyArea.value} {property.propertyArea.unit}
        </p>

        <p className="flex items-center gap-2">
          <Tag size={18} className="text-[var(--primary)]" />
          {property.propertyCategory}
        </p>

        <p className="flex items-center gap-2">
          <Heart size={18} className="text-[var(--primary)]" /> {property.likes}
        </p>
      </div>
    </div>
  );
}
