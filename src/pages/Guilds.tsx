
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Users, Star, Filter, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const guildCategories = [
  {
    id: 'tech',
    name: 'Tech Guild',
    color: 'tech',
    description: 'Software developers, engineers, and IT specialists pre-vetted for technical excellence.',
    members: 542,
    tags: ['Full-stack', 'DevOps', 'Cloud', 'Mobile', 'AI/ML'],
    image: 'https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  },
  {
    id: 'creative',
    name: 'Creative Guild',
    color: 'creative',
    description: 'Designers, content creators, and creative professionals with proven portfolios and capabilities.',
    members: 384,
    tags: ['UI/UX', 'Graphic Design', 'Content', 'Video', 'Animation'],
    image: 'https://images.unsplash.com/photo-1580609e7e823dfe6cd5dcc5b796cd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  },
  {
    id: 'leadership',
    name: 'Leadership Guild',
    color: 'leadership',
    description: 'Project managers, executives, and team leaders with proven experience and leadership qualities.',
    members: 267,
    tags: ['Project Management', 'Team Leadership', 'Strategic Planning', 'Change Management'],
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  },
  {
    id: 'analytics',
    name: 'Analytics Guild',
    color: 'analytics', 
    description: 'Data analysts, scientists, and business intelligence experts with verified analytical skills.',
    members: 198,
    tags: ['Data Analysis', 'BI', 'Visualization', 'Statistics', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  },
  {
    id: 'marketing',
    name: 'Marketing Guild',
    color: 'marketing',
    description: 'Marketing specialists, growth hackers, and communication experts with proven track records.',
    members: 321,
    tags: ['Digital Marketing', 'Content Strategy', 'SEO/SEM', 'Social Media', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  },
  {
    id: 'customer',
    name: 'Customer Success Guild',
    color: 'tech',
    description: 'Customer support specialists, success managers, and service professionals focused on client satisfaction.',
    members: 289,
    tags: ['Customer Support', 'Account Management', 'Client Relations', 'User Experience'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
];

type GuildCardProps = {
  guild: {
    id: string;
    name: string;
    color: string;
    description: string;
    members: number;
    tags: string[];
    image: string;
  };
};

const GuildCard = ({ guild }: GuildCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div 
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${guild.image})` }}
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <Badge variant={guild.color as any}>
            <Users className="w-3 h-3 mr-1" /> {guild.members} Members
          </Badge>
        </div>
        <h3 className="text-xl font-bold mb-2">{guild.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {guild.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {guild.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <Button variant={guild.color as any} size="sm" asChild>
            <Link to={`/guilds/${guild.id}`}>
              Browse Talent
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to={`/guilds/${guild.id}/join`}>
              Join Guild
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Guilds = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredGuilds = searchQuery.trim() === '' 
    ? guildCategories 
    : guildCategories.filter(guild => 
        guild.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guild.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guild.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4">Talent Communities</Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Explore Our Guilds</h1>
            <p className="text-xl text-gray-600">
              Discover specialized communities of pre-vetted professionals organized by skills, 
              expertise, and work preferences.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search guilds..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} />
                Filter
                <ChevronDown size={16} />
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Star size={16} />
                Popular
                <ChevronDown size={16} />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuilds.map(guild => (
              <GuildCard key={guild.id} guild={guild} />
            ))}
          </div>

          {filteredGuilds.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No guilds matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Want to create a custom guild for your organization?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              We offer enterprise solutions to create private talent guilds tailored 
              to your organization's specific needs and hiring requirements.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Guilds;
