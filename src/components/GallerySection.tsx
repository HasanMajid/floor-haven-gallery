import carpet1 from "@/assets/carpet-1.jpg";
import carpet2 from "@/assets/carpet-2.jpg";
import carpet3 from "@/assets/carpet-3.jpg";
import carpet4 from "@/assets/carpet-4.jpg";

const carpetWork = [
  {
    src: carpet1,
    title: "Stair Carpet Installation",
    description: "Professional stair runner installation"
  },
  {
    src: carpet2,
    title: "Outdoor Grey Stair Carpet",
    description: "Weather-resistant outdoor carpeting"
  },
  {
    src: carpet3,
    title: "Residential Carpet Installation",
    description: "Premium indoor carpet solutions"
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