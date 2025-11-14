import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import plant1 from "@/assets/plant-1.jpg";
import plant2 from "@/assets/plant-2.jpg";
import plant3 from "@/assets/plant-3.jpg";
import plant4 from "@/assets/plant-4.jpg";
import plant5 from "@/assets/plant-5.jpg";
import plant6 from "@/assets/plant-6.jpg";

const TopSellingPlants = () => {
  const plants = [
    {
      id: 1,
      name: "Aglaonema plant",
      description: "As per research pot this plant is good for health & it can produce 100% more oxygen easily.",
      price: "Rs. 300/-",
      image: plant1,
    },
    {
      id: 2,
      name: "Premium Lilona",
      description: "Premium product indoor & even out door house it look gorgeous house.",
      price: "Rs. 390/-",
      image: plant2,
    },
    {
      id: 3,
      name: "Cactus",
      description: "Small plant they are really useful for many things as per research.",
      price: "Rs. 259/-",
      image: plant3,
    },
    {
      id: 4,
      name: "Snake cheese Plant",
      description: "Do not require water on regular basis and should we have enough.",
      price: "Rs. 600/-",
      image: plant4,
    },
    {
      id: 5,
      name: "Sanseveria plant",
      description: "Full moonlight able plant keep this around places to better oxygen.",
      price: "Rs. 450/-",
      image: plant5,
    },
    {
      id: 6,
      name: "Agave plant",
      description: "No need to be exposed to sun and easy to maintain always.",
      price: "Rs. 369/-",
      image: plant6,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Top Selling Plants
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <Card
              key={plant.id}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-t-lg bg-muted">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {plant.name}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {plant.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-bold text-accent">{plant.price}</span>
                  <Button
                    size="icon"
                    className="bg-card border border-border hover:bg-accent hover:border-accent text-foreground hover:text-accent-foreground"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingPlants;
