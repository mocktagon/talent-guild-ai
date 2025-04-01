
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const guildCategories = [
  {
    id: 'tech',
    name: 'Tech Guild',
    color: 'tech',
    description: 'Software developers, engineers, and IT specialists pre-vetted for technical excellence.',
    members: 542,
    skills: ['Full-stack Development', 'DevOps', 'Cloud Architecture', 'Mobile Development', 'AI/ML'],
    image: 'https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  },
  {
    id: 'creative',
    name: 'Creative Guild',
    color: 'creative',
    description: 'Designers, content creators, and creative professionals with proven portfolios and capabilities.',
    members: 384,
    skills: ['UI/UX Design', 'Graphic Design', 'Content Creation', 'Video Production', 'Animation'],
    image: 'https://images.unsplash.com/photo-1580609e7e823dfe6cd5dcc5b796cd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  },
  {
    id: 'leadership',
    name: 'Leadership Guild',
    color: 'leadership',
    description: 'Project managers, executives, and team leaders with proven experience and leadership qualities.',
    members: 267,
    skills: ['Project Management', 'Team Leadership', 'Strategic Planning', 'Change Management', 'Stakeholder Communication'],
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  },
  {
    id: 'analytics',
    name: 'Analytics Guild',
    color: 'analytics', 
    description: 'Data analysts, scientists, and business intelligence experts with verified analytical skills.',
    members: 198,
    skills: ['Data Analysis', 'Business Intelligence', 'Data Visualization', 'Statistical Analysis', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  },
  {
    id: 'marketing',
    name: 'Marketing Guild',
    color: 'marketing',
    description: 'Marketing specialists, growth hackers, and communication experts with proven track records.',
    members: 321,
    skills: ['Digital Marketing', 'Content Strategy', 'SEO/SEM', 'Social Media', 'Marketing Analytics'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  },
];

const GuildShowcase = () => {
  const [activeGuild, setActiveGuild] = useState(guildCategories[0]);

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">Specialized Communities</Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Discover Our Talent Guilds
          </h2>
          <p className="text-gray-600 text-lg">
            Our AI assessment places candidates in specialized guilds based on their skills, 
            experience, and work preferences, creating focused talent pools for targeted recruitment.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {guildCategories.map((guild) => (
            <button
              key={guild.id}
              onClick={() => setActiveGuild(guild)}
              className={`
                px-6 py-3 rounded-full font-medium text-sm transition-all
                ${activeGuild.id === guild.id 
                  ? `bg-guild-${guild.color} text-white shadow-md` 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
            >
              {guild.name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <Badge variant={activeGuild.color as any} className="mb-4">
                  {activeGuild.members} Pre-vetted Members
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeGuild.name}</h3>
                <p className="text-gray-600 mb-6">
                  {activeGuild.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="font-medium mb-3">Top Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeGuild.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant={activeGuild.color as any} asChild>
                  <Link to={`/guilds/${activeGuild.id}`}>
                    Browse Talent
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to={`/guilds/${activeGuild.id}/join`}>
                    Apply to Join
                  </Link>
                </Button>
              </div>
            </div>
            
            <div 
              className="h-64 md:h-auto bg-cover bg-center"
              style={{ backgroundImage: `url(${activeGuild.image})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuildShowcase;
