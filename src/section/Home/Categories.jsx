"use client"

import CategoriesCard from "@/components/Categories/CategoriesCard"
import Section from "@/components/Section/Section"
import SectionHeading from "@/components/shared/SectionHeading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ShoppingBag, Building2, Crown } from "lucide-react"
import Link from "next/link"

const categories = [
    {
        label: "Rent",
        description: "Find homes and apartments for rent",
        icon: Home,
        link: "/properties",
    },
    {
        label: "Buy",
        description: "Browse properties available to buy",
        icon: ShoppingBag,
        link: "/properties",
    },
    {
        label: "Commercial",
        description: "Offices, shops, and workspaces",
        icon: Building2,
        link: "/properties",
    },
    {
        label: "Luxury",
        description: "Premium estates and villas",
        icon: Crown,
        link: "/properties",
    },
]

const Categories = () => {
    return (
        <Section bg={'bg-gray-50'}>
            {/* heading  */}
            <SectionHeading
                title={'Featured Categories'}
                subtitle={` Choose from a variety of property types — whether you’re looking
                        to rent, buy, or invest in commercial and luxury spaces.`}
                Button={() => {
                    return (
                        <Link href="/properties">
                            <Button size={'sm'}>View All</Button>
                        </Link>
                    )
                }}
            />


            {/* Category grid */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <CategoriesCard
                        key={category.label}
                        category={category}
                    />
                ))}
            </div>
        
        </Section>
    )
}

export default Categories
