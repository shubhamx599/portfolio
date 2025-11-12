import React from 'react';

const ExperienceItem = ({ experience }) => (
  <div key={experience.id} className="glass-card p-6">
    <h4 className="text-white text-lg font-semibold mb-2">{experience.title}</h4>
    <p className="text-yellow-400 mb-2">{experience.company}</p>
    <p className="text-gray-400 text-sm mb-2">{experience.period} • {experience.location}</p>
    <p className="text-gray-300">{experience.description}</p>
  </div>
);

export default ExperienceItem;