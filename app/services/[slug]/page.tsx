import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would typically come from a database or API
const services = {
  'rotary-swaging': {
    title: "Rotary Swaging",
    image: "/rotary-swaged-dies.jpg",
    description: "Precision tube forming with superior surface finish",
    content: "Our rotary swaging process allows for precise reduction and shaping of tubular components. With 10 swaging machines, we can handle diameters up to 3.00\" and create tapers up to 15\" in a single pass. This process is ideal for aerospace applications requiring tight tolerances and excellent surface finish.",
    features: [
      "Diameter reduction up to 3.00\"",
      "Tapers up to 15\" in a single pass",
      "Superior surface finish",
      "Tight tolerances for aerospace applications",
      "High-precision tube forming"
    ],
    applications: [
      "Aerospace components",
      "Medical devices",
      "Automotive parts",
      "Industrial equipment",
      "Sporting goods"
    ]
  },
  'end-forming': {
    title: "End Forming",
    image: "/endForming4.jpg",
    description: "Custom end shapes for specific applications",
    content: "Our end forming capabilities allow us to create custom end shapes on tubular components. With 3 different endformers, we can work with diameters ranging from 1/8\" to 3.00\". This versatility makes us an ideal partner for projects requiring unique end configurations in aerospace and industrial applications.",
    features: [
      "Custom end shapes",
      "Diameters from 1/8\" to 3.00\"",
      "3 specialized endformers",
      "Versatile applications",
      "Precise and consistent results"
    ],
    applications: [
      "Hydraulic fittings",
      "Fuel system components",
      "Structural tubing",
      "HVAC systems",
      "Plumbing fixtures"
    ]
  },
  'machining': {
    title: "Machining",
    image: "/machining-outside-of-tube.jpg",
    description: "Precision CNC machining and threading",
    content: "Our machining capabilities include CNC lathes, vertical machining centers, honing machines, and abrasive belt grinders. We can handle complex components with tight tolerances and superior finishes. Our expertise in machining complements our swaging and end forming services, allowing us to provide fully finished parts to our customers.",
    features: [
      "CNC lathes and vertical machining centers",
      "Honing machines for precise internal finishes",
      "Abrasive belt grinders for external finishing",
      "Tight tolerances on complex components",
      "Complementary to swaging and end forming"
    ],
    applications: [
      "Aerospace structural components",
      "Precision mechanical parts",
      "Custom fittings and connectors",
      "Industrial equipment components",
      "Prototyping and small-batch production"
    ]
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    return <div>Service not found</div>
  }

  return (
<div className="py-12 px-20 flex flex-col items-start"> {/* Changed items-center to items-start */}

{/* Flex Container for Card and Tabs */}
<div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full max-w-7xl px-4">
  
  {/* Card Container */}
  <div className="w-full lg:w-2/3 flex justify-center">
    <Card className="max-w-lg w-full shadow-xl self-stretch"> {/* Added self-stretch */}
      <CardHeader className="p-0">
        <div className="relative h-96 w-full overflow-hidden rounded-t-lg">
          <Image
            src={service.image}
            alt={service.title}
            layout="fill"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="mb-2">{service.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{service.content}</p>
      </CardContent>
    </Card>
  </div>

  {/* Tabs Container */}
  <div className="w-full max-w-lg lg:w-1/3 flex flex-col items-start self-stretch"> {/* Added self-stretch */}
    <Tabs defaultValue="features" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="applications">Applications</TabsTrigger>
      </TabsList>
      <TabsContent value="features">
        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
            <CardDescription>
              What sets our {service.title.toLowerCase()} process apart
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="applications">
        <Card>
          <CardHeader>
            <CardTitle>Common Applications</CardTitle>
            <CardDescription>
              Industries and products that benefit from our {service.title.toLowerCase()} service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2">
              {service.applications.map((application, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  {application}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    <div className="mt-8 w-full">
      <Button asChild size="lg" className="w-full">
        <Link href="/contact">Request a Quote</Link>
      </Button>
    </div>
  </div>

</div>
</div>



  )
}

