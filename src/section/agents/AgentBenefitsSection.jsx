import { Award, Users, TrendingUp, Shield } from "lucide-react";
import Section from "@/components/Section/Section";

const benefits = [
  {
    icon: <Award className="w-10 h-10 text-secondary" />,
    title: "Verified Professional Status",
    desc: "Showcase your expertise with a verified badge and attract more clients.",
  },
  {
    icon: <Users className="w-10 h-10 text-secondary" />,
    title: "Exclusive Client Leads",
    desc: "Get direct leads from clients looking for trusted agents on Zentro.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-secondary" />,
    title: "Growth & Visibility",
    desc: "Boost your reach with our marketing tools and platform exposure.",
  },
  {
    icon: <Shield className="w-10 h-10 text-secondary" />,
    title: "Secure & Reliable Platform",
    desc: "Work in a trusted ecosystem with secure payments and verified clients.",
  },
];

export default function AgentBenefitsSection() {
  return (
    <Section>
      <h2 className="text-3xl font-bold text-center text-foreground mb-4">
        Why Become a Zentro Agent?
      </h2>
      <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
        Zentro empowers agents with the right tools, visibility, and client
        connections to help them succeed in today’s competitive property market.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="p-6 text-center bg-background/5 border border-border hover:translate-y-2 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">{benefit.icon}</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {benefit.title}
            </h3>
            <p className="text-foreground/70">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
