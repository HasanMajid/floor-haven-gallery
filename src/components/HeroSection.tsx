import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
const raheelPhoto = "/lovable-uploads/3aee0e0d-1e7a-41ea-8b80-606a2c779518.png";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deep-wood/90 to-deep-wood/50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center text-white">
          {/* Main Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Premium <span className="text-rich-gold">Carpeting</span><br />
              & Flooring Solutions
            </h1>
            <div className="mb-6 flex justify-center lg:justify-start">
              <span className="inline-block px-6 py-3 bg-rich-gold/20 border border-rich-gold/30 text-rich-gold rounded-full text-xl font-semibold backdrop-blur-sm">
                📍 Proudly Serving Mississauga, Ontario
              </span>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-soft-beige leading-relaxed">
              Professional installation of indoor & outdoor carpets, wall-to-wall, stair runners, and expert repairs. Quality craftsmanship from your trusted Mississauga installer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                Get Free Estimate
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-white bg-white/10 backdrop-blur-sm text-foreground hover:bg-white hover:text-deep-wood"
                onClick={() => scrollToSection('gallery')}
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Michael's Photo & Bio */}
          <div className="lg:col-span-1 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-rich-gold shadow-lg">
                 <img 
                  src={raheelPhoto} 
                  alt="Raheel - Carpet Installation Expert" 
                  className="w-full h-full object-cover object-[center_10%]"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Raheel</h3>
              <p className="text-rich-gold font-semibold mb-3">Carpet Installation Expert</p>
              <p className="text-soft-beige text-sm leading-relaxed mb-4">
                15+ years serving Mississauga with expert carpet installation, repair, and flooring solutions. Licensed, insured, and committed to exceptional craftsmanship.
              </p>
              <div className="flex justify-center space-x-4 text-xs text-soft-beige">
                <span>✓ Licensed & Insured</span>
                <span>✓ 15+ Years Experience</span>
                <span>✓ Local Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};