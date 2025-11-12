import React from 'react';

const EducationItem = ({ education }) => (
  <div key={education.id} className="glass-card p-6">
    <h4 className="text-white text-lg font-semibold mb-2">{education.institution}</h4>
    <p className="text-yellow-400 mb-2">{education.degree}</p>
    <p className="text-gray-400 mb-2">{education.field}</p>
    <p className="text-gray-400 text-sm">{education.period}</p>
  </div>
);

export default EducationItem;