import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrendingPlants from "@/components/TrendingPlants";
import TopSellingPlants from "@/components/TopSellingPlants";
import CustomerReviews from "@/components/CustomerReviews";
import BestO2Section from "@/components/BestO2Section";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrendingPlants />
        <TopSellingPlants />
        <CustomerReviews />
        <BestO2Section />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
