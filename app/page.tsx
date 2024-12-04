"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const carouselImages = [
  { src: "/hands3.jpg", alt: "Hands working on precision manufacturing" },
  { src: "/endforming-slider.jpg", alt: "End forming process" },
  { src: "/tops1.jpg", alt: "Precision manufactured tops" },
  { src: "/pipes3.jpg", alt: "Precision manufactured pipes" }
]

export default function Home() {
  // Initialize Embla Carousel with correct options
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }) // Removed invalid 'speed' option
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      // Event handler for slide selection
      const onSelect = () => {
        setCurrentIndex(emblaApi.selectedScrollSnap())
      }

      // Attach the event listener
      emblaApi.on('select', onSelect)

      // Start autoplay
      const autoplay = setInterval(() => {
        emblaApi.scrollNext()
      }, 5000) // Change slide every 5 seconds

      return () => {
        // Cleanup: Remove event listener and clear interval
        emblaApi.off('select', onSelect)
        clearInterval(autoplay)
      }
    }
  }, [emblaApi])

  return (
    <>
      <section className="relative w-full h-[600px] overflow-hidden rounded-lg">
        {/* Embla Carousel */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex h-[600px]">
            {carouselImages.map((image, index) => (
              <div className="embla__slide relative flex-none w-full h-full" key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  className="object-cover brightness-50"
                  priority={index === 0} // Only the first image has priority
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="embla__prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-md transition-all duration-200 ease-in-out z-10"
          onClick={scrollPrev}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="embla__next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-md transition-all duration-200 ease-in-out z-10"
          onClick={scrollNext}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Precision Manufacturing Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Specializing in rotary swaging, end forming, and precision machining for aerospace and industrial applications
            </p>
            <Button size="lg" variant={"secondary"} asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Other Sections */}
      <section className="py-16 container max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Cards */}
          <Card>
            <CardHeader>
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/custom-rotary-swaged-tubes.jpg"
                  alt="Rotary Swaging"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardTitle>Rotary Swaging</CardTitle>
              <CardDescription>
                Precision tube forming with superior surface finish and tight tolerances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/services/rotary-swaging"
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/endForming4.jpg"
                  alt="End Forming"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardTitle>End Forming</CardTitle>
              <CardDescription>
                Custom end shapes and configurations for specific applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/services/end-forming"
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/machining-outside-of-tube.jpg"
                  alt="Machining"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardTitle>Machining</CardTitle>
              <CardDescription>
                Precision CNC machining and threading for complex components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/services/machining"
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className=" max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Manufacturing Since 1966</h2>
              <p className="text-muted-foreground mb-8">
                With over 50 years of experience, Glyne Manufacturing has been providing precision manufacturing solutions to the aerospace and industrial sectors. Our commitment to quality and innovation has made us a trusted partner for companies worldwide.
              </p>
              <Button asChild>
                <Link href="/about">About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/hands3.jpg"
                alt="Manufacturing Excellence"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

