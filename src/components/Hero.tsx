import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-muted/30 flex items-center px-4 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Original Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Creative
                <span className="text-accent block">Design</span>
                Solutions
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

          {/* Right Section - Video */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-[9/16] bg-card border-2 border-border rounded-lg shadow-medium overflow-hidden">
              {/* Placeholder for video - replace with actual video component */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-accent border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-muted-foreground text-sm">Video will appear here</p>
                </div>
              </div>
              
              {/* Uncomment and update the src when you upload your video */}
              {/* <video 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted={false}
                controls={false}
              >
                <source src="/path/to/your/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;