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

  // Portfolio items with downloaded images from reference website
  const portfolioItems = [
    {
      id: 1,
      title: "Against The Fate!",
      category: "Digital Art",
      description: "Creative poster design with dynamic visual elements.",
      tags: ["Poster", "Digital Art", "Creative"],
      image: "/assets/against-the-fate.webp",
      featured: true
    },
    {
      id: 2,
      title: "Mahindra BE-6 Batman Ed.",
      category: "Automotive Design", 
      description: "Special edition automotive design with superhero theme.",
      tags: ["Automotive", "Batman", "Design"],
      image: "/assets/mahindra-batman.webp",
      featured: true
    },
    {
      id: 3,
      title: "Perfume Posts Designs",
      category: "Product Design",
      description: "Elegant perfume advertisement designs with premium styling.",
      tags: ["Perfume", "Product", "Advertisement"],
      image: "/assets/perfume-posts.webp",
      featured: false
    },
    {
      id: 4,
      title: "Movie Poster Arts",
      category: "Entertainment",
      description: "Creative movie poster designs with cinematic appeal.",
      tags: ["Movies", "Poster", "Entertainment"],
      image: "/assets/movie-poster-arts.webp",
      featured: true
    },
    {
      id: 5,
      title: "K.M.S Logo Design",
      category: "Branding",
      description: "Professional logo design with modern typography and branding elements.",
      tags: ["Logo", "Branding", "Typography"],
      image: "/assets/kms-logo-design.webp",
      featured: true
    },
    {
      id: 6,
      title: "Sofa Brandings",
      category: "Product Design",
      description: "Furniture branding designs with elegant and modern aesthetics.",
      tags: ["Furniture", "Branding", "Product"],
      image: "/assets/sofa-brandings.webp",
      featured: true
    },
    {
      id: 7,
      title: "Royal Enfield's Posts",
      category: "Automotive Design",
      description: "Motorcycle social media designs with rugged and adventurous themes.",
      tags: ["Motorcycle", "Social Media", "Adventure"],
      image: "/assets/royal-enfield-posts.webp",
      featured: false
    },
    {
      id: 8,
      title: "Citrakaara Logo Design",
      category: "Branding", 
      description: "Artistic logo design with cultural and creative elements.",
      tags: ["Logo", "Cultural", "Creative"],
      image: "/assets/citrakaara-logo.webp",
      featured: false
    },
    {
      id: 9,
      title: "Ferrari Post Design",
      category: "Automotive Design",
      description: "Luxury sports car design with premium and dynamic styling.",
      tags: ["Ferrari", "Luxury", "Sports Car"],
      image: "/assets/ferrari-post-design.webp",
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
    "Branding": ["Branding"],
    "Digital Design": ["Digital Art", "Product Design"],
    "Marketing": ["Automotive Design", "Entertainment"]
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
                <div className="relative mb-6 cursor-pointer overflow-hidden" onClick={() => handleImageClick(item.image, item.title)}>
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
