import HeroText from "./HeroText";
import HeroVideo from "./HeroVideo";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-8 lg:px-12 pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <HeroText />
          <HeroVideo />
        </div>
      </div>
    </section>
  );
};

export default Hero;