import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Eye, Heart, Target } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Vision",
      description: "To be the leading creative partner for brands seeking exceptional visual communication."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission",
      description: "Transforming ideas into compelling visual stories that connect and inspire."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Values",
      description: "Creativity, integrity, collaboration, and excellence in everything we create."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality",
      description: "Uncompromising standards in design craft and client service delivery."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto bg-white component-border p-8 text-center">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-accent">Vaikartan</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              We are passionate designers and creative thinkers dedicated to bringing your brand's story to life through exceptional visual design.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto bg-white component-border p-8">
          <div className="section-split">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Our <span className="text-accent">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded with a passion for exceptional design, Vaikartan began as a vision to bridge the gap between creative imagination and strategic business communication. We believe that great design has the power to transform not just how brands look, but how they connect with their audiences.
                </p>
                <p>
                  Over the years, we've had the privilege of working with diverse clients, from ambitious startups to established enterprises, helping them discover and express their unique visual identity. Each project teaches us something new and pushes us to innovate further.
                </p>
                <p>
                  Today, Vaikartan stands as a testament to the power of collaborative creativity. We're not just designers; we're strategic partners in your brand's journey toward visual excellence.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl shadow-strong relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-accent rounded-full shadow-accent flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 bg-accent rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-8 left-8 w-16 h-16 bg-accent/30 rounded-xl animate-float"></div>
                <div className="absolute bottom-8 right-8 w-20 h-20 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto bg-white component-border p-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Drives <span className="text-accent">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values shape every decision we make and every design we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover-lift hover-glow component-border shadow-soft bg-white text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-xl mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto bg-white component-border p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-accent">150+</div>
              <div className="text-lg font-medium text-foreground">Projects Completed</div>
              <div className="text-muted-foreground">Successful deliveries</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-accent">5+</div>
              <div className="text-lg font-medium text-foreground">Years Experience</div>
              <div className="text-muted-foreground">In the industry</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-accent">98%</div>
              <div className="text-lg font-medium text-foreground">Client Satisfaction</div>
              <div className="text-muted-foreground">Happy clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-accent">24/7</div>
              <div className="text-lg font-medium text-foreground">Support Available</div>
              <div className="text-muted-foreground">Always here to help</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto bg-primary component-border p-8 text-center text-primary-foreground">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Together
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to start your design journey? We'd love to hear about your project and explore how we can help bring your vision to life.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="xl">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;