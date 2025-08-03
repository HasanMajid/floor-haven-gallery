import { CarpetCarousel } from "./CarpetCarousel";

export const GallerySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-rich-gold">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent carpet installations and see the quality craftsmanship 
            we bring to every project. From luxury residential to commercial spaces.
          </p>
        </div>
        
        <CarpetCarousel />
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your space with premium carpeting?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium transition-colors shadow-sm">
              Schedule Consultation
            </button>
            <button className="bg-rich-gold text-foreground hover:bg-rich-gold/90 px-8 py-3 rounded-md font-medium transition-colors shadow-sm">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};