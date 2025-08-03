import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deep-wood/90 to-deep-wood/50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Premium <span className="text-rich-gold">Carpeting</span><br />
          & Flooring Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-soft-beige">
          Professional installation of indoor & outdoor carpets, wall-to-wall, stair runners, and expert repairs. Transform your space with quality flooring.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Free Estimate
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white bg-white/10 backdrop-blur-sm text-foreground hover:bg-white hover:text-deep-wood">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};