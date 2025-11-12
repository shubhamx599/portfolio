// src/components/layout/Layout.jsx - UPDATED
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BackgroundElements from './BackgroundElements';
import Sidebar from '../sidebar/Sidebar';
import MobileNavbar from '../navigation/MobileNavbar';
import DesktopNavbar from '../navigation/DesktopNavbar';
import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import Resume from '../../pages/Resume';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 font-sans text-gray-300 relative overflow-hidden">
      <BackgroundElements />
      
      <div className="container mx-auto px-4 py-6 lg:py-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          <Sidebar />
          
          {/* Main Content Area with Routes */}
          <main className="flex-1 w-full min-h-[80vh]">
            <DesktopNavbar /> {/* ADD THIS LINE */}
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
        </div>
      </div>
      
      <MobileNavbar />
    </div>
  );
};

export default Layout;