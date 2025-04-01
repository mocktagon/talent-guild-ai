
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">Your Journey</Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">How Project Guild Works For You</h1>
          <p className="text-xl text-gray-600">
            Our AI-powered platform revolutionizes your job search experience, placing you in 
            specialized guilds to showcase your professional talents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
