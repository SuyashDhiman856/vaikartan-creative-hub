import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Palette, Monitor, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Brand Identity",
      description: "Create distinctive visual identities that make your brand memorable and impactful."
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Digital Design",
      description: "Modern web and app designs that deliver exceptional user experiences."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Creative Solutions",
      description: "Innovative design approaches that solve complex visual communication challenges."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consultation",
      description: "Strategic design guidance to align your vision with market opportunities."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We <span className="text-accent">Create</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to completion, we deliver design solutions that elevate your brand and engage your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift hover-glow border-0 shadow-soft bg-card-gradient">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-xl mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-split">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Design That <span className="text-accent">Matters</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                At Vaikartan, we believe great design is more than aesthetics—it's about creating meaningful connections between brands and their audiences. Our approach combines creativity with strategy to deliver results that matter.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Strategic design thinking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Collaborative process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Results-driven solutions</span>
                </div>
              </div>
              <Link to="/about">
                <Button variant="outline" size="lg" className="group mt-6">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl shadow-medium relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-bold text-accent">5+</div>
                    <div className="text-xl text-foreground">Years of Excellence</div>
                    <div className="text-muted-foreground">Crafting visual stories</div>
                  </div>
                </div>
                <div className="absolute top-8 right-8 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-primary/20 rounded-xl animate-float" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something extraordinary together. Get in touch to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="xl">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;