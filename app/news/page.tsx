import Link from "next/link"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const newsItems = [
  {
    date: "May 24, 2023",
    title: "Updated Shop Hours",
    excerpt: "We've adjusted our operating hours to better serve our customers. The shop is now open Monday through Thursday, 6:30 am to 5:00 pm.",
    link: "/news/updated-shop-hours"
  },
  {
    date: "December 22, 2022",
    title: "Leadership Changes Announcement",
    excerpt: "Glyne Manufacturing is pleased to announce key changes to our leadership team, positioning us for continued growth and innovation.",
    link: "/news/leadership-changes"
  },
  {
    date: "April 15, 2019",
    title: "Supplier Self-Inspection Status Achievement",
    excerpt: "We're proud to announce that we've achieved Supplier Self-Inspection status, further enhancing our quality control processes.",
    link: "/news/self-inspection-status"
  },
  {
    date: "January 2, 2019",
    title: "IT System Compliance with NIST SP 800-171",
    excerpt: "Glyne Manufacturing has successfully implemented IT system compliance with NIST SP 800-171, ensuring the highest level of data security for our clients.",
    link: "/news/it-system-compliance"
  }
]

export default function NewsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Latest News</h1>
      
      <div className="grid gap-8 md:grid-cols-2 mb-12">
        {newsItems.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{item.excerpt}</p>
              <Button asChild variant="outline">
                <Link href={item.link}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/contact">
            Subscribe to Our Newsletter <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

