import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="section-hero bg-hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-split">
          {/* Content Section */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h1 className="hero-title">
                Creative
                <span className="text-gradient block">Design</span>
                Solutions
              </h1>
              <p className="hero-subtitle max-w-2xl">
                Transform your vision into stunning visual experiences. We create
                compelling designs that tell your story and captivate your audience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/portfolio">
                <Button variant="accent" size="lg" className="group">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="group">
                  <Play className="mr-2 h-5 w-5" />
                  Our Story
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/20">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-accent">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main Design Element */}
              <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl shadow-strong relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                {/* Floating Design Elements */}
                <div className="absolute top-8 left-8 w-20 h-20 bg-accent rounded-xl shadow-accent animate-float"></div>
                <div className="absolute top-20 right-12 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
                <div className="absolute bottom-16 left-16 w-24 h-24 bg-accent/30 rounded-lg rotate-12 animate-float" style={{ animationDelay: "1.5s" }}></div>
                
                {/* Center Focus */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-accent rounded-full shadow-strong flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;