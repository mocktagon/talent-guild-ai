
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import GuildShowcase from "@/components/home/GuildShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <GuildShowcase />
      <HowItWorks />
      <Features />
      <Testimonials />
    </Layout>
  );
};

export default Index;
