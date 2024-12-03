import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const industries = {
  'aerospace': {
    title: "Aerospace",
    image: "/assets/aerospace2.jpg",
    description: "Precision components for flight safety and performance",
    content: "We specialize in manufacturing critical components for the aerospace industry, including flight safety control rods and welded assemblies for engine bearings. Our AS9100D certification and rigorous quality control processes ensure that our products meet the highest standards of the aerospace sector. With our advanced inspection equipment and expertise, we deliver components that are crucial for the safety and performance of aircraft systems."
  },
  'commercial-industrial': {
    title: "Commercial/Industrial",
    image: "/assets/commercial5.jpg",
    description: "Flexible manufacturing for diverse applications",
    content: "Our capabilities extend to a wide range of commercial and industrial applications. We offer flexibility in production runs, from small batches to high-volume orders, ensuring consistent quality and on-time delivery for all our clients. Our expertise in rotary swaging, end forming, and precision machining allows us to serve various industries, including automotive, medical, and energy sectors. We pride ourselves on our ability to adapt to unique project requirements and deliver custom solutions."
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries[params.slug as keyof typeof industries]

  if (!industry) {
    return <div>Industry not found</div>
  }

  return (
    <div className="container py-12">
      <Button asChild variant="outline" className="mb-6">
        <Link href="/industries">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Industries
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-6">{industry.title}</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Image
            src={industry.image}
            alt={industry.title}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">{industry.description}</h2>
          <div className="prose max-w-none">
            <p>{industry.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

