import AboutIntro from "@/components/about/AboutIntro";
import AboutMissionVision from "@/components/about/AboutMissionVision";
import Section from "@/components/Section/Section";

export default function AboutHeading() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-secondary">About</span> Our Company
        </h1>
        <p className="text-lg text-secondary">
          Building trust, connecting people, and creating opportunities in the
          world of real estate.
        </p>
      </div>
      <AboutIntro></AboutIntro>
      <AboutMissionVision></AboutMissionVision>
    </Section>
  );
}
