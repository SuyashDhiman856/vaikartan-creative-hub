import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Monitor, 
  Smartphone, 
  Globe, 
  PenTool, 
  Layers,
  ArrowRight,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Palette className="h-10 w-10" />,
      title: "Brand Identity Design",
      description: "Complete visual identity packages that capture your brand's essence and values.",
      features: [
        "Logo Design & Variations",
        "Color Palette Development",
        "Typography Selection",
        "Brand Guidelines",
        "Business Card Design",
        "Letterhead & Stationery"
      ],
      price: "Starting from $1,500",
      popular: false
    },
    {
      icon: <Monitor className="h-10 w-10" />,
      title: "Web Design",
      description: "Modern, responsive websites that provide exceptional user experiences.",
      features: [
        "Custom Web Design",
        "Responsive Layout",
        "User Experience (UX)",
        "Interactive Prototypes",
        "SEO Optimization",
        "Performance Optimization"
      ],
      price: "Starting from $2,500",
      popular: true
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile App Design",
      description: "Intuitive mobile applications designed for optimal user engagement.",
      features: [
        "iOS & Android Design",
        "User Interface (UI)",
        "Interactive Prototypes",
        "Design System Creation",
        "Icon Design",
        "App Store Assets"
      ],
      price: "Starting from $3,000",
      popular: false
    },
    {
      icon: <PenTool className="h-10 w-10" />,
      title: "Print Design",
      description: "Professional print materials that make a lasting impression.",
      features: [
        "Brochure Design",
        "Poster & Flyer Design",
        "Packaging Design",
        "Magazine Layout",
        "Annual Report Design",
        "Marketing Collateral"
      ],
      price: "Starting from $800",
      popular: false
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Digital Marketing",
      description: "Compelling visual content for your digital marketing campaigns.",
      features: [
        "Social Media Graphics",
        "Email Template Design",
        "Banner Advertisements",
        "Infographic Design",
        "Campaign Visuals",
        "Content Strategy"
      ],
      price: "Starting from $1,200",
      popular: false
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Design Consultation",
      description: "Strategic design guidance to align your vision with market opportunities.",
      features: [
        "Design Strategy Session",
        "Brand Analysis",
        "Competitive Research",
        "Design Recommendations",
        "Implementation Roadmap",
        "Ongoing Support"
      ],
      price: "Starting from $500",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your goals, target audience, and brand vision through detailed consultation."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive design strategy that aligns with your business objectives and market positioning."
    },
    {
      step: "03",
      title: "Design",
      description: "Create compelling visual solutions using our proven design process and collaborative approach."
    },
    {
      step: "04",
      title: "Refinement",
      description: "Iterate and refine the designs based on your feedback to ensure perfect alignment with your vision."
    },
    {
      step: "05",
      title: "Delivery",
      description: "Deliver polished, production-ready files with comprehensive guidelines and ongoing support."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Comprehensive design solutions tailored to elevate your brand and achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative overflow-hidden border-0 shadow-soft hover-lift hover-glow bg-card-gradient ${service.popular ? 'ring-2 ring-accent' : ''}`}>
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-xl mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-accent mb-4">{service.price}</div>
                    <Link to="/contact">
                      <Button 
                        variant={service.popular ? "accent" : "outline"} 
                        className="w-full group"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results and client satisfaction on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-border -ml-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and create a customized solution that perfectly fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="xl">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;