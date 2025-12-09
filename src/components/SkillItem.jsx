const SkillItem = ({ skill, index }) => (
  <div className="flex flex-col items-center text-center group cursor-pointer">
    <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-2 border border-gray-700">
      <img 
        src={skill.icon} 
        alt={skill.name}
        className="w-10 h-10 object-contain"
      />
    </div>
    <span className="text-white text-sm font-medium group-hover:text-yellow-400 transition-colors">
      {skill.name}
    </span>
  </div>
);

export default SkillItem;