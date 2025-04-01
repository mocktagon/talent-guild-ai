
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Building2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-md bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
            PG
          </div>
          <span className="text-xl font-heading font-bold">Project Guild</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/guilds" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Guilds
          </Link>
          <Link to="/how-it-works" className="font-medium text-gray-700 hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <Link to="/" className="font-medium text-gray-700 hover:text-primary transition-colors py-2">
              Home
            </Link>
            <Link to="/guilds" className="font-medium text-gray-700 hover:text-primary transition-colors py-2">
              Guilds
            </Link>
            <Link to="/how-it-works" className="font-medium text-gray-700 hover:text-primary transition-colors py-2">
              How It Works
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-primary transition-colors py-2">
              About
            </Link>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/login">
                  <User size={16} className="mr-2" />
                  Log In
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link to="/signup">
                  <Building2 size={16} className="mr-2" />
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
