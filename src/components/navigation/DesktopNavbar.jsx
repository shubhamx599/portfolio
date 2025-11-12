import React from 'react';
import { NavLink } from 'react-router-dom';

const DesktopNavbar = () => {
  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/portfolio', label: 'Portfolio' },
    { id: '/resume', label: 'Resume' }
  ];

  return (
    <div className="hidden lg:block mb-6">
      <nav className="glass-card p-4">
        <ul className="flex justify-start space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.id}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-yellow-400 text-black font-semibold'
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-white/10'
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

export default DesktopNavbar;