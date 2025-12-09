import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileNavbar = () => {
  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/portfolio', label: 'Projects' },
    { id: '/resume', label: 'Resume' }
  ];

  return (
    <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
      <nav className="glass-card p-4">
        <ul className="flex justify-around">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.id}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                    isActive
                      ? 'bg-yellow-400 text-black font-semibold'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavbar;