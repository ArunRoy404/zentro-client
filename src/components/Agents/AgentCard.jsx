"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const AgentCard = ({ agent }) => {
    return (
        <Card className="border-0 shadow-none transition h-full overflow-hidden p-0 rounded-none">
            {/* Image section */}
            <div className="relative w-full h-56">
                <Image
                    src={agent.photo}
                    alt={agent.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                />
                <span className="absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded">
                    ZENTRO
                </span>
            </div>

            {/* Content */}
            <CardContent className="p-0">
                {/* Name & Designation */}
                <h3 className="text-lg font-bold text-gray-900">{agent.name}</h3>
                <p className="text-sm text-gray-600">{agent.designation}</p>

                {/* Review */}
                <div className="mt-2">
                    <span className="text-xl font-bold text-primary">{agent.rating}</span>
                    <span className="text-sm text-gray-600"> / {agent.reviews} reviews</span>
                </div>

                {/* Contact Button */}
                <Button className="mt-4 w-full">Contact</Button>
            </CardContent>
        </Card>
    )
}

export default AgentCard
