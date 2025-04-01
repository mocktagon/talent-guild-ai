
import { Badge } from "@/components/ui/badge";
import { Gauge } from "lucide-react";
import CheckListItem from "./CheckListItem";

const GuildPlacementSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">Step 3</Badge>
            <h2 className="text-3xl font-heading font-bold mb-6">Receive Your Guild Placement</h2>
            <p className="text-gray-600 mb-6">
              Based on your comprehensive assessment results, you'll be placed into specialized 
              guilds that match your skills, expertise, and work style.
            </p>
            <ul className="space-y-3">
              <CheckListItem text="Join primary and secondary guild communities" />
              <CheckListItem text="Earn digital skill badges and endorsements based on your assessment" />
              <CheckListItem text="Showcase your detailed profile highlighting verified strengths" />
              <CheckListItem text="Get personalized growth recommendations for skill development" />
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-8 relative">
            <div className="bg-white rounded-lg shadow-md p-6 z-10 relative">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <Gauge className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium ml-3">Your Guild Placement</h3>
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
                    <span>Your Match Score</span>
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
                    <span>Your Match Score</span>
                    <span className="font-medium">76%</span>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-gray-100">
                  <h4 className="text-sm font-medium mb-2">Your Verified Skills</h4>
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
  );
};

export default GuildPlacementSection;
