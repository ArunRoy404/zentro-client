import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full container mx-auto px-6 transition-all duration-500">
      <div>
        <div className="py-10 grid grid-cols-1 lg:grid-cols-2  md:gap-4 lg:gap-12 items-center">

          {/* heading  */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight">
              Find Your Dream Home with <span className="text-neutral-600">Zentro</span>
            </h1>
          </div>


          {/* description  */}
          <div className="flex justify-end">
            <div className="lg:max-w-100">
              <p className="mt-6 text-lg text-neutral-600">
                Explore the best properties, connect with trusted agents, and discover the perfect place to live, rent, or invest.
              </p>

              {/* search bar   */}
              <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
                <Input
                  type="text"
                  placeholder="Enter location"
                  className="flex-1"
                />
                <Button className="bg-neutral-900 text-white hover:bg-neutral-800 w-full md:w-auto">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>


        {/* Hero image   */}
        <div className="relative w-full h-[calc(100dvh-64px-393px)] md:h-[calc(100dvh-68px-434px)] lg:h-[calc(100dvh-68px-345px)]  xl:h-[calc(100dvh-68px-296px)]">
          <Image
            src="/images/hero-image.jpg"
            alt="Real Estate City View"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-neutral-900/20" />
        </div>
      </div>
    </section>
  )
}
