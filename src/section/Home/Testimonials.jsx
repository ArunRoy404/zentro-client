"use client"

import Section from "@/components/Section/Section"
import SectionHeading from "@/components/shared/SectionHeading"
import TestimonialContainer from "@/components/Testimonial/TestimonialContainer"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"


const testimonials = [
    {
        name: "Sophia Johnson",
        role: "Home Buyer",
        feedback:
            "Zentro made finding my dream home a seamless experience. The agents were attentive, professional, and truly cared about my needs.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Ethan Smith",
        role: "Property Investor",
        feedback:
            "The platform is clean and easy to use. I found multiple investment opportunities quickly and with great detail on each property.",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
        name: "Isabella Martinez",
        role: "Luxury Buyer",
        feedback:
            "Zentro exceeded my expectations with their premium listings. The entire process was smooth and stress-free.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Liam Brown",
        role: "Commercial Client",
        feedback:
            "The best platform for commercial properties. I was able to secure an office space within a week. Highly recommended.",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
        name: "Ava Wilson",
        role: "Renter",
        feedback:
            "Renting with Zentro was straightforward and transparent. I found a beautiful apartment that matched all my preferences.",
        avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    },
    {
        name: "Noah Davis",
        role: "Seller",
        feedback:
            "Thanks to Zentro, I sold my property faster than I imagined. The visibility and support were outstanding.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
]

const Testimonials = () => {
    const swiperRef = useRef(null)

    const handleSlideChange = direction => {
        if (!swiperRef.current) return

        if (direction === 'next') {
            swiperRef.current.slideNext()
        } else {
            swiperRef.current.slidePrev()
        }
    }



    return (
        <Section bg={'bg-gray-50'}>
            <div>
                {/* heading  */}
                <SectionHeading
                    title={'What Our Clients Say'}
                    subtitle={`Trusted by buyers, sellers, and renters across the country`}
                    Button={() => {
                        return (
                            <div className="space-x-2">
                                <Button
                                    onClick={() => handleSlideChange('prev')}
                                    variant={'outline'} size={'icon'}>
                                    <ChevronLeft />
                                </Button>

                                <Button
                                    onClick={() => handleSlideChange('next')}
                                    variant={'outline'} size={'icon'}>
                                    <ChevronRight />
                                </Button>
                            </div>
                        )
                    }}
                />

                {/* Testimonials  */}
                <TestimonialContainer swiperRef={swiperRef} data={testimonials} />
            </div>
        </Section>
    )
}

export default Testimonials
