
import { Badge } from "@/components/ui/badge";
import { BrainCircuit } from "lucide-react";
import CheckListItem from "./CheckListItem";

const AiInterviewSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white rounded-lg p-8 relative order-2 md:order-1">
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium ml-3">Your AI Interview</h3>
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
            <h2 className="text-3xl font-heading font-bold mb-6">Complete Your AI-Powered Assessment</h2>
            <p className="text-gray-600 mb-6">
              Our advanced AI interviewer conducts your comprehensive assessment through a 
              conversational interface, evaluating:
            </p>
            <ul className="space-y-3">
              <CheckListItem text="Your technical proficiency through problem-solving scenarios" />
              <CheckListItem text="Your personality traits and emotional intelligence indicators" />
              <CheckListItem text="Your communication style and collaborative tendencies" />
              <CheckListItem text="Your problem-solving approaches and critical thinking" />
              <CheckListItem text="Your cultural fit indicators and work environment preferences" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiInterviewSection;
