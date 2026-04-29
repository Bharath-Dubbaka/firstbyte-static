import Hero from "../components/Hero";
import EnhancedMenuSystem from "../components/ui/EnhancedMenuSystem";
import HowItWorks from "./HowItWorks";
import TestimonialsSection from "../components/ui/TestimonialsSection";
import BookUs from "./BookUs";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 overflow-hidden">
        <Hero />
        <EnhancedMenuSystem />
        {/* <HowItWorks /> */}
        <BookUs />
        <TestimonialsSection />
      </div>
    </div>
  );
}
