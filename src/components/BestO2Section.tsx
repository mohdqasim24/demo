import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import bestO2Plant from "@/assets/best-o2-plant.jpg";

const BestO2Section = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border mb-4">
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Premium Collection</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Best O2
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={bestO2Plant}
                alt="Snake Plant - Best O2 Producer"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-lg">
              <div className="text-center">
                <div className="text-2xl">O2</div>
                <div className="text-xs">Producer</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              We Have Small And Best O2 Plants Collections
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Oxygen production can keep plant, where element O2 for making
              people healthy through the process of photosynthesis. Natural Air purification
              oxygen supply at night is between house locations and always help make your health.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Many plants can give your liver detoxes and keep your digestion free
              from bad smell and give us fresh lifestyle in all
              conditions in health.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                VIEW MORE
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-card">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestO2Section;
