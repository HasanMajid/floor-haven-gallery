import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carpet1 from "@/assets/carpet-1.jpg";
import carpet2 from "@/assets/carpet-2.jpg";
import carpet3 from "@/assets/carpet-3.jpg";
import carpet4 from "@/assets/carpet-4.jpg";

const carpetImages = [
  {
    src: carpet1,
    title: "Luxurious Living Room Carpet",
    description: "Premium plush carpeting for modern homes"
  },
  {
    src: carpet2,
    title: "Elegant Stair Runners",
    description: "Traditional patterns with professional installation"
  },
  {
    src: carpet3,
    title: "Outdoor Carpeting",
    description: "Weather-resistant flooring for patios and decks"
  },
  {
    src: carpet4,
    title: "Wall-to-Wall Installation",
    description: "Complete bedroom carpeting solutions"
  }
];

export const CarpetCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carpetImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carpetImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-lg shadow-warm">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carpetImages.map((image, index) => (
            <div key={index} className="min-w-full relative">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-wood/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {image.title}
                </h3>
                <p className="text-soft-beige text-sm">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {carpetImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};