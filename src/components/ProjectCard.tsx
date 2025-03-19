import React from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image }) => {
  return (
    <div className="relative block aspect-video overflow-hidden rounded-lg">
      <a href="#" className="block h-full">
        <div className="relative h-full group">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <h3 className="absolute bottom-0 left-0 text-xl font-semibold text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            {title}
          </h3>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;