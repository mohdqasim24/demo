import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles } from "lucide-react";
import heroPlant from "@/assets/hero-plant.jpg";
import featuredPlant from "@/assets/featured-plant.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Welcome to FloraVision</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Earth's Exhale
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              PLANT MAKES US FRESH INSIDE OUR ROOM AND IT IS AMAZING WHEN WE BREATH 
              IN A GREEN AND GROWING ALL TIME LOVE.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Buy Now
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-card">
                <Sparkles className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </div>

            {/* Feedback Card */}
            <div className="mt-8 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-border max-w-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  JD
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Feedback</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    100% Satisfied with all the plants here.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float">
              <img
                src={heroPlant}
                alt="Beautiful Aglaonema plant"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Featured Plant Card */}
            <div className="absolute bottom-8 right-8 p-4 bg-card/90 backdrop-blur-md rounded-2xl border border-border shadow-lg max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={featuredPlant}
                  alt="Featured plant"
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <p className="text-xs text-muted-foreground">Spring Offer</p>
                  <p className="font-bold text-foreground">Aglaonema plant</p>
                </div>
              </div>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
