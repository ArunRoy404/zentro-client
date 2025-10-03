import SearchBar from "@/components/ui/SearchBar"
import Image from "next/image"


export default function Hero() {
  return (
    <section className="w-full container mx-auto px-6 transition-all duration-500">
      <div>
        <div className="py-10 grid grid-cols-1 lg:grid-cols-2  md:gap-4 lg:gap-12 items-center">

          {/* heading  */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight">
              Find Your Dream Home with <span className="text-secondary">Zentro</span>
            </h1>
          </div>


          {/* description  */}
          <div className="flex justify-end">
            <div className="lg:max-w-100">
              <p className="mt-6 text-sm md:text-base font-semibold text-secondary">
                Explore the best properties, connect with trusted agents, and discover the perfect place to live, rent, or invest.
              </p>

              {/* search bar   */}
              <SearchBar />
            </div>
          </div>
        </div>


        {/* Hero image   */}
        <div className="relative w-full h-[calc(100dvh-64px-383px)] md:h-[calc(100dvh-68px-414px)] lg:h-[calc(100dvh-68px-335px)]  xl:h-[calc(100dvh-68px-266px)]">
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
