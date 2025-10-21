import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoBanner from "@/components/LogoBanner";
import CreativeSubscriptionSection from "@/components/CreativeSubscriptionSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import IndustryGoalSection from "@/components/IndustryGoalSection";
import GalleryPreview from "@/components/GalleryPreview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <LogoBanner />
      <CreativeSubscriptionSection />
      <AboutSection />
      <IndustryGoalSection />
      <ProcessSection />
      {/* <ValueProposition /> */}
      <GalleryPreview />
      {/* <ServicesSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
