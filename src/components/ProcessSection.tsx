import { Phone, Home, Scissors, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const ProcessSection = () => {
  const steps = [
    {
      icon: Phone,
      title: "Free Consultation",
      description: "Call or contact us for a free estimate. We'll discuss your needs, timeline, and budget over the phone or in person.",
      duration: "Same day response"
    },
    {
      icon: Home,
      title: "On-Site Measurement", 
      description: "I'll visit your Mississauga home to take precise measurements, assess the space, and provide detailed recommendations.",
      duration: "30-45 minutes"
    },
    {
      icon: Scissors,
      title: "Professional Installation",
      description: "Using premium materials and expert techniques, I'll install your new carpeting with meticulous attention to detail.",
      duration: "1-2 days typical"
    },
    {
      icon: CheckCircle,
      title: "Quality Inspection",
      description: "Final walkthrough to ensure everything meets our high standards. Clean-up included and your complete satisfaction guaranteed.",
      duration: "Your approval"
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Simple <span className="text-rich-gold">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to final installation, we make carpet installation 
            straightforward and stress-free for Mississauga homeowners.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-card border-border shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-rich-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-rich-gold" />
                    </div>
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-rich-gold text-background rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="inline-block bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground font-medium">
                      {step.duration}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-rich-gold/30 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-rich-gold/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-4">
              Most projects can be completed within 1-2 weeks from initial consultation.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-rich-gold text-foreground hover:bg-rich-gold/90 px-6 py-3 rounded-md font-medium transition-colors shadow-sm"
            >
              Get Your Free Estimate Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};