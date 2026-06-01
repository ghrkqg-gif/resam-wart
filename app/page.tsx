import HeroSection from "@/components/HeroSection";
import EventBanner from "@/components/EventBanner";
import AboutSection from "@/components/AboutSection";
import TypesSection from "@/components/TypesSection";
import WartSection from "@/components/WartSection";
import CompareSection from "@/components/CompareSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EventBanner />
      <AboutSection />
      <TypesSection />
      <WartSection />
      <CompareSection />
      <FAQSection />
      <PricingSection />
      <BeforeAfterSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
