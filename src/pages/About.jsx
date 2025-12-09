import React from "react";
import { RiCodeSSlashLine, RiPaletteLine } from "@remixicon/react";
import { SKILLS } from "../constants/skills";
import ServiceCard from "../components/ServiceCard";
import SkillItem from "../components/SkillItem";

const About = () => {
  const services = [
    {
      icon: <RiCodeSSlashLine size={48} />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive web applications with modern technologies",
    },
    {
      icon: <RiPaletteLine size={48} />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user experiences that users love",
    },
  ];

  return (
    <div className="glass-card p-6 animate-fade-in-up">
      {/* Header */}
      <header className="mb-8">
        <h2 className="text-2xl font-semibold text-white">
          <span className="text-gradient-gold">About me</span>
        </h2>
      </header>

      {/* About Text */}
      <section className="mb-12">
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            I'm a Frontend Developer passionate about building visually engaging
            and high-performance web experiences. Skilled in React, JavaScript,
            and modern UI development, with a growing interest in 3D, animation,
            and motion design.
          </p>
          <p>
            I love blending design, motion, and logic to craft interfaces that
            feel alive — not just look good. I often experiment with tools like
            GSAP, Three.js, and Framer Motion to add motion and depth to my
            projects. Constantly learning and experimenting to push the
            boundaries of what's possible on the web.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-white mb-8">My Playground</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-8">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {SKILLS.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
