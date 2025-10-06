import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function OurStory() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6">
          <div className=" mx-auto text-center">
            <h1 className="text-2xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance">
              Building Dreams Into Reality
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are a premier real estate company dedicated to transforming the
              way people find, buy, and invest in properties.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="relative h-[400px] md:h-[600px] bg-muted overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Modern real estate building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the real estate
                  industry, we have grown from a small local agency to a trusted
                  name in property development and sales.
                </p>
                <p>
                  Our journey began with a simple belief: everyone deserves to
                  find their perfect space. Whether it's a cozy apartment, a
                  sprawling estate, or a commercial property, we're here to make
                  it happen.
                </p>
                <p>
                  Today, we pride ourselves on our commitment to excellence,
                  integrity, and personalized service that puts our clients
                  first.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] bg-muted">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
