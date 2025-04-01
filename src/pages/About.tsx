
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import { GraduationCap, Award, Users, Target, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Story</Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Project Guild</h1>
            <p className="text-xl text-gray-600">
              We're building the future of talent discovery and professional communities 
              through AI-powered assessment and guild organization.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl font-heading font-bold mb-6">Transforming How Talent Connects with Opportunity</h2>
              <p className="text-gray-600 mb-6">
                Project Guild was founded on a simple but powerful belief: the traditional 
                hiring process is broken for both employers and job seekers.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to create specialized communities of pre-vetted professionals 
                organized by verified skills and capabilities. By using AI to thoroughly 
                assess candidates across multiple dimensions, we build talent guilds that 
                make the hiring process more efficient, transparent, and meaningful.
              </p>
              <p className="text-gray-600">
                We're committed to helping professionals find opportunities that truly match 
                their skills and preferences, while giving employers access to high-quality 
                talent pools where capabilities have been independently verified.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <GraduationCap className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Comprehensive Assessment</h3>
                  <p className="text-gray-600">Evaluating technical skills, soft skills, and work preferences</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <Award className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Verified Capabilities</h3>
                  <p className="text-gray-600">Every skill and qualification is objectively verified</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Guild Communities</h3>
                  <p className="text-gray-600">Specialized talent communities for targeted hiring</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Precision Matching</h3>
                  <p className="text-gray-600">Connecting the right talent with the right opportunities</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-teal-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">Core Values</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              The Principles That Guide Us
            </h2>
            <p className="text-gray-600 text-lg">
              At Project Guild, our work is guided by a set of core values that shape 
              our platform, our decisions, and our relationships with all stakeholders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trust & Transparency</h3>
              <p className="text-gray-600">
                We believe in building trust through transparent assessment processes 
                and honest communication. Every skill verification and guild placement 
                is backed by objective data.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Diverse Perspectives</h3>
              <p className="text-gray-600">
                We're committed to creating an inclusive platform that celebrates 
                diverse backgrounds, experiences, and perspectives. Our assessment 
                process is designed to reduce bias and focus on capabilities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Growth</h3>
              <p className="text-gray-600">
                We foster professional communities where members can grow, share knowledge, 
                and develop their skills. Our guilds are more than talent pools—they're 
                communities of practice.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">Leadership Team</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg">
              Project Guild is built by a diverse team of experts in AI, recruitment, 
              organizational psychology, and technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square mb-6 rounded-full overflow-hidden mx-auto w-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Michael Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-primary font-medium mb-2">CEO & Co-founder</p>
              <p className="text-gray-600">
                Former tech executive with 15+ years of experience in talent acquisition and AI.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square mb-6 rounded-full overflow-hidden mx-auto w-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Dr. Sophia Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Sophia Rodriguez</h3>
              <p className="text-primary font-medium mb-2">CTO & Co-founder</p>
              <p className="text-gray-600">
                AI researcher with expertise in natural language processing and assessment systems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square mb-6 rounded-full overflow-hidden mx-auto w-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                  alt="David Washington"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">David Washington</h3>
              <p className="text-primary font-medium mb-2">Head of Guild Development</p>
              <p className="text-gray-600">
                Organizational psychologist specializing in professional communities and skill assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Join Us</Badge>
              <h2 className="text-3xl font-heading font-bold mb-6">Be Part of the Future of Work</h2>
              <p className="text-gray-600 mb-6">
                Project Guild is more than a platform—it's a movement to transform how people 
                find meaningful work opportunities and how organizations discover exceptional talent.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're a professional looking to join a guild or an organization looking 
                to access pre-vetted talent pools, we invite you to be part of our growing community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/signup?as=candidate">Join as Candidate</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/signup?as=recruiter">Recruiter Access</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 min-h-[150px]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
