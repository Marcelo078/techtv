import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
  cta?: {
    text: string;
    link: string;
  };
}

interface WebStoryProps {
  slides: Slide[];
  onClose: () => void;
}

export default function WebStory({ slides, onClose }: WebStoryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-50">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Story Container */}
      <div className="relative w-full max-w-md h-[90vh] md:h-[85vh]">
        {/* Navigation Arrows */}
        {currentSlide > 0 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/20"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        )}
        
        {currentSlide < slides.length - 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/20"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}

        {/* Slide Content */}
        <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-secondary relative">
          {slides[currentSlide].image && (
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
          )}
          
          <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
                {slides[currentSlide].title}
              </h2>
              
              {slides[currentSlide].subtitle && (
                <p className="text-xl md:text-2xl mb-4 text-white/90 animate-fade-in-up animation-delay-200">
                  {slides[currentSlide].subtitle}
                </p>
              )}
              
              <p className="text-lg md:text-xl text-white/80 animate-fade-in-up animation-delay-400">
                {slides[currentSlide].content}
              </p>
            </div>

            {slides[currentSlide].cta && (
              <div className="animate-fade-in-up animation-delay-600">
                <a
                  href={slides[currentSlide].cta!.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="lg" variant="secondary" className="w-full">
                    {slides[currentSlide].cta!.text}
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-6' : 'bg-white/40'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
