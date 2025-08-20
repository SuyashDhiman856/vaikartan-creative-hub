import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup",
      text: "Amazing design work! They transformed our brand identity completely. The attention to detail and creativity exceeded our expectations.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "E-commerce Store",
      text: "Professional, creative, and delivered on time. Highly recommended! Their designs helped increase our conversion rate by 40%.",
      rating: 5
    },
    {
      name: "Emily Davis",
      company: "Local Restaurant",
      text: "The best design agency we've worked with. Exceptional quality! They captured our brand essence perfectly and created stunning visuals.",
      rating: 5
    },
    {
      name: "David Wilson",
      company: "Software Company",
      text: "Incredible team with amazing creative vision. They brought our ideas to life in ways we never imagined possible.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "Fashion Brand",
      text: "Outstanding work quality and customer service. They understood our vision and delivered beyond expectations every time.",
      rating: 5
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto bg-white component-border p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                 <div key={index} className="w-full flex-shrink-0">
                   <Card className="text-center p-8 mx-4 shadow-medium bg-white component-border">
                    <CardContent className="space-y-6">
                      <div className="flex justify-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-lg text-muted-foreground italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm hover:bg-background shadow-medium"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm hover:bg-background shadow-medium"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? "bg-accent"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;