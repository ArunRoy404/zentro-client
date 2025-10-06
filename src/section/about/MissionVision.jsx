import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-8 bg-background">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-6 h-6 text-secondary" />
          <h2 className="text-2xl font-semibold">Our Mission</h2>
        </div>
        <p className="text-secondary leading-relaxed text-lg">
          Our mission is to revolutionize the real estate experience by creating
          a platform where trust meets technology. We aim to empower customers
          with real-time property data, enable agents with powerful tools, and
          give administrators complete control — all in one place.
        </p>
      </div>

      <div className="p-8 bg-background">
        <div className="flex items-center gap-2 mb-4">
          <Eye className="w-6 h-6 text-secondary" />
          <h2 className="text-2xl font-semibold">Our Vision</h2>
        </div>
        <p className="text-secondary leading-relaxed text-lg">
          We aim to become the most trusted and innovative real estate platform,
          bridging the gap between buyers and sellers with technology,
          expertise, and a human-first approach. Our vision is to redefine how
          people buy, sell, and manage real estate.
        </p>
      </div>
    </div>
  );
}
