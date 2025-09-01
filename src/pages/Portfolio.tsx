import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageModal from "@/components/ImageModal";
import SkillsSection from "@/components/SkillsSection";

const Portfolio = () => {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Portfolio items with actual design work
  const portfolioItems = [
    {
      id: 1,
      title: "PREDATOR Campaign",
      category: "Automotive Design",
      description: "Dramatic automotive advertisement featuring powerful predator theme with BMW vehicle.",
      tags: ["Automotive", "Campaign Design", "Typography"],
      image: "/assets/Predator Compaign.png",
      featured: true
    },
    {
      id: 2,
      title: "FUTURE ON WHEELS",
      category: "Automotive Design", 
      description: "Futuristic Mercedes-Benz campaign with sci-fi robot theme and dramatic lighting.",
      tags: ["Futuristic", "Mercedes", "Concept Design"],
      image: "/assets/Future on Wheels.png",
      featured: true
    },
    {
      id: 3,
      title: "Smart Watch Interface",
      category: "Product Design",
      description: "Modern smartwatch interface design with clean green accent branding.",
      tags: ["UI Design", "Product", "Wearables"],
      image: "/assets/Smart Watch Interface.png",
      featured: false
    },
    {
      id: 4,
      title: "VEGGIE HULK Burger",
      category: "Food & Beverage",
      description: "Creative food advertisement with bold typography and appetizing product photography.",
      tags: ["Food Design", "Typography", "Commercial"],
      image: "/assets/VEGGIE HULK Burger.png",
      featured: true
    },
    {
      id: 5,
      title: "NON VEG Burger Campaign",
      category: "Food & Beverage",
      description: "Bold food marketing design with vibrant orange branding and premium burger photography.",
      tags: ["Food Marketing", "Branding", "Commercial"],
      image: "/assets/NON VEG Burger Campaign.png",
      featured: true
    },
    {
      id: 6,
      title: "TOUGH Fitness Campaign",
      category: "Sports & Fitness",
      description: "Dynamic fitness poster design with bold yellow and black color scheme.",
      tags: ["Fitness", "Poster Design", "Sports"],
      image: "/assets/TOUGH Fitness Campaign.png",
      featured: true
    },
    {
      id: 7,
      title: "RIDE INTO WILD",
      category: "Automotive Design",
      description: "Adventure motorcycle campaign with natural outdoor environment and vintage styling.",
      tags: ["Motorcycle", "Adventure", "Outdoor"],
      image: "/assets/RIDE INTO WILD.png",
      featured: false
    },
    {
      id: 8,
      title: "RIDE LIKE A BEAST",
      category: "Automotive Design", 
      description: "Urban motorcycle design with modern city backdrop and sleek styling.",
      tags: ["Urban", "Motorcycle", "Modern"],
      image: "/assets/RIDE LIKE A BEAST.png",
      featured: false
    },
    {
      id: 9,
      title: "POWER Royal Enfield",
      category: "Automotive Design",
      description: "Premium motorcycle advertisement with luxury gold text effects and dramatic lighting.",
      tags: ["Luxury", "Royal Enfield", "Premium"],
      image: "/assets/POWER Royal Enfield.png",
      featured: true
    }
  ];

  const handleImageClick = (imageSrc: string, imageAlt: string) => {
    setModalImage({ src: imageSrc, alt: imageAlt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  // Map display categories to actual portfolio categories
  const categoryMapping: Record<string, string[]> = {
    "All": [],
    "Branding": ["Automotive Design", "Sports & Fitness"],
    "Digital Design": ["Product Design"],
    "Marketing": ["Food & Beverage"]
  };

  const categories = Object.keys(categoryMapping);

  // Filter portfolio items based on selected category
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => categoryMapping[activeCategory].includes(item.category));

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto bg-white component-border p-8 text-center">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Explore our creative journey through selected projects that showcase our design expertise and strategic thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto bg-white component-border p-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "accent" : "outline"}
                size="sm"
                className="transition-all duration-300"
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Design Gallery */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto bg-white component-border p-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 font-heading text-center">DESIGNS GALLERY</h2>
          
          {/* Gallery Grid - Blog style like the reference website */}
          <div className="max-w-4xl mx-auto space-y-12">
            {filteredItems.map((item) => (
              <div key={item.id} className="group">
                {/* Image Container */}
                <div className="relative mb-6 cursor-pointer overflow-hidden rounded-lg" onClick={() => handleImageClick(item.image, item.title)}>
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Content Below Image */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-foreground font-heading hover:text-accent transition-colors cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    Aayush Goyal
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.id === 1 ? "4 days ago" : item.id === 2 ? "4 days ago" : "5 days ago"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Work with Us Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto bg-white component-border p-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Add Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're excited to work on your next design challenge. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="xl">
                Start Your Project
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="xl">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={closeModal}
          imageSrc={modalImage.src}
          imageAlt={modalImage.alt}
        />
      )}
    </div>
  );
};

export default Portfolio;
