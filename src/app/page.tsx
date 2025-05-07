import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoBanner from "@/components/LogoBanner";
import AboutSection from "@/components/AboutSection";
import ValueProposition from "@/components/ValueProposition";
import ArtworkSection from "@/components/ArtworkSection";
import VideosSection from "@/components/VideosSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ClientPromoPopup from "@/components/ClientPromoPopup";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <LogoBanner />
      <AboutSection />
      <ProcessSection />
      <ValueProposition />
      <ArtworkSection />
      <VideosSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <ClientPromoPopup />
    </main>
  );
}
