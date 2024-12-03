import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const services = {
  'rotary-swaging': {
    title: "Rotary Swaging",
    image: "/assets/rotary-swaged-dies.jpg",
    description: "Precision tube forming with superior surface finish",
    content: "Our rotary swaging process allows for precise reduction and shaping of tubular components. With 10 swaging machines, we can handle diameters up to 3.00\" and create tapers up to 15\" in a single pass. This process is ideal for aerospace applications requiring tight tolerances and excellent surface finish."
  },
  'end-forming': {
    title: "End Forming",
    image: "/assets/endForming4.jpg",
    description: "Custom end shapes for specific applications",
    content: "Our end forming capabilities allow us to create custom end shapes on tubular components. With 3 different endformers, we can work with diameters ranging from 1/8\" to 3.00\". This versatility makes us an ideal partner for projects requiring unique end configurations in aerospace and industrial applications."
  },
  'machining': {
    title: "Machining",
    image: "/assets/machining-outside-of-tube.jpg",
    description: "Precision CNC machining and threading",
    content: "Our machining capabilities include CNC lathes, vertical machining centers, honing machines, and abrasive belt grinders. We can handle complex components with tight tolerances and superior finishes. Our expertise in machining complements our swaging and end forming services, allowing us to provide fully finished parts to our customers."
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="container py-12">
      <Button asChild variant="outline" className="mb-6">
        <Link href="/processes">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">{service.description}</h2>
          <div className="prose max-w-none">
            <p>{service.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

