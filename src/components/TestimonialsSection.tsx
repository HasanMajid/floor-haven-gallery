import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Mississauga, ON",
      rating: 5,
      text: "Michael did an incredible job installing carpet in our living room and stairs. His attention to detail is amazing and he cleaned up perfectly after the job. Highly recommend!"
    },
    {
      name: "David Chen", 
      location: "Mississauga, ON",
      rating: 5,
      text: "Professional, punctual, and affordable. Michael helped us choose the perfect carpet for our home office and the installation was flawless. Will definitely call him again."
    },
    {
      name: "Maria Santos",
      location: "Mississauga, ON", 
      rating: 5,
      text: "We needed carpet repair after water damage and Michael saved us thousands compared to full replacement. His expertise in carpet restoration is outstanding."
    },
    {
      name: "Robert Taylor",
      location: "Mississauga, ON",
      rating: 5,
      text: "Michael installed beautiful stair runners in our townhouse. He's honest, reliable, and his work quality is exceptional. Couldn't be happier with the results!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Mississauga <span className="text-rich-gold">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what your neighbors in Mississauga 
            are saying about our carpet installation and repair services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-rich-gold text-rich-gold" />
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center space-x-1 bg-rich-gold/10 px-6 py-3 rounded-full">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-rich-gold text-rich-gold" />
              ))}
            </div>
            <span className="ml-2 text-foreground font-semibold">5.0 Average Rating</span>
            <span className="text-muted-foreground">from 50+ local customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};