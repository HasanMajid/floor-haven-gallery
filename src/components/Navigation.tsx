import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/carpetnfloor-logo.png';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Process', id: 'process' },
    // { label: 'Testimonials', id: 'testimonials' },
    // { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
        : 'bg-white/10 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="CarpetnFloor" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 hover:text-rich-gold rounded-lg transition-all duration-200 font-medium ${
                  isScrolled 
                    ? 'text-foreground hover:bg-muted' 
                    : 'text-white/90 hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="gold"
              size="sm"
              className="hidden sm:flex items-center gap-2"
              onClick={() => window.open('tel:+1-905-123-4567', '_self')}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden hover:text-rich-gold transition-colors p-2 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-rich-gold hover:bg-muted rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border mt-4">
                <Button
                  variant="gold"
                  size="sm"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => window.open('tel:+1-905-123-4567', '_self')}
                >
                  <Phone className="h-4 w-4" />
                  Call Now: (905) 123-4567
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};