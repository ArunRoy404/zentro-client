import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Section from "@/components/Section/Section"
import { MapPin, Ruler } from "lucide-react"


const properties = [
  {
    _id: "1",
    title: "Luxury Villa with Ocean View",
    propertyType: "house",
    propertyArea: { value: 3500, unit: "sq ft" },
    images:
      "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Fckneq50s1jp1mwe69wb8t1n723i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
    location: {
      city: "Cox’s Bazar",
      state: "Chattogram",
    },
    price: 48000000,
  },
  {
    _id: "2",
    title: "Modern Apartment in City Center",
    propertyType: "apartment",
    propertyArea: { value: 1500, unit: "sq ft" },
    images:
      "https://f.hubspotusercontent20.net/hubfs/7324323/LuxuryRealEstateBranding.jpg",
    location: {
      city: "Dhaka",
      state: "Dhaka",
    },
    price: 15000000,
  },
  {
    _id: "3",
    title: "Spacious Commercial Space",
    propertyType: "commercial",
    propertyArea: { value: 5000, unit: "sq ft" },
    images:
      "https://www.realestate.com.au/news/wp-content/uploads/2025/07/capi_da6ce2a6a0a7fa9ebbc9a1d548e6245b_e7076b55a4689bf998a5ea8fbad4529d.jpeg",
    location: {
      city: "Sylhet",
      state: "Sylhet",
    },
    price: 30000000,
  },
  {
    _id: "4",
    title: "Luxury Villa with Ocean View",
    propertyType: "house",
    propertyArea: { value: 3500, unit: "sq ft" },
    images:
      "https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Fckneq50s1jp1mwe69wb8t1n723i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png",
    location: {
      city: "Cox’s Bazar",
      state: "Chattogram",
    },
    price: 48000000,
  },
  {
    _id: "5",
    title: "Modern Apartment in City Center",
    propertyType: "apartment",
    propertyArea: { value: 1500, unit: "sq ft" },
    images:
      "https://f.hubspotusercontent20.net/hubfs/7324323/LuxuryRealEstateBranding.jpg",
    location: {
      city: "Dhaka",
      state: "Dhaka",
    },
    price: 15000000,
  },
  {
    _id: "6",
    title: "Spacious Commercial Space",
    propertyType: "commercial",
    propertyArea: { value: 5000, unit: "sq ft" },
    images:
      "https://www.realestate.com.au/news/wp-content/uploads/2025/07/capi_da6ce2a6a0a7fa9ebbc9a1d548e6245b_e7076b55a4689bf998a5ea8fbad4529d.jpeg",
    location: {
      city: "Sylhet",
      state: "Sylhet",
    },
    price: 30000000,
  },
]

export default function FeaturedProperties() {
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
        {properties.map((property) => (

          <div
            key={property._id}
            className="group overflow-hidden transition"
          >
            {/* Image */}
            <div className="relative h-60 w-full">
              <Image
                src={property.images}
                alt={property.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Info */}
            <div className="mt-4 space-y-1 ">
              <h3 className="text-lg font-semibold">{property.title}</h3>

              {/* Location with icon */}
              <p className="flex items-center text-sm text-gray-500 gap-1">
                <MapPin className="w-4 h-4 text-gray-400" /> {property.location.city},{" "}
                {property.location.state}
              </p>

              {/* Property Type + Area with icon */}
              <p className="flex items-center text-sm text-gray-600 gap-1 capitalize">
                {property.propertyType} · <Ruler className="w-4 h-4 text-gray-400" />{" "}
                {property.propertyArea.value} {property.propertyArea.unit}
              </p>
            </div>

            {/* Bottom row: Button & Price */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-primary font-bold text-xl flex items-center gap-1">
                $ {property.price.toLocaleString()}
              </p>
              <Link href={`/properties/${property._id}`}>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
