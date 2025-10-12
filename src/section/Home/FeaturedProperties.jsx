"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section/Section";
import PropertyCard from "@/components/properties/PropertyCard";
import SectionHeading from "@/components/shared/SectionHeading";

export default function FeaturedProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          "https://zentro-server.vercel.app/api/v1/property/get-all-property"
        );
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          // Take only the first 6 properties
          setProperties(data.data.slice(0, 6));
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <Section>
      {/* Heading */}
      <SectionHeading
        title="Featured Properties"
        Button={() => (
          <Link href="/properties">
            <Button size="sm">View All</Button>
          </Link>
        )}
      />

      {/* Loading / Empty State */}
      {loading ? (
        <p className="text-center text-gray-500">Loading properties...</p>
      ) : properties.length === 0 ? (
        <p className="text-center text-gray-500">No properties found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      )}
    </Section>
  );
}
