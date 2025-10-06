import Link from "next/link"
import { Button } from "@/components/ui/button"
import Section from "@/components/Section/Section"
import { propertiesData } from "@/dummyData/properties"
import PropertyCard from "@/components/properties/PropertyCard"
import SectionHeading from "@/components/shared/SectionHeading"


export default function FeaturedProperties() {

  return (
    <Section >

      {/* heading  */}
      <SectionHeading
        title={'Featured Properties'}
        Button={() => {
          return (
            <Link href="/properties">
              <Button size={'sm'}>View All</Button>
            </Link>
          )
        }}
      />

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {propertiesData.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </Section>
  )
}
