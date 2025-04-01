
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import { BrainCircuit, UsersRound, Gauge, Globe, GraduationCap, Award } from "lucide-react";

const HowItWorks = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Process</Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">How Project Guild Works</h1>
            <p className="text-xl text-gray-600">
              Our AI-powered platform revolutionizes talent assessment and matching, creating 
              specialized guilds of pre-vetted professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Step 1</Badge>
              <h2 className="text-3xl font-heading font-bold mb-6">Comprehensive Candidate Registration</h2>
              <p className="text-gray-600 mb-6">
                The journey begins with a detailed profile creation process. Candidates provide information about:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Professional experience and work history</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Technical skills and specialized capabilities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Educational background and certifications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Personal interests and work preferences</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Portfolio samples and previous work</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 relative">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <UsersRound className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-medium ml-3">Candidate Profile</h3>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Full Name</label>
                      <p className="font-medium">Alex Morgan</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Years of Experience</label>
                      <p className="font-medium">6 years</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Primary Role</label>
                    <p className="font-medium">Full-Stack Developer</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Top Skills</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Node.js</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">TypeScript</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-primary rounded-full w-2/3"></div>
                    </div>
                    <p className="text-xs text-right text-gray-500 mt-1">Profile 67% complete</p>
                  </div>
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
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-lg p-8 relative order-2 md:order-1">
              <div className="bg-primary/5 rounded-lg p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <BrainCircuit className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-medium ml-3">AI Interview</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-4 flex">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mr-3 shrink-0">
                      AI
                    </div>
                    <p className="text-gray-700">Describe a challenging technical problem you solved recently.</p>
                  </div>
                  
                  <div className="bg-primary/5 rounded-lg p-4 flex">
                    <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0 overflow-hidden mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full p-1.5 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">I encountered an issue with API performance where response times were exceeding 3 seconds...</p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4 flex">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mr-3 shrink-0">
                      AI
                    </div>
                    <p className="text-gray-700">How do you approach learning new technologies?</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-full"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full"></div>
            </div>
            
            <div className="order-1 md:order-2">
              <Badge variant="secondary" className="mb-4">Step 2</Badge>
              <h2 className="text-3xl font-heading font-bold mb-6">AI-Powered Assessment</h2>
              <p className="text-gray-600 mb-6">
                Our advanced AI interviewer conducts a comprehensive assessment through a 
                conversational interface, evaluating:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Technical proficiency through problem-solving scenarios</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Personality traits and emotional intelligence indicators</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Communication style and collaborative tendencies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Problem-solving approaches and critical thinking</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Cultural fit indicators and work environment preferences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Step 3</Badge>
              <h2 className="text-3xl font-heading font-bold mb-6">Guild Placement & Profile Enhancement</h2>
              <p className="text-gray-600 mb-6">
                Based on the comprehensive assessment results, candidates are placed into specialized 
                guilds that match their skills, expertise, and work style.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Placement in primary and secondary guild communities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Digital skill badges and endorsements based on assessment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Detailed profile highlighting verified strengths and capabilities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Personalized growth recommendations for skill development</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 relative">
              <div className="bg-white rounded-lg shadow-md p-6 z-10 relative">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <Gauge className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-medium ml-3">Guild Placement Results</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Primary Guild</span>
                      <span className="bg-guild-tech text-white text-xs px-2 py-1 rounded-full">Tech Guild</span>
                    </div>
                    <div className="mt-2 h-3 bg-gray-200 rounded-full">
                      <div className="h-3 bg-guild-tech rounded-full" style={{width: '92%'}}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>Match Score</span>
                      <span className="font-medium">92%</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Secondary Guild</span>
                      <span className="bg-guild-analytics text-white text-xs px-2 py-1 rounded-full">Analytics Guild</span>
                    </div>
                    <div className="mt-2 h-3 bg-gray-200 rounded-full">
                      <div className="h-3 bg-guild-analytics rounded-full" style={{width: '76%'}}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>Match Score</span>
                      <span className="font-medium">76%</span>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-100">
                    <h4 className="text-sm font-medium mb-2">Verified Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        React
                      </span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Node.js
                      </span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        API Design
                      </span>
                    </div>
                  </div>
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
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-lg p-8 relative order-2 md:order-1">
              <div className="z-10 relative">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-medium ml-3">Recruiter Dashboard</h3>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <p className="text-sm text-gray-600 mb-1">Tech Guild</p>
                      <p className="text-2xl font-bold text-guild-tech">542</p>
                      <p className="text-xs text-gray-500">Pre-vetted members</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 text-center">
                      <p className="text-sm text-gray-600 mb-1">Creative Guild</p>
                      <p className="text-2xl font-bold text-guild-creative">384</p>
                      <p className="text-xs text-gray-500">Pre-vetted members</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-3">Search Filters</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded flex items-center">
                        Tech Guild
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded flex items-center">
                        React
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded flex items-center">
                        3+ Years Exp.
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg divide-y">
                    <div className="p-3 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-medium text-sm">Alex Morgan</h5>
                        <p className="text-xs text-gray-600">Full-Stack Developer • 92% Match</p>
                      </div>
                      <button className="ml-auto text-primary text-sm">View</button>
                    </div>
                    <div className="p-3 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-medium text-sm">Jamie Lee</h5>
                        <p className="text-xs text-gray-600">Frontend Developer • 88% Match</p>
                      </div>
                      <button className="ml-auto text-primary text-sm">View</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full"></div>
            </div>
            
            <div className="order-1 md:order-2">
              <Badge variant="secondary" className="mb-4">Step 4</Badge>
              <h2 className="text-3xl font-heading font-bold mb-6">Recruiter Discovery & Connection</h2>
              <p className="text-gray-600 mb-6">
                Recruiters and hiring managers gain access to pre-vetted talent pools organized by guild, 
                allowing for efficient and targeted candidate discovery.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Browse guild members filtered by verified skills and experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Access detailed assessment results and skill verifications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>View compatibility scores for potential team and culture fit</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Initiate connections with promising candidates directly</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span>Track engagement and hiring activities through the dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ready to Experience Project Guild?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join our platform today and discover how AI-powered talent matching 
              can transform your hiring or job search experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/signup?as=candidate" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Join as Candidate
              </a>
              <a 
                href="/signup?as=recruiter" 
                className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Recruiter Access
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
