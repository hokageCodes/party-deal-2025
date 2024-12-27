// import ClientLogos from "./components/ClientLogos";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQsSection";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenusSection";
import OurServices from "./components/OurServices";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      <FAQSection />
      {/* <MenuSection /> */}
      <ContactSection />
      {/* <ClientLogos /> */}
    </>
  );
}
