import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Shelly Russel",
      rating: 5,
      review:
        "I love my plant so much, the quality is so good and I'm so happy. I will order again.",
      avatar: "SR",
    },
    {
      id: 2,
      name: "Lula Roitson",
      rating: 5,
      review:
        "Such a nice quality and fresh plant I ever saw in my Life, I am happy about this product it's amazing.",
      avatar: "LR",
    },
    {
      id: 3,
      name: "Carol Husle",
      rating: 5,
      review:
        "It is such a nice plant, I love this so much. It is a quality product. I recommend buying this.",
      avatar: "CH",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Customer Review
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {review.review}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
