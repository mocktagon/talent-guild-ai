
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import CheckListItem from "./CheckListItem";

const DiscoverySection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white rounded-lg p-8 relative order-2 md:order-1">
            <div className="z-10 relative">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium ml-3">Get Discovered</h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-600 mb-1">Tech Guild</p>
                    <p className="text-2xl font-bold text-guild-tech">542</p>
                    <p className="text-xs text-gray-500">Guild members</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-600 mb-1">Creative Guild</p>
                    <p className="text-2xl font-bold text-guild-creative">384</p>
                    <p className="text-xs text-gray-500">Guild members</p>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="text-sm font-medium mb-3">Company Search Filters</h4>
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
                      <h5 className="font-medium text-sm">You matched!</h5>
                      <p className="text-xs text-gray-600">CompanyA is looking for your skills • 92% Match</p>
                    </div>
                    <button className="ml-auto text-primary text-sm">View</button>
                  </div>
                  <div className="p-3 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-medium text-sm">You matched!</h5>
                      <p className="text-xs text-gray-600">CompanyB is looking for your skills • 88% Match</p>
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
            <h2 className="text-3xl font-heading font-bold mb-6">Get Discovered by Employers</h2>
            <p className="text-gray-600 mb-6">
              Recruiters and hiring managers can now find you in our pre-vetted talent pools, 
              allowing for efficient and targeted matching with your skills.
            </p>
            <ul className="space-y-3">
              <CheckListItem text="Your profile appears to companies searching for your verified skills" />
              <CheckListItem text="Companies can view your assessment results and skill verifications" />
              <CheckListItem text="Companies see your compatibility scores for team and culture fit" />
              <CheckListItem text="Receive direct connection requests from interested employers" />
              <CheckListItem text="Track your profile views and interest through your dashboard" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverySection;
