import { Button } from "@/components/ui/button";

export default function AboutCTA() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-bold mb-6">
        Start Your Property Journey With Us
      </h2>
      <p className="text-lg text-secondary max-w-3xl mx-auto mb-8">
        Join thousands of happy customers, trusted agents, and successful
        property owners. Together, we’re redefining the future of real estate —
        one property at a time.
      </p>
      <Button>Explore Properties</Button>
    </div>
  );
}
