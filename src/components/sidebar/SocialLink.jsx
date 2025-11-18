import React from 'react';
import { RiLinkedinBoxFill, RiGithubLine, RiTwitterXLine } from '@remixicon/react';

const SocialLink = ({ href, name }) => {
  const getIcon = () => {
    switch (name) {
      case 'LinkedIn':
        return <RiLinkedinBoxFill size={20} />;
      case 'GitHub':
        return <RiGithubLine size={20} />;
      case 'Twitter':
        return <RiTwitterXLine size={20} />;
      default:
        return null;
    }
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 hover:transform-[scale(1.1)] transition-all duration-300"
      aria-label={`Visit my ${name}`}
    >
      {getIcon()}
    </a>
  );
};

export default SocialLink;