import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-soft-beige to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-rich-gold">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to upgrade your flooring? Contact me today for a free consultation and estimate. 
            I'm here to help with all your carpeting needs.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto mb-12 shadow-soft border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">(647) 886-0935</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-rich-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">buttraheel17@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-warm-brown rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Address</h4>
                  <p className="text-muted-foreground">285 North Service Road<br />Mississauga, Ontario</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Business Hours</h4>
                  <p className="text-muted-foreground">Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* <Card className="max-w-4xl mx-auto shadow-warm border-0">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">About Your Installer</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Michael Rodriguez</h4>
                    <p className="text-muted-foreground">Master Carpet Installer & Business Owner</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 20 years of experience in carpet installation and flooring solutions, 
                    I take pride in providing personalized service for every project. I specialize in both 
                    residential and commercial installations, ensuring every job meets the 
                    highest standards of quality and craftsmanship.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Certifications:</strong> Certified Flooring Installer (CFI), Commercial Carpet Installation
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Specialties:</strong> Luxury residential carpets, Commercial flooring, Stair runners
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Service Area</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    I exclusively serve Mississauga, Ontario and provide personalized, local service:
                  </p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• All Mississauga neighborhoods</li>
                    <li>• Residential homes & condos</li>
                    <li>• Local businesses & offices</li>
                    <li>• Quick response times across the city</li>
                    <li>• Deep knowledge of local building codes</li>
                  </ul>
                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-rich-gold/10 rounded-lg">
                    <p className="text-sm text-foreground font-medium">
                      Free estimates for all projects over $500. Emergency repair services available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}
        
        {/* Quote Form */}
        <Card id="quote-form" className="max-w-3xl mx-auto mt-12 shadow-warm border-0">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-foreground">Get Your Free Quote</h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you within 24 hours with a detailed estimate.
              </p>
            </div>
            
            <form className="space-y-6" data-netlify="true" name="contact-form" method="POST" action="/contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Enter your full name" 
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className="w-full"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Needed
                  </label>
                  <select 
                    id="service" 
                    className="w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="indoor">Indoor Carpeting</option>
                    <option value="outdoor">Outdoor Carpeting</option>
                    <option value="stairs">Stair Runners</option>
                    <option value="wall-to-wall">Wall-to-Wall Installation</option>
                    <option value="repair">Carpet Repair</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                  Project Address
                </label>
                <Input 
                  id="address" 
                  placeholder="Street address, City, State, ZIP" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <Textarea 
                  id="details" 
                  placeholder="Please describe your project, including room dimensions if known, carpet type preferences, timeline, and any specific requirements..."
                  className="w-full min-h-32"
                  rows={5}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Timeline
                  </label>
                  <select 
                    id="timeline" 
                    className="w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2weeks">1-2 weeks</option>
                    <option value="1month">Within 1 month</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                    Estimated Budget
                  </label>
                  <select 
                    id="budget" 
                    className="w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-3000">$1,000 - $3,000</option>
                    <option value="3000-5000">$3,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="over-10000">Over $10,000</option>
                  </select>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button variant="hero" size="lg" className="w-full md:w-auto px-12 py-4 text-lg">
                  Send Quote Request
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  I'll review your request and contact you within 24 hours with a detailed quote.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};