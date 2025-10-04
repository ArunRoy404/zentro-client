'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Section from "@/components/Section/Section"
import { propertiesData } from "@/dummyData.jsx/properties"
import PropertyCard from "@/components/properties/PropertyCard"
import { useSession } from "next-auth/react"


export default function FeaturedProperties() {
  const data = useSession()

  console.log(data);
  return (
    <Section >
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
        <Link href="/properties">
          <Button variant="outline">View All</Button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {propertiesData.map((property) => (
          <PropertyCard key={property._id} property={property}/>
        ))}
      </div>
    </Section>
  )
}
