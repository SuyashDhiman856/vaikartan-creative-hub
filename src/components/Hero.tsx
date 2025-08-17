import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/c60fcc3f-6422-48c7-a7e8-d5a963436e14.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Creative
            <span className="text-accent block">Design</span>
            Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We create clean, professional designs that help your business stand out.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link to="/portfolio">
            <Button variant="accent" size="lg" className="group">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Get In Touch
            </Button>
          </Link>
        </div>

        {/* Simple Stats */}
        <div className="flex flex-wrap justify-center gap-8 pt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">150+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">5+</div>
            <div className="text-sm text-muted-foreground">Years</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;