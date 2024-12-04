import Link from "next/link"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8">Our Processes &amp; Solutions</h1>
      
      <p className="text-lg mb-12">
        At Glyne Manufacturing, we offer a range of precision manufacturing processes 
        to meet the diverse needs of the aerospace and industrial sectors. Our advanced 
        capabilities ensure high-quality components with superior finish and tight tolerances.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Rotary Swaging</CardTitle>
            <CardDescription>Precision tube forming with superior surface finish</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our rotary swaging process allows for precise reduction and shaping of tubular 
              components. With 10 swaging machines, we can handle diameters up to 3.00&quot; and 
              create tapers up to 15&quot; in a single pass.
            </p>
            <Button asChild>
              <Link href="/services/rotary-swaging">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>End Forming</CardTitle>
            <CardDescription>Custom end shapes for specific applications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our end forming capabilities allow us to create custom end shapes on tubular 
              components. With 3 different endformers, we can work with diameters ranging 
              from 1/8&quot; to 3.00&quot;.
            </p>
            <Button asChild>
              <Link href="/services/end-forming">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
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
              <Link href="/services/machining">
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
