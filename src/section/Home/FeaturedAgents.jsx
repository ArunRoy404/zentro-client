import AgentCard from "@/components/Agents/AgentCard"
import Section from "@/components/Section/Section"
import SectionHeading from "@/components/shared/SectionHeading"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const agents = [
  {
    _id: 1,
    name: "John Doe",
    designation: "Luxury Specialist",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: "5.0",
    reviews: "120",
  },
  {
    _id: 2,
    name: "Jane Smith",
    designation: "Senior Agent",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: "4.9",
    reviews: "98",
  },
  {
    _id: 3,
    name: "John Doe",
    designation: "Luxury Specialist",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: "5.0",
    reviews: "120",
  },
  {
    _id: 4,
    name: "Jane Smith",
    designation: "Senior Agent",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: "4.9",
    reviews: "98",
  },
]

const FeaturedAgents = () => {
  return (
    <Section>
      {/* heading  */}
      <SectionHeading
        title={'Expert Agents'}
        subtitle={` Our team of professional agents is ready to help you find your dream property.`}
        Button={() => {
          return (
            <Link href="/agents">
              <Button size={'sm'}>View All</Button>
            </Link>
          )
        }}
      />

      {/* Agent Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {agents.map((agent) => (
          <AgentCard key={agent._id} agent={agent} />
        ))}
      </div>
    </Section>
  )
}

export default FeaturedAgents
