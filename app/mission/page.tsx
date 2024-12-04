import { ArrowRight, Target, Shield, Clock } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function MissionPage() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8">Our Mission</h1>
      
      <div className="bg-muted p-8 rounded-lg mb-12">
        <p className="text-xl mb-6">
          At Glyne Manufacturing, our mission is to deliver efficient manufacturing solutions 
          with a commitment to 100% parts to print and on-time delivery. We strive to exceed 
          our customers&apos; expectations by providing high-quality, precision-engineered components 
          for the aerospace and industrial sectors.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="flex flex-col items-center text-center">
          <Target className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Precision</h3>
          <p>
            We are committed to delivering components with the highest level of accuracy 
            and consistency.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Shield className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Quality</h3>
          <p>
            Our rigorous quality control processes ensure that every part meets or exceeds 
            industry standards.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Clock className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Reliability</h3>
          <p>
            We pride ourselves on consistent on-time delivery and dependable performance.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/about">
            Learn How We Deliver Quality <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

