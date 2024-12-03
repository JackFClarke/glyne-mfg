import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <>
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/custom-rotary-swaged-tubes.jpg"
          alt="Precision Manufacturing"
          fill
          className="object-contain brightness-50"
          priority
        />
        <div className="container relative z-10 text-center max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Precision Manufacturing Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Specializing in rotary swaging, end forming, and precision machining for aerospace and industrial applications
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 container max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/custom-rotary-swaged-tubes.jpg"
                  alt="Rotary Swaging"
                  fill
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
        <div className="container max-w-7xl mx-auto">
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
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

