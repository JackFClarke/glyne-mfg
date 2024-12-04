import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

const industries = {
  'aerospace': {
    title: "Aerospace",
    image: "/aerospace2.jpg",
    image2: "/aerospace-surface-measuring-equipment.jpg",
    image3: "/swaged-aerospace-safety-parts.jpg",
    image4: "/ultrasonic-tube-wall-measurement.jpg",
    description: "Precision components for flight safety and performance",
    content: "We specialize in manufacturing critical components for the aerospace industry, including flight safety control rods and welded assemblies for engine bearings. Our AS9100D certification and rigorous quality control processes ensure that our products meet the highest standards of the aerospace sector. With our advanced inspection equipment and expertise, we deliver components that are crucial for the safety and performance of aircraft systems."
  },
  'commercial-industrial': {
    title: "Commercial/Industrial",
    image: "/commercial5.jpg",
    image2: "/endForming4.jpg",
    image3: "/machining-outside-of-tube.jpg",
    image4: "/pipes3.jpg",
    description: "Flexible manufacturing for diverse applications",
    content: "As a small shop, Glyne Manufacturering Co., Inc. offers exceptional flexibility. We frequently do part runs of less than a dozen, but can also accommodate tens of thousands. Second shifts and weekends are added when needed. Our in-process inspection ensures that large runs of commercial product are to blueprint specifications.",
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries[params.slug as keyof typeof industries]

  if (!industry) {
    return <div>Industry not found</div>
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Button asChild variant="outline" className="mb-6 rounded-lg">
          <Link href="/industries">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Industries
          </Link>
        </Button>
        <Card className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <CardHeader className="bg-white p-6 border-b border-gray-200">
            <CardTitle className="text-2xl font-bold text-gray-800">{industry.title}</CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              {industry.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 ">
            <p className="text-gray-700">{industry.content}</p>
          </CardContent>
        </Card>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={industry.image}
              alt={`${industry.title} Image`}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={industry.image2}
              alt={`${industry.title} Image2`}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={industry.image3}
              alt={`${industry.title} Image3`}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={industry.image4}
              alt={`${industry.title} Image4`}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

