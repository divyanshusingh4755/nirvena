import CategoryGrid from "./layouts/Category";
import FAQ from "./layouts/FAQ";
import Footer from "./layouts/Footer";
// import FloatingPlayer from "./layouts/FloatingPlayer";
import HeroSection from "./layouts/HeroSection";
import Navbar from "./layouts/Navbar";
import NirvenaForBusiness from "./layouts/NirvenaForBusiness";
import PricingTransparency from "./layouts/PricingTransparency";
import ProfessionalGrid from "./layouts/ProfessionalGrid";
import QuickExit from "./layouts/QuickExit";
import ResourceHub from "./layouts/ResourceHub";
import Roadmap from "./layouts/Roadmap";
import Testimonials from "./layouts/Testimonials";
import TrustRibbon from "./layouts/TrustRibbon";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CategoryGrid />
        <TrustRibbon />
        <PricingTransparency />
        <Roadmap />
        <ProfessionalGrid />
        <Testimonials />
        <ResourceHub />
        <FAQ />
        <NirvenaForBusiness />
        <Footer />
      </main>
      <QuickExit />
      {/* <FloatingPlayer /> */}
    </>
  )
}

export default App
