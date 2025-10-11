"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import PropertyInfo from "@/section/PropertyDetails/PropertyInfo";
import PropertyFeatures from "@/section/PropertyDetails/PropertyFeatures";
import PropertyActions from "@/section/PropertyDetails/PropertyActions";
import PropertyUserCard from "@/section/PropertyDetails/PropertyUserCard";
import PropertyAgentCard from "@/section/PropertyDetails/PropertyAgentCard";
import Section from "@/components/Section/Section";
import PropertyDescription from "@/section/PropertyDetails/PropertyDescription";

export default function PropertyDetails() {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/v1/property/get-single-property/${id}`
        );
        const data = await res.json();
        if (data.success) setPropertyData(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProperty();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="animate-spin w-8 h-8 text-[var(--primary)]" />
      </div>
    );

  if (!propertyData)
    return (
      <div className="text-center text-red-500 py-10">Property not found!</div>
    );

  const { property, userInfo, agentInfo } = propertyData;

  return (
    <Section>
      <div className="pt-14 lg:pt-0 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-full overflow-hidden border border-[var(--shad)">
          <Image
            src={property.images}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Property Info */}
        <div className="flex flex-col justify-between">
          <PropertyInfo property={property} />
          <PropertyFeatures features={property.propertyFeatures} />
          <PropertyActions />
        </div>
      </div>

      <div className="mt-10">
        <PropertyDescription
          description={property.description}
        ></PropertyDescription>
      </div>

      <hr className="my-10 border-[var(--shad)]" />

      {/* Agent & User Info */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PropertyUserCard user={userInfo} />
        <PropertyAgentCard agent={agentInfo} />
      </div>
    </Section>
  );
}
