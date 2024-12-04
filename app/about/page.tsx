import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { FC, ReactNode } from "react"

import { Button } from "@/components/ui/button"

// Define TypeScript interfaces for component props

// Props for SectionTitle component
interface SectionTitleProps {
  children: ReactNode
}

// Reusable Section Title Component with TypeScript
const SectionTitle: FC<SectionTitleProps> = ({ children }) => (
  <h2 className="text-3xl font-bold mb-6">{children}</h2>
)

// Props for CertificationCard component
interface CertificationCardProps {
  title: string
  description: string
}

// Reusable Certification Card Component with TypeScript
const CertificationCard: FC<CertificationCardProps> = ({ title, description }) => (
  <div className="bg-muted p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
)

export default function AboutPage() {
  return (
    <main className="py-12 px-4 max-w-7xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">About Glyne Manufacturing</h1>
      
      {/* Introduction Section */}
      <section className="grid gap-12 lg:grid-cols-2 items-center mb-12">
        <div>
          <p className="text-lg mb-6">
            Since 1966, Glyne Manufacturing has been at the forefront of precision manufacturing, 
            providing cutting-edge solutions for the aerospace and industrial sectors. Our commitment 
            to quality, innovation, and customer satisfaction has made us a trusted partner for 
            companies worldwide.
          </p>
          <p className="text-lg">
            With our state-of-the-art facilities and expert team, we specialize in rotary swaging, 
            end forming, and precision machining, delivering components that meet the highest 
            standards of quality and performance.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/cnn-lathe-for-secondary-operations.jpg"
            alt="Glyne Manufacturing Facility"
            layout="fill"
            className="object-cover"
            priority // Ensures the image loads quickly
          />
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="mb-12">
        <SectionTitle>Company Profile</SectionTitle>
        <div className="bg-muted p-8 rounded-lg space-y-4">
          <p>
            Established in 1966, Glyne&apos;s early customers were a variety of commercial, medical, and aircraft suppliers. 
            The company focused heavily on profile tubes for aircraft integrated fuel tank systems, and control rods for push-pull systems.
          </p>
          <p>
            As Glyne grew into the 1980&apos;s and 1990&apos;s, the company became involved in the growing bicycle industry, 
            providing all the swaged tubes for a major US manufacturer of high-end aluminum frames. By the early 2000&apos;s, 
            this commercial work began moving to Asia, following an established American trend towards outsourcing.
          </p>
          <p>
            With commercial work shrinking, Glyne made the decision to focus on aerospace and began machining tubes 
            that were already in our shop for swaging. Many of our customers welcomed our entry into CNC machining. 
            They had begun to focus on assemblies and wanted individual parts complete to print.
          </p>
          <p>
            This is the path we&apos;ve been on for the last 10 years, and it has been complemented by our adoption of 
            ISO management standards since 2008.
          </p>
          <p className="font-semibold">
            We are AS9100D certified.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-12">
        <SectionTitle>Our Certifications</SectionTitle>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CertificationCard 
            title="AS9100D" 
            description="Our AS9100D certification demonstrates our commitment to meeting the rigorous 
            quality standards of the aerospace industry."
          />
          <CertificationCard 
            title="ISO 9001:2015" 
            description="We maintain ISO 9001:2015 certification, ensuring consistent quality management 
            across all our operations."
          />
          <CertificationCard 
            title="Nadcap" 
            description="Our collaboration with Nadcap certified special processors allows us to provide 
            completely finished parts ready for assembly."
          />
        </div>
      </section>

      {/* Operating Hours Section */}
      <section className="mb-12">
        <SectionTitle>Operating Hours</SectionTitle>
        <p className="text-lg">
          The shop is now open Monday through Thursday, 6:30 am to 5:00 pm.
        </p>
      </section>

      {/* COVID-19 Update Section */}
      <section className="mb-12">
        <SectionTitle>COVID-19 Update</SectionTitle>
        <p className="text-lg">
          We continue to prioritize the health and safety of our employees and customers. 
          Our facility follows all recommended CDC guidelines, and we have implemented 
          enhanced cleaning and safety protocols.
        </p>
      </section>

      {/* Contact Button */}
      <div className="text-center">
        <Button asChild>
          <Link href="/contact" className="inline-flex items-center">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </main>
  )
}
