
import { Badge } from "@/components/ui/badge";
import { 
  BrainCircuit, 
  UserCheck, 
  Network, 
  BarChart4, 
  Users, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "AI-Powered Interviews",
    description: "Our intelligent system evaluates technical abilities, soft skills, and work preferences through conversational assessments."
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "Comprehensive Vetting",
    description: "Candidates are thoroughly assessed across multiple dimensions including technical expertise, personality traits, and communication style."
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "Smart Guild Organization",
    description: "Talent is categorized into specialized guilds based on their strengths, making it easy to find the perfect match."
  },
  {
    icon: <BarChart4 className="h-6 w-6" />,
    title: "Insightful Analytics",
    description: "Access detailed profiles with skill breakdowns, personality assessments, and fit indicators for informed hiring decisions."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Guild Communities",
    description: "Professionals connect with peers in their guild, fostering collaboration and knowledge sharing within their specialty."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Verified Capabilities",
    description: "Every guild member's skills are verified through our assessment process, ensuring quality and accuracy."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">Platform Capabilities</Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Powerful Features for Better Talent Matching
          </h2>
          <p className="text-gray-600 text-lg">
            Project Guild's innovative platform offers a range of tools and capabilities 
            designed to transform how organizations discover and connect with talent.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/20 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
