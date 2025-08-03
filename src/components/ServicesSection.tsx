import { Card, CardContent } from "@/components/ui/card";
import { Home, Footprints, TreePine, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Indoor Carpeting",
    description: "Premium carpet installation for bedrooms, living rooms, and all interior spaces with expert craftsmanship."
  },
  {
    icon: TreePine,
    title: "Outdoor Carpeting", 
    description: "Weather-resistant outdoor carpeting for patios, decks, and exterior spaces that withstand the elements."
  },
  {
    icon: Footprints,
    title: "Stair Runners",
    description: "Custom stair runner installation with traditional and modern patterns to enhance your staircase."
  },
  {
    icon: Wrench,
    title: "Carpet Repairs",
    description: "Professional carpet repair services including patching, stretching, and restoration to extend carpet life."
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-soft-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-rich-gold">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I specialize in complete carpeting solutions from sales to installation. 
            With years of experience, I handle both indoor and outdoor projects with precision and care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-soft">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-rich-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-card p-8 rounded-lg shadow-soft border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Wall-to-Wall Installation</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete wall-to-wall carpet installation service for residential and commercial properties. 
              I handle everything from measurement to final cleanup, ensuring a perfect fit every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};