import React from 'react';

const SkillBar = ({ skill }) => (
  <div className="glass-card p-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-white font-medium">{skill.name}</span>
      <span className="text-gray-400 text-sm">{skill.percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-1000"
        style={{ width: `${skill.percentage}%` }}
      ></div>
    </div>
  </div>
);

export default SkillBar;