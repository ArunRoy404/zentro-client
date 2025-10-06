import Section from "@/components/Section/Section";
import { Building2, Target, Eye } from "lucide-react";

export default function AboutHeading() {
  return (
    <Section>
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-secondary">About</span> Our Company
        </h1>
        <p className="text-lg text-secondary">
          Building trust, connecting people, and creating opportunities in the
          world of real estate.
        </p>
      </div>
      <div className="p-8 bg-background ">
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-7 h-7 text-secondary" />
          <h2 className="text-3xl font-semibold">Who We Are</h2>
        </div>
        <p className="text-secondary leading-relaxed text-lg">
          Welcome to <strong>Zentro</strong>, a leading real estate platform
          dedicated to connecting people with their dream properties. Our
          mission is simple yet powerful — to simplify property buying, selling,
          and renting with trust, transparency, and technology. Founded by a
          passionate team of real estate experts and tech enthusiasts, we bring
          data-driven insights and personalized services together to make
          property decisions smarter and easier.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-background">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-semibold">Our Mission</h2>
          </div>
          <p className="text-secondary leading-relaxed text-lg">
            Our mission is to revolutionize the real estate experience by
            creating a platform where trust meets technology. We aim to empower
            customers with real-time property data, enable agents with powerful
            tools, and give administrators complete control — all in one place.
          </p>
        </div>

        <div className="p-8 bg-background">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-semibold">Our Vision</h2>
          </div>
          <p className="text-secondary leading-relaxed text-lg">
            We aim to become the most trusted and innovative real estate
            platform, bridging the gap between buyers and sellers with
            technology, expertise, and a human-first approach. Our vision is to
            redefine how people buy, sell, and manage real estate.
          </p>
        </div>
      </div>
    </Section>
  );
}
