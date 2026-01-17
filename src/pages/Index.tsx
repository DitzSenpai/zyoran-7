import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JoinSection from "@/components/JoinSection";
import AdminCarousel from "@/components/AdminCarousel";
import GenerateNama from "@/components/GenerateNama";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <JoinSection />
      <AdminCarousel />
      <GenerateNama />
      <Footer />
    </div>
  );
};

export default Index;
