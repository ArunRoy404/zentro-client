"use client";

import AlertTable from "@/components/Alert/AlertTable";
import Spinner from "@/components/ui/Spinner";
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

  if (isLoading) return <div className="w-full h-full flex items-center justify-center" > <Spinner size="10" /></div>
  if (isError) return <AlertTable message={'Error fetching properties'} label={'Properties'} />

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
