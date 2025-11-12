import React from 'react';

const CertificationItem = ({ certification }) => (
  <div key={certification.id} className="glass-card p-4">
    <h4 className="text-white font-semibold mb-1">{certification.name}</h4>
    <p className="text-yellow-400 text-sm mb-1">{certification.issuer}</p>
    <p className="text-gray-400 text-xs">{certification.date}</p>
  </div>
);

export default CertificationItem;