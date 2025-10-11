import React from "react";

export default function PropertyCard({ property }) {
  return (
    <div className="border border-[var(--shad)] shadow hover:shadow-lg transition flex flex-col">
      <img
        src={property.images || "https://via.placeholder.com/400x200"}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-[var(--primary)]">
          Name: {property.title}
        </h3>
        <p className="text-sm text-[var(--secondary)]">
          Location: {property.location.city}, {property.location.state || "N/A"}
        </p>
        <p className="mt-2 font-bold text-[var(--primary)]">
          Price: ${property.price.toLocaleString()}
        </p>
        <p className="mt-1 text-[var(--secondary)] text-sm line-clamp-2 flex-1">
          Description:{" "}
          {property.description.length > 60
            ? property.description.slice(0, 60) + "..."
            : property.description}
        </p>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          <button className="flex-1 bg-[var(--primary)] hover:bg-gray-700 text-[var(--background)] font-semibold py-2 rounded-none transition">
            Add to Cart
          </button>
          <button className="flex-1 border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] text-[var(--primary)] font-semibold py-2 rounded-none transition">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
}
