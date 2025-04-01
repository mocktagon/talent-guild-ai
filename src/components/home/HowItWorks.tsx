
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">Simple Process</Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            How Project Guild Works For You
          </h2>
          <p className="text-gray-600 text-lg">
            Our AI-powered platform streamlines your talent assessment and matching, 
            placing you in specialized guilds of pre-vetted professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-md relative">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Create Your Profile</h3>
            <p className="text-gray-600">
              Start by creating your profile, highlighting your experience, 
              skills, and career preferences.
            </p>
            <div className="absolute top-0 right-0 h-1 w-1/3 bg-primary rounded-tr-xl"></div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md relative">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Interview</h3>
            <p className="text-gray-600">
              Complete your personalized AI assessment of technical skills, 
              personality traits, and work preferences.
            </p>
            <div className="absolute top-0 right-0 h-1 w-1/3 bg-secondary rounded-tr-xl"></div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md relative">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Join Your Guild</h3>
            <p className="text-gray-600">
              Based on your assessment results, you'll join a specialized 
              guild that matches your verified capabilities.
            </p>
            <div className="absolute top-0 right-0 h-1 w-1/3 bg-primary rounded-tr-xl"></div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md relative">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="text-xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Get Discovered</h3>
            <p className="text-gray-600">
              Companies access your pre-vetted profile, organized by skill, 
              specialty, and experience level.
            </p>
            <div className="absolute top-0 right-0 h-1 w-1/3 bg-secondary rounded-tr-xl"></div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to experience the future of talent matching?
              </h3>
              <p className="text-white/90 mb-6">
                Join Project Guild today and discover how our AI-powered platform 
                can transform your job search experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link to="/signup?as=candidate">
                    Join Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <Link to="/signup?as=recruiter">
                    Recruiter Access
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    </div>
                    <div className="text-sm">Your AI Assessment</div>
                    <div className="ml-auto bg-white/20 text-xs rounded-full px-2 py-1">98% Complete</div>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full w-[98%]"></div>
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-sm">Guild Placement Complete</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg font-semibold">Tech Guild</div>
                    <div className="ml-auto bg-white text-primary text-sm font-medium rounded-full px-2 py-1">Full-Stack Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
