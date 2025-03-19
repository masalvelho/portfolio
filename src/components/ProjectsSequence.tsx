import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSequence: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 11000);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Smart Home Device",
      category: "Consumer Electronics",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000",
      description: "An innovative smart home controller with intuitive interface"
    },
    {
      title: "Sustainable Packaging",
      category: "Packaging Design",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000",
      description: "Eco-friendly packaging solution for consumer products"
    },
    {
      title: "Electric Vehicle Charging Station",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000",
      description: "Modern design for urban EV charging solutions"
    },
    {
      title: "Medical Device Interface",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
      description: "User-centered medical equipment interface design"
    }
  ];

  return (
    <div 
      className="fixed w-full px-4 z-40 md:w-auto md:left-4 md:top-32"
      style={{
        top: 'calc(var(--subtitle-bottom) + 2rem)',
        transform: `translateX(${isVisible ? '0' : '-100%'}) ${isVisible ? 'scale(1)' : 'scale(1)'}`,
        transformOrigin: 'top left',
        opacity: isVisible ? 1 : 0,
        transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="w-full md:w-[880px]">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              style={{
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSequence;