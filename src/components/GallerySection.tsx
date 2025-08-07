const carpetWork = [
  {
    src: "/lovable-uploads/96937ec8-5153-4768-ac34-57e17e0d3565.png",
    title: "Modern Stair Runner Installation",
    description: "Professional beige carpet runner with precise installation"
  },
  {
    src: "/lovable-uploads/efa019c3-be7a-45c9-8d71-ca1bcfaddc2b.png",
    title: "Outdoor Stair Carpeting",
    description: "Weather-resistant grey carpet for exterior stairs"
  },
  {
    src: "/lovable-uploads/c4853337-fff3-496e-9d25-862cff8998f8.png",
    title: "Custom Stair Runner",
    description: "Textured carpet with professional edge finishing"
  },
  {
    src: "/lovable-uploads/b3b3b2c4-7584-4df1-af65-b7f3b2069945.png",
    title: "Herringbone Pattern Staircase",
    description: "Elegant herringbone pattern carpet with dark wood trim"
  },
  {
    src: "/lovable-uploads/de8df702-1112-4b94-a921-86b5da35fe0f.png",
    title: "Bold Red Stair Runner",
    description: "Vibrant red carpet runner installation on curved staircase"
  },
  {
    src: "/lovable-uploads/ea472202-772c-46c6-b230-d6f2fdf49108.png",
    title: "Animal Print Stair Runner",
    description: "Bold leopard print carpet for statement staircases"
  },
  {
    src: "/lovable-uploads/9342da7d-c104-4d16-9813-a248c6a6635b.png",
    title: "Elegant Curved Staircase",
    description: "Premium patterned carpet on curved staircase with railings"
  },
  {
    src: "/lovable-uploads/b5d07655-5a4e-48da-a8a7-7210c81a2cbe.png",
    title: "Waterford Collection by Nature's Carpet",
    description: "Premium natural fiber carpets including Billberry, Glenville, and Rockshire"
  },
  {
    src: "/lovable-uploads/57f3e7d8-f367-4599-ada3-fead4bfecee2.png",
    title: "Naples II Performance Fiber",
    description: "Solution dyed performance fiber carpet in neutral tones"
  },
  {
    src: "/lovable-uploads/3bc709c3-3524-4336-a3a2-09982fd84a4d.png",
    title: "Glasgow Carpet Series",
    description: "Durable Glasgow collection in multiple color variations"
  },
  {
    src: "/lovable-uploads/bb3ff0e6-4e84-4ae3-8bc1-13a8ea889ac2.png",
    title: "Perth Collection",
    description: "Perth series carpet samples in sophisticated neutral palettes"
  },
  {
    src: "/lovable-uploads/a0c54982-759e-4d89-9269-7bc3a6104514.png",
    title: "City Park II Collection",
    description: "Urban-inspired carpet designs including Art District and Metro Plaza"
  },
  {
    src: "/lovable-uploads/19de2a5e-6be3-4989-a462-9568d9082f11.png",
    title: "Berber Carpet Selection - Dark Tones",
    description: "Premium berber carpets in charcoal and navy blue shades"
  },
  {
    src: "/lovable-uploads/691d82b6-3aa5-4bbd-bdeb-6e0bd22b6296.png",
    title: "Berber Carpet Selection - Earth Tones",
    description: "Natural berber carpets in beige, brown, and accent colors"
  },
  {
    src: "/lovable-uploads/252564f4-0b2d-452a-8809-3a251d2b533b.png",
    title: "28oz Berber Collection",
    description: "Heavy-duty berber carpets including Cambridge, Oxford, and Stanford"
  },
  {
    src: "/lovable-uploads/03625bff-2378-458c-a0c2-5c15f6ab1ac5.png",
    title: "Wool Carpet Collection",
    description: "Premium wool carpets for custom area rugs and broadloom"
  },
  {
    src: "/lovable-uploads/c44142fb-7bca-4220-982b-52ed10242a88.png",
    title: "Textured Wool Samples",
    description: "Various textures and weaves for custom installations"
  },
  {
    src: "/lovable-uploads/25e2dc6b-8671-4f9f-8ecb-aeb8f7253a5f.png",
    title: "Custom Area Rug Options",
    description: "Wide selection of patterns and colors for area rugs"
  },
  {
    src: "/lovable-uploads/3602c679-4da4-4fbf-9635-00de0856f39b.png",
    title: "Broadloom Carpet Selection",
    description: "Professional-grade carpeting for large installations"
  },
  {
    src: "/lovable-uploads/03e01268-9e31-4733-a3a3-dc785c24381d.png",
    title: "Gladiator Series Collection",
    description: "Durable carpet options including Armor, Sword, and Knight styles"
  },
  {
    src: "/lovable-uploads/5368c50b-62f4-4817-8ecf-70f8011c68f5.png",
    title: "Color Sample Board",
    description: "Wide variety of colors and textures available"
  }
];

import { useState } from 'react';
import { X } from 'lucide-react';

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Work <span className="text-rich-gold">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of our finest carpeting and flooring installations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {carpetWork.map((work, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-warm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedImage(work.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-wood/90 to-transparent p-6">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {work.title}
                </h3>
                <p className="text-soft-beige text-sm">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged gallery image"
              className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};