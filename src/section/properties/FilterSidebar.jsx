import React from "react";

export default function FilterSidebar({
  search,
  setSearch,
  location,
  setLocation,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) {
  return (
    <aside className="space-y-6 sticky top-6 self-start">
      <h2 className="text-xl font-bold text-[var(--primary)]">Filters</h2>

      <div>
        <label className="block mb-1 font-medium">Search by Name</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter property name"
          className="w-full border border-[var(--shad)] px-3 py-2 focus:ring-2 focus:ring-[var(--primary)] text-[var(--primary)] bg-[var(--background)] rounded-none"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Search by Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="City or State"
          className="w-full border border-[var(--shad)] px-3 py-2 focus:ring-2 focus:ring-[var(--primary)] text-[var(--primary)] bg-[var(--background)] rounded-none"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min"
            className="w-1/2 border border-[var(--shad)] px-3 py-2 focus:ring-2 focus:ring-[var(--primary)] text-[var(--primary)] bg-[var(--background)] rounded-none"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max"
            className="w-1/2 border border-[var(--shad)] px-3 py-2 focus:ring-2 focus:ring-[var(--primary)] text-[var(--primary)] bg-[var(--background)] rounded-none"
          />
        </div>
      </div>
    </aside>
  );
}
