import { Mail, Phone, MapPin } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className=" py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-lg mb-6">
            We&apos;re here to answer any questions you may have about our services. 
            Please feel free to reach out using the contact information below or 
            by filling out the form.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <span>380 East Main Street, Stratford, CT 06614</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-primary" />
              <span>203-375-4495</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-primary" />
              <a href="mailto:info@glynemfg.com" className="text-primary hover:underline">
                info@glynemfg.com
              </a>
            </div>
          </div>
          
          <div className="flex-grow">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.1594988639096!2d-73.1261346!3d41.1950748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e80c8b8e3d7beb%3A0x1f57b7f46f4a6c06!2s380%20E%20Main%20St%2C%20Stratford%2C%20CT%2006614!5e0!3m2!1sen!2sus!4v1653394016432!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <Input id="phone" name="phone" type="tel" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

