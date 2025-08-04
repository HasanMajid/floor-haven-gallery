import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How long does carpet installation typically take?",
      answer: "Most residential carpet installations in Mississauga take 1-2 days depending on the size and complexity. Single rooms can often be completed in a few hours, while whole-home installations may take longer. I'll provide an accurate timeline during your free consultation."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes! I provide completely free, no-obligation estimates for all carpet installation and repair services in Mississauga. I'll visit your home, take measurements, and provide detailed pricing with no pressure to commit."
    },
    {
      question: "What types of carpet do you work with?",
      answer: "I work with all types of carpeting including plush, berber, frieze, loop pile, cut pile, and luxury carpets. I also specialize in stair runners, area rugs, and both indoor and outdoor carpeting. I can help you choose the best option for your needs and budget."
    },
    {
      question: "Can you repair damaged carpet instead of replacing it?",
      answer: "Absolutely! I specialize in carpet repairs including patching, stretching, seaming, and fixing burns, stains, or pet damage. In many cases, professional repair can save you significant money compared to full replacement while restoring your carpet to like-new condition."
    },
    {
      question: "Do you move furniture during installation?",
      answer: "Yes, I handle all furniture moving as part of the installation service. I'll carefully move and protect your furniture, and return everything to its proper place when the job is complete. For very heavy items, I may ask for assistance."
    },
    {
      question: "How far in advance should I book?",
      answer: "I recommend booking 1-2 weeks in advance, especially during busy seasons. However, I often have availability for urgent projects and can sometimes accommodate same-week installations for Mississauga customers. Contact me to check current availability."
    },
    {
      question: "What's included in your service?",
      answer: "My service includes free consultation and estimate, all materials (carpet, padding, tack strips, etc.), professional installation, furniture moving, old carpet removal and disposal (if needed), and complete cleanup. Everything you need for a hassle-free experience."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "Yes! I stand behind all my work with a satisfaction guarantee. If you're not completely happy with the installation, I'll make it right. I also provide guidance on proper carpet care to ensure your investment lasts for years to come."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked <span className="text-rich-gold">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about carpet installation, repair, and our services 
            in Mississauga. Don't see your question? Feel free to contact us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:text-rich-gold transition-colors py-6">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-rich-gold/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              I'm here to help! Contact me directly for personalized answers about your specific carpet needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('tel:+1-905-123-4567', '_self')}
                className="bg-rich-gold text-foreground hover:bg-rich-gold/90 px-6 py-3 rounded-md font-medium transition-colors shadow-sm"
              >
                Call: (905) 123-4567
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors shadow-sm"
              >
                Contact Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};