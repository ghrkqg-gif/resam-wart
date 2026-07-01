import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventSection from "@/components/EventSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <EventSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
