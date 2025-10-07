import Section from "@/components/Section/Section";
import { AlertCircle, CheckCircle, FileText, MapPin, User } from "lucide-react";

const requirements = [
  {
    icon: <User className="w-6 h-6 text-primary" />,
    title: "Basic Information",
    desc: "Your full name, email address, and office contact details.",
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Valid License Number",
    desc: "A valid and unique license number is required to verify your identity.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: "Office Address",
    desc: "Provide your official business address to complete the profile.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    title: "Professional Bio",
    desc: "Write a short bio about your experience and expertise as an agent.",
  },
];

export default function ApplyRequirementsSection() {
  return (
    <Section bg="bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-foreground mb-4">
        What You’ll Need to Apply
      </h2>
      <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
        Before applying as a Zentro Agent, make sure you have the following
        details ready. This helps us verify your profile quickly and get you
        started faster.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {requirements.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-6 bg-background/5 border border-border hover:translate-x-2 transition-transform duration-300"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-foreground/70">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/*  Important Note Section */}
      <div className="mt-16 p-6 bg-primary/10 border border-secondary text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <AlertCircle className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold text-primary">
            Important Before You Apply
          </h3>
        </div>
        <p className="text-foreground/80">
          You must first register on our website and become a{" "}
          <span className="font-semibold text-primary">basic member</span>. Once
          registered, you’ll be eligible to access and submit the Agent
          Application Form.
        </p>
      </div>
    </Section>
  );
}
