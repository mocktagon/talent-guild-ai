
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Project Guild completely transformed our hiring process. The quality of candidates from their pre-vetted guilds saved us countless hours of screening and interviews.",
    name: "Sarah Johnson",
    title: "VP of Talent Acquisition",
    company: "TechNova Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    quote: "The AI assessment process was thorough yet conversational. I was placed in the Tech Guild and have received relevant job opportunities that actually match my skill set.",
    name: "David Chen",
    title: "Senior Software Engineer",
    company: "Previously at CloudScale",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    quote: "As a startup founder, finding the right talent quickly is crucial. Project Guild's Leadership Guild provided us with pre-vetted product managers who understood our vision.",
    name: "Amara Okafor",
    title: "CEO & Co-founder",
    company: "Innovate Health",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Trusted by Companies and Professionals
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from recruiters who found exceptional talent and professionals who 
            joined specialized guilds through our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
