"use client"

import { Button } from "@/components/ui/button"

const CTAHome = () => {
  return (
    <section className="relative bg-primary text-white py-24 px-6 md:px-20 flex flex-col items-center justify-center text-center space-y-8 overflow-hidden rounded-lg">
      {/* Optional subtle background shape */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/90 -z-10"></div>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold leading-snug max-w-4xl">
        Your Dream Property is Just a Click Away
      </h2>

      {/* Supporting Text */}
      <p className="text-lg md:text-xl max-w-3xl text-white/90">
        Explore thousands of listings, connect with trusted agents, and make informed decisions with Zentro – your reliable real estate partner.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
          Browse Properties
        </Button>
        <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-primary">
          Contact an Agent
        </Button>
      </div>

      {/* Optional footer note */}
      <p className="text-sm text-white/70 mt-6 max-w-md">
        Join thousands of satisfied buyers, sellers, and renters who trust Zentro to find their perfect property.
      </p>
    </section>
  )
}

export default CTAHome
