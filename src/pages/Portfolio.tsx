import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  // Placeholder portfolio items - will be replaced with actual work
  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete visual identity package including logo, colors, and brand guidelines.",
      tags: ["Logo Design", "Brand Guidelines", "Color Theory"],
      image: "placeholder-1",
      featured: true
    },
    {
      id: 2,
      title: "Modern Web Interface",
      category: "Digital Design",
      description: "Clean and modern web application interface with focus on user experience.",
      tags: ["UI/UX", "Web Design", "Responsive"],
      image: "placeholder-2",
      featured: false
    },
    {
      id: 3,
      title: "Creative Campaign",
      category: "Marketing",
      description: "Visual campaign design for product launch with multiple touchpoints.",
      tags: ["Campaign", "Marketing", "Print Design"],
      image: "placeholder-3",
      featured: true
    },
    {
      id: 4,
      title: "Mobile App Design",
      category: "Digital Design",
      description: "Intuitive mobile application design with seamless user journey.",
      tags: ["Mobile UI", "App Design", "Prototyping"],
      image: "placeholder-4",
      featured: false
    },
    {
      id: 5,
      title: "Corporate Branding",
      category: "Branding",
      description: "Professional corporate identity and business collateral design.",
      tags: ["Corporate", "Business Cards", "Stationery"],
      image: "placeholder-5",
      featured: false
    },
    {
      id: 6,
      title: "E-commerce Platform",
      category: "Digital Design",
      description: "Complete e-commerce website design with conversion optimization.",
      tags: ["E-commerce", "Conversion", "Shopping"],
      image: "placeholder-6",
      featured: true
    }
  ];

  const categories = ["All", "Branding", "Digital Design", "Marketing"];

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
                variant={category === "All" ? "accent" : "outline"}
                size="sm"
                className="transition-all duration-300"
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
              {portfolioItems.filter(item => item.featured).map((item) => (
                <Card key={item.id} className="group overflow-hidden border-0 shadow-soft hover-lift hover-glow bg-card-gradient">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-accent rounded-full mb-4 mx-auto flex items-center justify-center">
                          <Eye className="h-8 w-8 text-accent-foreground" />
                        </div>
                        <p className="text-foreground font-medium">Your Design Will Be Here</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="accent" size="lg">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        View Project
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
              {portfolioItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-0 shadow-soft hover-lift hover-glow bg-card-gradient">
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/5 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-accent/20 rounded-full mb-3 mx-auto flex items-center justify-center">
                          <Eye className="h-6 w-6 text-accent" />
                        </div>
                        <p className="text-sm text-muted-foreground">Design Placeholder</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="accent">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View
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
    </div>
  );
};

export default Portfolio;