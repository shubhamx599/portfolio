import { PROJECTS } from '../constants/projects';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  return (
    <div className="glass-card p-6 animate-fade-in-up">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold text-white">
          <span className="text-gradient-gold">Portfolio</span>
        </h2>
        <p className="text-gray-400 mt-2">Some of my recent projects and experiments</p>
      </header>

      <section className="projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;