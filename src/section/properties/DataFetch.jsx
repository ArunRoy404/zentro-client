"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function DataFetch({
  search,
  location,
  minPrice,
  maxPrice,
  children,
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axios.get(
        "https://zentro-server.vercel.app/api/v1/property/get-all-property"
      );
      return res.data.data;
    },
  });

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (isError)
    return <div className="text-center py-20">Error fetching properties.</div>;

  const filtered = data.filter((property) => {
    const matchesSearch = property.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesLocation =
      property.location.city.toLowerCase().includes(location.toLowerCase()) ||
      property.location.state.toLowerCase().includes(location.toLowerCase());
    const matchesMin = minPrice ? property.price >= parseInt(minPrice) : true;
    const matchesMax = maxPrice ? property.price <= parseInt(maxPrice) : true;

    return matchesSearch && matchesLocation && matchesMin && matchesMax;
  });

  return children(filtered);
}
