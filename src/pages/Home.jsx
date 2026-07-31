import Hero from "../components/sections/Hero";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import ServicesSection from "../components/sections/ServicesSection";
import SkillsPreview from "../components/sections/SkillsPreview";
import CTASection from "../components/sections/CTASection";
import SocialRail from "../components/sections/SocialRail";

export default function Home() {
  return (
    <>
      <SocialRail />
      <Hero />
      <FeaturedProjects />
      <ServicesSection />
      <SkillsPreview />
      <CTASection />
    </>
  );
}