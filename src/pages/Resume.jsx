import React from 'react';
import { RiBriefcaseLine, RiGraduationCapLine, RiAwardLine } from '@remixicon/react';
import { EXPERIENCE } from '../constants/experience';
import { EDUCATION } from '../constants/education';
import { CERTIFICATIONS } from '../constants/certifications';
import ExperienceItem from '../components/ExperienceItem';
import EducationItem from '../components/EducationItem';
import CertificationItem from '../components/CertificationItem';
import SkillBar from '../components/SkillBar';

const Resume = () => {
  const skills = [
    { name: 'HTML / CSS / JS', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 95 },
    { name: 'GSAP / Framer Motion', percentage: 75 },
    { name: 'UI/UX Design', percentage: 90 },
    { name: 'Graphic Design', percentage: 96 }
  ];

  return (
    <div className="glass-card p-6 animate-fade-in-up">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold text-white">
          <span className="text-gradient-gold">Resume</span>
        </h2>
      </header>

      {/* Experience */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="icon-box">
            <RiBriefcaseLine size={20} />
          </div>
          <h3 className="text-xl font-semibold text-white">Experience</h3>
        </div>

        <div className="space-y-6">
          {EXPERIENCE.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="icon-box">
            <RiGraduationCapLine size={20} />
          </div>
          <h3 className="text-xl font-semibold text-white">Education</h3>
        </div>

        <div className="space-y-6">
          {EDUCATION.map((edu) => (
            <EducationItem key={edu.id} education={edu} />
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="icon-box">
            <RiAwardLine size={20} />
          </div>
          <h3 className="text-xl font-semibold text-white">Certifications</h3>
        </div>

        <div className="space-y-4">
          {CERTIFICATIONS.map((cert) => (
            <CertificationItem key={cert.id} certification={cert} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-6">
          <span className="text-gradient-gold">My Skills</span>
        </h3>

        <div className="space-y-4">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;