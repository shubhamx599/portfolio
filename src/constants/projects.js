// src/constants/projects.js
import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.png';
import project3 from '../assets/images/project-3.jpg';
import project4 from '../assets/images/project-4.png';
import project5 from '../assets/images/project-5.png';
import project6 from '../assets/images/project-6.png';


export const PROJECTS = [
  {
    id: 1,
    title: "Finance Dashboard",
    description: "A modern financial dashboard with real-time analytics and interactive charts",
    image: project1,
    technologies: ["React", "Tailwind CSS", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Orizon E-commerce", 
    description: "Full-featured e-commerce platform with cart and payment integration",
    image: project2,
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "#", 
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Fundo Learning",
    description: "Educational platform with course management and progress tracking",
    image: project3,
    technologies: ["React", "Firebase", "Material UI"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Brawlhalla Gaming",
    description: "Gaming community platform with tournament management",
    image: project4,
    technologies: ["React", "Socket.io", "Express"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "DSM Design System",
    description: "Comprehensive design system with reusable components",
    image: project5,
    technologies: ["React", "Storybook", "Figma"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "MetaSpark Social",
    description: "Social media platform with real-time messaging",
    image: project6,
    technologies: ["React", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  }
];