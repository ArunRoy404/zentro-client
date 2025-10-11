import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Ruler } from "lucide-react"



const PropertyCard = ({ property }) => {
    return (
        <div
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
                    {property.propertyCategory} · <Ruler className="w-4 h-4 text-gray-400" />{" "}
                    {property.propertyArea.value} {property.propertyArea.unit}
                </p>
            </div>

            

            {/* Bottom row: Button & Price */}
            <div className="flex items-center justify-between mt-2 md:mt-4">
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
    );
};

export default PropertyCard;