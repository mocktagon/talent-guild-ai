
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 shadow-inner">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/b604b428-253e-4dd1-bd95-9ac53049c321.png" 
                alt="Project Guild Logo" 
                className="h-10"
              />
            </Link>
            <p className="text-gray-600 mb-4">
              AI-powered talent matching platform organizing professionals into specialized guilds.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-900">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/guilds" className="text-gray-600 hover:text-primary transition-colors">
                  Browse Guilds
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Project Guild
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-900">For Candidates</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/signup?as=candidate" className="text-gray-600 hover:text-primary transition-colors">
                  Join a Guild
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                  AI Assessment Process
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                  Build Your Profile
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-900">For Recruiters</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/signup?as=recruiter" className="text-gray-600 hover:text-primary transition-colors">
                  Access Talent Guilds
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                  Search Pre-vetted Talent
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Project Guild. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
