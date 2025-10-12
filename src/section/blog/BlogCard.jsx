"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Grid3x3, Bath, Palette } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function RoomCard({
  title,
  description,
  area,
  feature,
  color,
  imageUrl,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="">
      <div className="flex flex-col md:flex-row px-3 gap-2 py-0 my-0">
        {/* Text Content - 40% */}
        <div className="w-full md:w-2/5 p-4 md:p-8 flex flex-col justify-between rounded-2xl bg-gray-100">
          <div>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-6 md:mt-60 mt-10">
            <div className="flex items-center gap-2">
              <Grid3x3 className="w-5 h-5" />
              <span className="text-sm font-medium">{area}</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5" />
              <span className="text-sm font-medium">{feature}</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              <span className="text-sm font-medium">{color}</span>
            </div>
          </div>
        </div>

        {/* Image - 60% */}
        <div
          className="relative w-full md:w-3/5 h-64 md:h-auto group "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 60vw"
          />

          {/* Hover Overlay with Button */}
          <div
            className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 rounded-2xl ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="font-semibold"
              onClick={() => console.log(`View details for ${title}`)}
            >
              View Details <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
