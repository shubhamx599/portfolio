import React from 'react';

const ServiceCard = ({ service }) => (
  <div className="glass-card p-6 hover:border-yellow-400/50 transition-all duration-300 group">
    <div className="flex items-start gap-4">
      <div className="text-yellow-400 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <div>
        <h4 className="text-white font-medium text-lg mb-2">{service.title}</h4>
        <p className="text-gray-400 text-sm">{service.description}</p>
      </div>
    </div>
  </div>
);

export default ServiceCard;