import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IndustriesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Industries We Serve</h1>
      
      <p className="text-lg mb-12">
        Glyne Manufacturing provides precision components and solutions for a variety of 
        industries, with a focus on aerospace and commercial/industrial applications. Our 
        expertise and quality standards ensure that we meet the unique requirements of each sector.
      </p>

      <div className="grid gap-12 md:grid-cols-2 mb-12">
        <Card>
          <CardHeader>
            <div className="relative h-64 mb-4">
              <Image
                src="/assets/aerospace2.jpg"
                alt="Aerospace Industry"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardTitle>Aerospace</CardTitle>
            <CardDescription>Precision components for flight safety and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We specialize in manufacturing critical components for the aerospace industry, 
              including flight safety control rods and welded assemblies for engine bearings. 
              Our AS9100D certification and rigorous quality control processes ensure that our 
              products meet the highest standards of the aerospace sector.
            </p>
            <h4 className="font-semibold mb-2">Inspection Equipment</h4>
            <ul className="list-disc list-inside mb-4">
              <li>Johnson Company indicating thread gauges</li>
              <li>Olympus 18&quot; rigid borescope with internal light source</li>
              <li>Olympus ultrasonic wall thickness tester with immersion tank transducer</li>
            </ul>
            <Button asChild>
              <Link href="/industries/aerospace">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="relative h-64 mb-4">
              <Image
                src="/assets/commercial5.jpg"
                alt="Commercial/Industrial"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardTitle>Commercial/Industrial</CardTitle>
            <CardDescription>Flexible manufacturing for diverse applications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our capabilities extend to a wide range of commercial and industrial applications. 
              We offer flexibility in production runs, from small batches to high-volume orders, 
              ensuring consistent quality and on-time delivery for all our clients.
            </p>
            <h4 className="font-semibold mb-2">Key Capabilities</h4>
            <ul className="list-disc list-inside mb-4">
              <li>Flexible production runs from less than a dozen to tens of thousands</li>
              <li>In-process inspection for large runs to meet blueprint specifications</li>
              <li>Just-in-time delivery options for efficient supply chain management</li>
            </ul>
            <Button asChild>
              <Link href="/industries/commercial-industrial">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/contact">
            Discuss Your Industry Needs <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

