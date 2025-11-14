import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import plant1 from "@/assets/plant-1.jpg";
import featuredPlant from "@/assets/featured-plant.jpg";

const TrendingPlants = () => {
  const plants = [
    {
      id: 1,
      name: "For Your Desks Decorations",
      description: "Succulent collection to get great ambience with just potted plant",
      price: "Rs. 599/-",
      image: plant1,
    },
    {
      id: 2,
      name: "For Your Desks Decorations",
      description: "Succulent collection to get great ambience with just potted plant",
      price: "Rs. 599/-",
      image: featuredPlant,
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Trendy plants
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {plants.map((plant) => (
            <Card
              key={plant.id}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-4 p-6">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <Heart className="w-5 h-5 text-foreground" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {plant.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {plant.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-accent">{plant.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-primary hover:bg-primary/90">
                        Explore
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-border hover:bg-accent hover:text-accent-foreground"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPlants;
