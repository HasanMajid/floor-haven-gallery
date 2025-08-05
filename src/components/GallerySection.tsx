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
    src: "/lovable-uploads/9342da7d-c104-4d16-9813-a248c6a6635b.png",
    title: "Elegant Curved Staircase",
    description: "Premium patterned carpet on curved staircase with railings"
  },
  {
    src: "/lovable-uploads/0d397c83-71fd-49a7-b110-484558ef7f35.png",
    title: "Traditional Curved Stairs",
    description: "Classic grey carpet installation on wooden staircase"
  },
  {
    src: "/lovable-uploads/1367a976-993a-47ab-8134-9a56bc02698e.png",
    title: "Contemporary Stair Design",
    description: "Modern grey patterned carpet with contrasting wood trim"
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
    src: "/lovable-uploads/1a69a776-1540-4193-8c77-cda50b94b4e1.png",
    title: "Brickyard III Series",
    description: "Specialty carpets including Speedway and Race Track patterns"
  },
  {
    src: "/lovable-uploads/a0c20fb7-9620-436d-855c-2b5b79c29a8d.png",
    title: "Keywest & Bedford Collections",
    description: "Premium residential carpet options in neutral tones"
  },
  {
    src: "/lovable-uploads/e8afbcb8-9eb2-4762-b767-36831f355672.png",
    title: "Ace Berber Series",
    description: "Classic berber carpets in multiple natural tones"
  },
  {
    src: "/lovable-uploads/5368c50b-62f4-4817-8ecf-70f8011c68f5.png",
    title: "Color Sample Board",
    description: "Wide variety of colors and textures available"
  },
  {
    src: "/lovable-uploads/a2ccaa90-e861-4036-9404-febb23c65019.png",
    title: "Naples Carpet Collection",
    description: "Premium carpet samples in multiple neutral tones"
  }
];

export const GallerySection = () => {
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
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-warm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
    </section>
  );
};