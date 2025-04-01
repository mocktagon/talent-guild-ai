
import { Badge } from "@/components/ui/badge";
import { UsersRound } from "lucide-react";
import CheckListItem from "./CheckListItem";

const ProfileCreationSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">Step 1</Badge>
            <h2 className="text-3xl font-heading font-bold mb-6">Create Your Comprehensive Profile</h2>
            <p className="text-gray-600 mb-6">
              Begin your journey by creating your detailed profile. You'll provide information about:
            </p>
            <ul className="space-y-3">
              <CheckListItem text="Your professional experience and work history" />
              <CheckListItem text="Your technical skills and specialized capabilities" />
              <CheckListItem text="Your educational background and certifications" />
              <CheckListItem text="Your personal interests and work preferences" />
              <CheckListItem text="Your portfolio samples and previous work" />
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-8 relative">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <UsersRound className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium ml-3">Your Profile</h3>
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
                  <p className="text-xs text-right text-gray-500 mt-1">Your profile 67% complete</p>
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

export default ProfileCreationSection;
