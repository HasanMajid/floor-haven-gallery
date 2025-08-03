import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-soft-beige to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-rich-gold">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to upgrade your flooring? Contact us today for a free consultation and estimate. 
            Our experienced team is here to help with all your carpeting needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center shadow-soft border-0">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Phone</h3>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-soft border-0">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-rich-gold rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Email</h3>
              <p className="text-muted-foreground">info@premiumcarpets.com</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-soft border-0">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-warm-brown rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Address</h3>
              <p className="text-muted-foreground">123 Carpet Street<br />Floortown, ST 12345</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-soft border-0">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Hours</h3>
              <p className="text-muted-foreground">Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="max-w-4xl mx-auto shadow-warm border-0">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Meet Our Expert</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Michael Rodriguez</h4>
                    <p className="text-muted-foreground">Master Carpet Installer & Owner</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 20 years of experience in carpet installation and flooring solutions, 
                    Michael leads our team of certified professionals. He specializes in both 
                    residential and commercial projects, ensuring every installation meets the 
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
                <h3 className="text-2xl font-bold mb-6 text-foreground">Service Areas</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We proudly serve the greater metropolitan area and surrounding communities:
                  </p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Downtown & Central District</li>
                    <li>• Residential Neighborhoods</li>
                    <li>• Commercial Business Parks</li>
                    <li>• Suburban Communities</li>
                    <li>• Within 50 miles of our location</li>
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
        </Card>
      </div>
    </section>
  );
};