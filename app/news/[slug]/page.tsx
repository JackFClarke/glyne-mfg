import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const newsItems = {
  'updated-shop-hours': {
    date: "May 24, 2023",
    title: "Updated Shop Hours",
    content: "We've adjusted our operating hours to better serve our customers. The shop is now open Monday through Thursday, 6:30 am to 5:00 pm. This change allows us to optimize our production schedules and maintain our commitment to on-time delivery while ensuring our team members have a balanced work week."
  },
  'leadership-changes': {
    date: "December 22, 2022",
    title: "Leadership Changes Announcement",
    content: "Glyne Manufacturing is pleased to announce key changes to our leadership team, positioning us for continued growth and innovation. Our new Chief Operations Officer, Jane Doe, brings over 20 years of experience in aerospace manufacturing and will lead our efforts to further streamline our processes and enhance our capabilities."
  },
  'self-inspection-status': {
    date: "April 15, 2019",
    title: "Supplier Self-Inspection Status Achievement",
    content: "We're proud to announce that we've achieved Supplier Self-Inspection status, further enhancing our quality control processes. This achievement demonstrates our commitment to maintaining the highest standards of quality and reliability in our manufacturing processes, allowing us to serve our customers more efficiently."
  },
  'it-system-compliance': {
    date: "January 2, 2019",
    title: "IT System Compliance with NIST SP 800-171",
    content: "Glyne Manufacturing has successfully implemented IT system compliance with NIST SP 800-171, ensuring the highest level of data security for our clients. This compliance is crucial for our work with defense contractors and demonstrates our commitment to protecting sensitive information throughout our operations."
  }
}

export default function NewsArticle({ params }: { params: { slug: string } }) {
  const article = newsItems[params.slug as keyof typeof newsItems]

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div className="container py-12">
      <Button asChild variant="outline" className="mb-6">
        <Link href="/news">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-muted-foreground mb-8">{article.date}</p>
      <div className="prose max-w-none">
        <p>{article.content}</p>
      </div>
    </div>
  )
}

