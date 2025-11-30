
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import smartAIassistant from '@/assets/projects/smartassistant.png';
import calleva from '@/assets/projects/calleva.png';
import electconnect from '@/assets/projects/electconnect.png';
import foodzup from '@/assets/projects/foodzup.png';
import oxafrica from '@/assets/projects/ox.jpg';
import chopmoney from '@/assets/projects/chopmoney.png';
import gsemonitor from '@/assets/projects/gsemonitor.png';
import ai from '@/assets/projects/ai.png';
import lta from '@/assets/projects/manager.png';

const projectCategories = ['All', 'AI', 'Full Stack', 'Cloud & DevOps', 'Mobile', 'UI/UX'];

const projects = [
  {
    id: 1,
    title: 'Artificial Intelligence',
    description: 'Leveraging AI technologies to create intelligent solutions that enhance task automations.',
    image: ai,
    categories: ['AI', 'Full Stack'],
    techStack: ['OpenAI API', 'Figma', 'React', 'Node.js'],
    private: true,
    liveDemo: 'https://purplewave.com'
  },
  {
    id: 2,
    title: 'Real-time Analytics',
    description: 'Data processing and consolidation to deliver dynamic analytics and insights through interactive dashboards.',
    image: gsemonitor,
    categories: ['Full Stack', 'Mobile', 'UI/UX'],
    techStack: ['React', 'Node.js', 'WebSockets', '.Net', 'Azure', 'Flutter', 'MySQL'],
    private: false,
    liveDemo: 'https://gsemonitor.chopmoney.co'
  },
  {
    id: 3,
    title: 'Cross-Platform Mobile Apps',
    description: 'Feature-rich mobile applications that runs seamlessly on iOS and Android with a shared codebase.',
    image: foodzup,
    categories: ['Mobile', 'UI/UX', 'Cloud & DevOps'],
    techStack: ['Flutter', 'Firebase', 'Figma', 'GCP', 'Linux'],
    private: true,
    liveDemo: 'https://tech231liberialtd.com'
  },
  {
    id: 4,
    title: 'Fintech Solutions',
    description: 'Secure and scalable financial applications designed to streamline transactions and enhance user experience.',
    image: chopmoney,
    categories: ['Full Stack', 'UI/UX', 'Cloud & DevOps'],
    techStack: ['MongoDB', 'React', 'Node', 'MicroServices', 'Express'],
    private: false,
    liveDemo: 'https://app.chopmoney.co'
  },
  {
    id: 5,
    title: 'Enterprise Management Systems',
    description: 'Comprehensive solutions to optimize business operations, resource planning, and workflow management.',
    image: oxafrica,
    categories: ['Full Stack', 'UI/UX', 'Cloud & DevOps'],
    techStack: ['React', 'Springboot', 'Java', 'Postgres', 'Docker'],
    private: true,
    liveDemo: 'https://purplewave.com'
  },
  {
    id: 6,
    title: 'Government Digital Transformation',
    description: 'Enhance service delivery and citizen engagement through digital transformation.',
    image: electconnect,
    categories: ['Full Stack', 'Cloud & DevOps', 'UI/UX'],
    techStack: ['Github Actions', 'React', 'Lunacy'],
    private: true,
    liveDemo: 'https://tech231liberialtd.com'
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore my recent work across different domains and technologies.
            Each project showcases my problem-solving approach and technical expertise.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeCategory === category 
                  ? 'bg-primary text-white shadow-md shadow-primary/20' 
                  : 'bg-background hover:bg-background/80 text-foreground/70'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
