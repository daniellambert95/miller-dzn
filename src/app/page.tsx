import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoBanner from "@/components/LogoBanner";
import AboutSection from "@/components/AboutSection";
import ValueProposition from "@/components/ValueProposition";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import GalleryPreview from "@/components/GalleryPreview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
// import ClientPromoPopup from "@/components/ClientPromoPopup";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <LogoBanner />
      <AboutSection />
      <ProcessSection />
      <ValueProposition />
      <GalleryPreview />
      <ServicesSection />
      <ContactSection />
      <Footer />
      {/* <ClientPromoPopup /> */}
    </main>
  );
}
