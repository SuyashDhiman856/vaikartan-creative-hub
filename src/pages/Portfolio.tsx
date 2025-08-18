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
      image: "/assets/Predator Campaign.png",
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
      featured: false
    },
    {
      id: 5,
      title: "NON VEG Burger Campaign",
      category: "Food & Beverage",
      description: "Bold food marketing design with vibrant orange branding and premium burger photography.",
      tags: ["Food Marketing", "Branding", "Commercial"],
      image: "/assets/NON VEG Burger Campaign.png",
      featured: false
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
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredItems.filter(item => item.featured).map((item) => (
                <Card key={item.id} className="group overflow-hidden border-0 shadow-soft hover-lift hover-glow bg-card-gradient">
                  <div className="aspect-video relative overflow-hidden cursor-pointer" onClick={() => handleImageClick(item.image, item.title)}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="accent" size="lg">
                        <Eye className="mr-2 h-5 w-5" />
                        View Full Design
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-accent text-accent">
                        {item.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">All Projects</h2>
            <div className="portfolio-grid">
              {filteredItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-0 shadow-soft hover-lift hover-glow bg-card-gradient">
                  <div className="aspect-video relative overflow-hidden cursor-pointer" onClick={() => handleImageClick(item.image, item.title)}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="accent">
                        <Eye className="mr-2 h-4 w-4" />
                        View Full Design
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="border-accent text-accent mb-2 text-xs">
                      {item.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {item.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{item.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Work with Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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