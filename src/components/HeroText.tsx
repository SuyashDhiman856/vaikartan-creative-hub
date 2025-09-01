import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroText = () => {
  return (
    <div className="bg-white component-border p-8 space-y-8 text-center lg:text-left">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground font-heading">
          COURAGE
          <span className="text-accent block">PRECISION</span>
          DESIGN
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
          We create clean, professional designs that help your business stand out.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
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
      <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
        <div className="text-center lg:text-left">
          <div className="text-3xl font-bold text-accent">150+</div>
          <div className="text-sm text-muted-foreground">Projects</div>
        </div>
        <div className="text-center lg:text-left">
          <div className="text-3xl font-bold text-accent">5+</div>
          <div className="text-sm text-muted-foreground">Years</div>
        </div>
        <div className="text-center lg:text-left">
          <div className="text-3xl font-bold text-accent">98%</div>
          <div className="text-sm text-muted-foreground">Satisfaction</div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;