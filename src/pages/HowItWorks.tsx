
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/how-it-works/HeroSection";
import ProfileCreationSection from "@/components/how-it-works/ProfileCreationSection";
import AiInterviewSection from "@/components/how-it-works/AiInterviewSection";
import GuildPlacementSection from "@/components/how-it-works/GuildPlacementSection";
import DiscoverySection from "@/components/how-it-works/DiscoverySection";
import CtaSection from "@/components/how-it-works/CtaSection";

const HowItWorks = () => {
  return (
    <Layout>
      <HeroSection />
      <ProfileCreationSection />
      <AiInterviewSection />
      <GuildPlacementSection />
      <DiscoverySection />
      <CtaSection />
    </Layout>
  );
};

export default HowItWorks;
