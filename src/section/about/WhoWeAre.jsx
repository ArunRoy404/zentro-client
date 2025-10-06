import { Building2 } from "lucide-react";

export default function WhoWeAre() {
  return (
    <div className="p-8 bg-background">
      <div className="flex items-center gap-2 mb-4">
        <Building2 className="w-7 h-7 text-secondary" />
        <h2 className="text-3xl font-semibold">Who We Are</h2>
      </div>
      <p className="text-secondary leading-relaxed text-lg">
        Welcome to <strong>Zentro</strong>, a leading real estate
        platform dedicated to connecting people with their dream properties. Our
        mission is simple yet powerful — to simplify property buying, selling,
        and renting with trust, transparency, and technology. Founded by a
        passionate team of real estate experts and tech enthusiasts, we bring
        data-driven insights and personalized services together to make property
        decisions smarter and easier.
      </p>
    </div>
  );
}
