"use client";

import Section from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTAHome = () => {
  return (
    <Section>
      <div className="relative bg-black text-white overflow-hidden py-20 px-6">
        {/* Background spherical gradient */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="relative w-[800px] h-[800px] bg-white opacity-10 blur-[100px] rounded-full"></div>
          <span className="absolute text-[200px] font-bold opacity-10 select-none">
            ZENTRO
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column: Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Unlock Your Perfect Home Today with Zentro
            </h2>
          </div>

          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>

          {/* Right column: Subtitle + Buttons */}
          <div className="flex flex-col gap-4">
            <p className="tex-xs md:text-sm lg:text-lg text-gray-200 mb-4">
              Discover, buy, or rent premium properties effortlessly. Join thousands of happy clients finding their dream homes with confidence and ease.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link href={'/properties'}>
                <Button variant="default">Get Started</Button>
              </Link>
              <Link href={'/about'}>
                <Button className='text-black' variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTAHome;
