import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProcessesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Our Processes & Solutions</h1>
      
      <p className="text-lg mb-12">
        At Glyne Manufacturing, we offer a range of precision manufacturing processes 
        to meet the diverse needs of the aerospace and industrial sectors. Our advanced 
        capabilities ensure high-quality components with superior finish and tight tolerances.
      </p>

      <div className="grid gap-12 mb-12">
        <Card>
          <CardHeader>
            <div className="relative h-64 mb-4">
              <Image
                src="/assets/rotary-swaged-dies.jpg"
                alt="Rotary Swaging Process"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardTitle>Rotary Swaging</CardTitle>
            <CardDescription>Precision tube forming with superior surface finish</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our rotary swaging process allows for precise reduction and shaping of tubular 
              components. With 10 swaging machines, we can handle diameters up to 3.00" and 
              create tapers up to 15" in a single pass.
            </p>
            <Button asChild>
              <Link href="/processes/rotary-swaging">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="relative h-64 mb-4">
              <Image
                src="/assets/endForming4.jpg"
                alt="End Forming Process"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardTitle>End Forming</CardTitle>
            <CardDescription>Custom end shapes for specific applications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our end forming capabilities allow us to create custom end shapes on tubular 
              components. With 3 different endformers, we can work with diameters ranging 
              from 1/8" to 3.00".
            </p>
            <Button asChild>
              <Link href="/processes/end-forming">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="relative h-64 mb-4">
              <Image
                src="/assets/machining-outside-of-tube.jpg"
                alt="Machining Process"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardTitle>Machining</CardTitle>
            <CardDescription>Precision CNC machining and threading</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our machining capabilities include CNC lathes, vertical machining centers, 
              honing machines, and abrasive belt grinders. We can handle complex components 
              with tight tolerances and superior finishes.
            </p>
            <Button asChild>
              <Link href="/processes/machining">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/contact">
            Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

