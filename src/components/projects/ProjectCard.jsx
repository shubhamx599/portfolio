import React from 'react';
import { RiExternalLinkLine, RiGithubLine } from '@remixicon/react';

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card overflow-hidden group hover:border-yellow-400/50 transition-all duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden flex-1">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
          <a 
            href={project.liveUrl} 
            className="bg-yellow-400 text-black p-3 rounded-full hover:scale-110 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiExternalLinkLine size={20} />
          </a>
          <a 
            href={project.githubUrl} 
            className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubLine size={20} />
          </a>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-gray-800 text-yellow-400 text-xs px-3 py-1 rounded-full border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;