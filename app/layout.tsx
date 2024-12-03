import { Layout } from "@/components/layout"
import { Inter } from "next/font/google"

import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Glyne Manufacturing Co., Inc.",
  description: "Precision manufacturing solutions for aerospace and industrial applications",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

