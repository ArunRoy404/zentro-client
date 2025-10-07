import { Button } from "@/components/ui/button";
import Section from "@/components/Section/Section";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AgentCTASection() {
  return (
    <Section bg="bg-primary" className="text-center py-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        Ready to Grow with Zentro?
      </h2>

      <p className="text-white/90 max-w-4xl text-center mx-auto mb-10 text-lg">
        Become part of a powerful network of agents and unlock new growth
        opportunities. With Zentro, you get the tools, visibility, and support
        you need to close more deals and build a stronger brand.
      </p>

      {/* Benefits List */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 text-left">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-secondary mt-1" />
          <p className="text-white/90 text-lg">
            Access to <span className="font-semibold">exclusive leads</span> and
            verified clients.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-secondary mt-1" />
          <p className="text-white/90 text-lg">
            Boost your <span className="font-semibold">brand visibility</span>{" "}
            with our platform.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-secondary mt-1" />
          <p className="text-white/90 text-lg">
            Manage listings easily with{" "}
            <span className="font-semibold">agent tools</span>.
          </p>
        </div>
      </div>

      {/*  CTA Button */}
      <div className="flex justify-center">
        <Button
          asChild
          size="lg"
          className="w-full max-w-sm bg-secondary hover:bg-secondary/90 text-white font-semibold px-10 py-5 text-lg inline-flex items-center justify-center gap-2 transition"
        >
          <Link href="/apply-agent">
            Apply Now <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
