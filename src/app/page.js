import FeaturesPage from "@/components/pages/FeaturesPage";
import FeedbackPage from "@/components/pages/FeedbackPage";
import LandingPage from "@/components/pages/LandingPage";
import ServicesPage from "@/components/pages/ServicesPage";

export default function Home() {
  return (
    <div className="relative">
      <LandingPage />
      <FeaturesPage />
      <ServicesPage />
      <FeedbackPage />
    </div>
  );
}
