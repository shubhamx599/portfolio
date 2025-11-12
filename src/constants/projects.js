// src/constants/projects.js
import project1 from '../assets/images/project-1.png';
import project2 from '../assets/images/project-2.png';
import project3 from '../assets/images/project-3.png';



export const PROJECTS = [
  {
    id: 1,
    title: "Nexus Arena",
    description: "A Modern Online Gaming Tournaments & Community website.",
    image: project1,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "GSAP"],
    liveUrl: "https://nexusarena.vercel.app/",
    githubUrl: "https://github.com/shubhamx599/nexusarena"
  },
  {
    id: 2,
    title: "AIWay", 
    description: "Discover the perfect AI courses across top platforms. Compare prices, curriculum, and reviews.",
    image: project2,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "GSAP", "Fuse.js"],
    liveUrl: "https://aiway.vercel.app/", 
    githubUrl: "https://github.com/shubhamx599/aiway"
  },
  {
    id: 3,
    title: "DAM Craft Events",
    description: "A modern event management website for DAM Craft Events, featuring event details, galleries, highlights, and more.",
    image: project3,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "GSAP", "Lenis", "ScrollTrigger", "Split Type"],
    liveUrl: "https://damcraftevents.vercel.app/",
    githubUrl: "https://github.com/shubhamx599/damcraftevents"
  },
];