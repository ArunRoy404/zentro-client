"use client";

import React, { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import DataFetch from "./DataFetch";
import PropertyCard from "@/components/properties/PropertyCard";
import AlertTable from "@/components/Alert/AlertTable";

export default function PropertiesSection() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-[250px_1fr]">
      <FilterSidebar
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      <DataFetch
        search={search}
        location={location}
        minPrice={minPrice}
        maxPrice={maxPrice}
      >
        {(filtered) => {
          if (filtered.length === 0)
            return (
              <AlertTable message={'No properties found.'} label={'Properties'} />
            );

          return (
            <section className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </section>
          );
        }}
      </DataFetch>
    </section>
  );
}
