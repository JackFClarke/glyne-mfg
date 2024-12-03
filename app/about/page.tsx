import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className=" py-12">
      <h1 className="text-4xl font-bold mb-8">About Glyne Manufacturing</h1>
      
      <div className="grid gap-12 lg:grid-cols-2 items-center mb-12">
        <div>
          <p className="text-lg mb-6">
            Since 1966, Glyne Manufacturing has been at the forefront of precision manufacturing, 
            providing cutting-edge solutions for the aerospace and industrial sectors. Our commitment 
            to quality, innovation, and customer satisfaction has made us a trusted partner for 
            companies worldwide.
          </p>
          <p className="text-lg mb-6">
            With our state-of-the-art facilities and expert team, we specialize in rotary swaging, 
            end forming, and precision machining, delivering components that meet the highest 
            standards of quality and performance.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/cnn-lathe-for-secondary-operations.jpg"
            alt="Glyne Manufacturing Facility"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Company Profile</h2>
      <div className="bg-muted p-8 rounded-lg mb-12">
        <p className="mb-4">
          Established in 1966, Glyne&apos;s early customers were a variety of commercial, medical, and aircraft suppliers. 
          The company focused heavily on profile tubes for aircraft integrated fuel tank systems, and control rods for push-pull systems.
        </p>
        <p className="mb-4">
          As Glyne grew into the 1980&apos;s and 1990&apos;s the company became involved in the growing bicycle industry, 
          providing all the swaged tubes for a major US manufacturer of high end aluminum frames. By the early 2000&apos;s 
          this commercial work began moving to Asia, following an established American trend towards outsourcing.
        </p>
        <p className="mb-4">
          With commercial work shrinking, Glyne made the decision to focus on aerospace, and begin machining tubes 
          that were already in our shop for swaging. Many of our customers welcomed our entry into CNC machining. 
          They had begun to focus on assemblies and wanted individual parts complete to print.
        </p>
        <p className="mb-4">
          This is the path we&apos;ve been on for the last 10 years, and it has been complemented by our adoption of 
          ISO management standards since 2008.
        </p>
        <p className="font-semibold">
          We are AS9100D certified.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">Our Certifications</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">AS9100D</h3>
          <p className="mb-4">
            Our AS9100D certification demonstrates our commitment to meeting the rigorous 
            quality standards of the aerospace industry.
          </p>
        </div>
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">ISO 9001:2015</h3>
          <p className="mb-4">
            We maintain ISO 9001:2015 certification, ensuring consistent quality management 
            across all our operations.
          </p>
        </div>
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Nadcap</h3>
          <p className="mb-4">
            Our collaboration with Nadcap certified special processors allows us to provide 
            completely finished parts ready for assembly.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Operating Hours</h2>
      <p className="text-lg mb-12">
        The shop is now open Monday through Thursday, 6:30 am to 5:00 pm.
      </p>

      <h2 className="text-3xl font-bold mb-6">COVID-19 Update</h2>
      <p className="text-lg mb-6">
        We continue to prioritize the health and safety of our employees and customers. 
        Our facility follows all recommended CDC guidelines, and we have implemented 
        enhanced cleaning and safety protocols.
      </p>

      <Button asChild>
        <Link href="/contact">
          Contact Us <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}
