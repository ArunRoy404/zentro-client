import { Shield, Briefcase, Search, ArrowRight } from "lucide-react";
import Section from "@/components/Section/Section";

export default function RolesSection() {
  const roles = [
    {
      icon: Shield,
      title: "Admin",
      desc: "Admins oversee platform operations, manage users, monitor activity, and ensure a secure, seamless experience for everyone.",
    },
    {
      icon: Briefcase,
      title: "Agent",
      desc: "Agents bring listings to life, connect buyers and sellers, and provide professional guidance through every transaction.",
    },
    {
      icon: Search,
      title: "Customer",
      desc: "Customers enjoy an easy, powerful property search experience — browse, filter, and connect with agents effortlessly.",
    },
  ];

  return (
    <Section bg="bg-gray-50">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-14">
        Who Uses Our Platform
      </h2>

      {/* Roles Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {roles.map((role, i) => (
          <div
            key={i}
            className="p-8 bg-background hover:bg-shad/10 transition-colors duration-300 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <role.icon className="w-7 h-7 text-secondary" />
              <h3 className="text-2xl font-semibold text-primary">
                {role.title}
              </h3>
            </div>
            <p className="text-secondary leading-relaxed">{role.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
