import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex items-center justify-between lg:px-8">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                <div className="bg-gray-900">
                  <Link href="/" className="flex items-center space-x-2">
                    <Image src="/Glyne_logo.png" alt="Glyne Manufacturing" width={200} height={50} style={{ height: 'auto' }} />
                  </Link>
                </div>
                <Link href="/about">About</Link>
                <Link href="/mission">Our Mission</Link>
                <Link href="/services/rotary-swaging">Rotary Swaging</Link>
                <Link href="/services/end-forming">End Forming</Link>
                <Link href="/services/machining">Machining</Link>
                <Link href="/industries">Industries</Link>
                <Link href="/news">News</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/terms">Terms</Link>
                <a href="/Glyne-AS9100D-2021.pdf" target="_blank" rel="noopener noreferrer">AS9100D Certificate</a>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center justify-between">
            <Link href="/" className="hidden md:flex">
              <div className="bg-gray-900 overflow-hidden p-8" style={{ clipPath: "ellipse(300px 150px at 0% 50%)" }}>
                <Image src="/Glyne_logo.png" alt="Glyne Manufacturing" width={250} height={100} style={{ height: 'auto' }} />
              </div>
            </Link>
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px]">
                      <Link href="/services/rotary-swaging" className="group grid grid-cols-4 items-center justify-center gap-4 p-3 hover:bg-muted rounded-lg">
                        <Image
                          src="/custom-rotary-swaged-tubes.jpg"
                          alt="Rotary Swaging"
                          width={100}
                          height={100}
                          className="rounded-md object-cover"
                        />
                        <div className="col-span-3">
                          <div className="text-sm font-medium mb-1">Rotary Swaging</div>
                          <p className="text-sm text-muted-foreground">Precision tube forming with superior surface finish</p>
                        </div>
                      </Link>
                      <Link href="/services/end-forming" className="group grid grid-cols-4 items-center justify-center gap-4 p-3 hover:bg-muted rounded-lg">
                        <Image
                          src="/endForming4.jpg"
                          alt="End Forming"
                          width={100}
                          height={100}
                          className="rounded-md object-cover"
                        />
                        <div className="col-span-3">
                          <div className="text-sm font-medium mb-1">End Forming</div>
                          <p className="text-sm text-muted-foreground">Custom end shapes for specific applications</p>
                        </div>
                      </Link>
                      <Link href="/services/machining" className="group grid grid-cols-4 items-center justify-center gap-4 p-3 hover:bg-muted rounded-lg">
                        <Image
                          src="/machining-outside-of-tube.jpg"
                          alt="Machining"
                          width={100}
                          height={100}
                          className="rounded-md object-cover"
                        />
                        <div className="col-span-3">
                          <div className="text-sm font-medium mb-1">Machining</div>
                          <p className="text-sm text-muted-foreground">Precision CNC machining and threading</p>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/industries" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Industries
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/mission" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Our Mission
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/news" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      News
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Resources <ChevronDown className="ml-1 h-3 w-3" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link href="/terms">Terms & Conditions</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="/Glyne-AS9100D-2021.pdf" target="_blank" rel="noopener noreferrer">
                          AS9100D Certificate
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="justify-center items-center px-4 sm:px-6 lg:px-8 py-8 ">{children}</main>
      <footer className="border-t">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* <div className="container py-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4"> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              380 East Main Street<br />
              Stratford, CT 06614<br />
              Phone: (203) 375-4495<br />
              Fax: (203) 375-4496<br />
              Email: info@glynemfg.com
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services/rotary-swaging">Rotary Swaging</Link></li>
              <li><Link href="/services/end-forming">End Forming</Link></li>
              <li><Link href="/services/machining">Machining</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/industries/aerospace">Aerospace</Link></li>
              <li><Link href="/industries/commercial-industrial">Commercial/Industrial</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <p className="text-sm text-muted-foreground">
              Monday - Thursday<br />
              6:30 AM - 5:00 PM
            </p>
          </div>
        </div>
        <div className="border-t">
          <div className="mx-auto py-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Glyne Manufacturing Co., Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

