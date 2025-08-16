import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Palette, Monitor, PenTool, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Brand Identity",
      description: "Logo design and brand guidelines."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Web Design",
      description: "Modern, responsive websites."
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Print Design",
      description: "Business cards, brochures, posters."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Consultation",
      description: "Design strategy and guidance."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional design solutions for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch to discuss your design needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg">
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