"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"
import Link from "next/link"

const agents = [
  {
    name: "John Doe",
    role: "Senior Real Estate Agent",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    phone: "+880 1234 567890",
    email: "john@example.com",
    link: "/agents/john-doe",
  },
  {
    name: "Jane Smith",
    role: "Luxury Property Specialist",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    phone: "+880 9876 543210",
    email: "jane@example.com",
    link: "/agents/jane-smith",
  },
  {
    name: "David Brown",
    role: "Commercial Property Expert",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    phone: "+880 1122 334455",
    email: "david@example.com",
    link: "/agents/david-brown",
  },
  {
    name: "Emily White",
    role: "Residential Consultant",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    phone: "+880 6677 889900",
    email: "emily@example.com",
    link: "/agents/emily-white",
  },
]

const FeaturedAgents = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our Featured Agents
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Our team of professional agents is ready to help you find your dream property.
          </p>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <Link key={agent.name} href={agent.link}>
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 rounded-xl h-full">
                <CardContent className="flex flex-col items-center text-center h-full">
                  {/* Photo */}
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="h-24 w-24 rounded-full mb-4 object-cover"
                  />

                  {/* Name & Role */}
                  <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
                  <p className="text-sm text-gray-600">{agent.role}</p>

                  {/* Contact Info */}
                  <div className="mt-4 flex flex-col space-y-1">
                    <p className="flex items-center text-sm text-gray-700">
                      <User className="mr-2 h-4 w-4 text-primary" />
                      {agent.phone}
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                      <User className="mr-2 h-4 w-4 text-primary" />
                      {agent.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedAgents
