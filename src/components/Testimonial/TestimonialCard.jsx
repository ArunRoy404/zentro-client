"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const TestimonialCard = ({ testimonial }) => {
    return (
        <Card className="rounded-none p-0 border shadow-none hover:shadow-md transition h-full">
            <CardContent className="p-6 flex flex-col gap-4">
                {/* Quote Icon */}
                <Quote className="h-6 w-6 text-primary opacity-70" />

                {/* Feedback */}
                <p className="text-gray-700 text-sm leading-relaxed">
                    {testimonial.feedback}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-4">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default TestimonialCard
