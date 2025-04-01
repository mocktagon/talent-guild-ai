
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import GuildShowcase from "@/components/home/GuildShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <Hero />
        <GuildShowcase />
        <HowItWorks />
        <Features />
        <Testimonials />
        <CallToAction />
      </div>
    </Layout>
  );
};

export default Index;
