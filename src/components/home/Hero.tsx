
import { ArrowRight, Check, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50/80 to-teal-50/90 py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-secondary/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <div className="inline-block px-4 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm animate-fade-in">
              Next-Generation Talent Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-gray-900 leading-tight animate-slide-in">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI-Powered</span> Talent Matching for the Future of Work
            </h1>
            
            <p className="text-lg text-gray-700 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Project Guild uses artificial intelligence to pre-vet candidates and organize them into specialized 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium"> Guilds</span>, making talent discovery more efficient and meaningful.
            </p>
            
            <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-start">
                <div className="mt-1 p-0.5 bg-gradient-to-r from-primary to-secondary rounded-full">
                  <div className="bg-white dark:bg-gray-900 rounded-full p-0.5">
                    <Check className="text-secondary w-4 h-4" />
                  </div>
                </div>
                <span className="ml-3 text-gray-700">Comprehensive assessment of technical skills, soft skills, and work preferences</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 p-0.5 bg-gradient-to-r from-primary to-secondary rounded-full">
                  <div className="bg-white dark:bg-gray-900 rounded-full p-0.5">
                    <Check className="text-secondary w-4 h-4" />
                  </div>
                </div>
                <span className="ml-3 text-gray-700">Smart categorization into relevant industry and skill-based guilds</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 p-0.5 bg-gradient-to-r from-primary to-secondary rounded-full">
                  <div className="bg-white dark:bg-gray-900 rounded-full p-0.5">
                    <Check className="text-secondary w-4 h-4" />
                  </div>
                </div>
                <span className="ml-3 text-gray-700">Access pre-vetted talent pools with verified capabilities</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button size="xl" variant="gradient" className="group" asChild>
                <Link to="/signup?as=candidate">
                  Join as Candidate
                  <PlusCircle className="ml-2 h-5 w-5 transition-transform group-hover:rotate-90" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="group border-2" asChild>
                <Link to="/signup?as=recruiter">
                  Recruiter Access
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="relative z-10 glass-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold ml-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Interviewer</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-100/80 backdrop-blur-sm rounded-2xl p-4 flex animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mr-3 shrink-0">
                    AI
                  </div>
                  <p className="text-gray-700">Tell me about a challenging project you led and how you ensured its success.</p>
                </div>
                
                <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-4 flex animate-fade-in" style={{animationDelay: '0.7s'}}>
                  <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0 overflow-hidden mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full p-1.5 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">I led the redesign of our company's customer portal, coordinating across three teams...</p>
                </div>
                
                <div className="bg-gray-100/80 backdrop-blur-sm rounded-2xl p-4 flex animate-fade-in" style={{animationDelay: '0.8s'}}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mr-3 shrink-0">
                    AI
                  </div>
                  <p className="text-gray-700">How do you approach conflicts within your team?</p>
                </div>
                
                <div className="flex items-center justify-between mt-4 animate-fade-in" style={{animationDelay: '0.9s'}}>
                  <div className="h-2 bg-gray-200 rounded-full w-3/4 overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full w-2/3"></div>
                  </div>
                  <span className="text-sm text-gray-500">2/3</span>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-8 right-16 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-12 -left-8 w-40 h-40 bg-secondary rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
