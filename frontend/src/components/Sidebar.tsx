'use client';
import React, { useState } from 'react';
import {
  FaHome,
  FaBox,
  FaClipboardList,
  FaChartLine,
  FaUser,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const navItems = [
  { label: 'Dashboard', icon: <FaHome /> },
  { label: 'Products', icon: <FaBox /> },
  { label: 'Orders', icon: <FaClipboardList /> },
  { label: 'Forecast', icon: <FaChartLine /> },
  { label: 'Profile', icon: <FaUser /> },
];

export default function Sidebar({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (label: string) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTabClick = (label: string) => {
    setActiveTab(label);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-[#ff4e3d] text-black p-2 rounded-full shadow-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white/10 border-r border-white/20 backdrop-blur-lg shadow-lg z-40 hidden md:flex flex-col p-6">
        <h2 className="text-2xl font-bold text-[#ff4e3d] mb-10">🍅 Vendor Panel</h2>

        <nav className="flex-1">
          <ul className="space-y-5 text-sm">
            {navItems.map((item) => (
              <li
                key={item.label}
                onClick={() => handleTabClick(item.label)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                  activeTab === item.label
                    ? 'bg-[#ff4e3d] text-black shadow-md'
                    : 'text-black/80 hover:bg-white/10 hover:text-[#ff4e3d]'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto text-xs text-white/40">
          &copy; 2025 SwaadBazaar. All rights reserved.
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <aside
            className="absolute top-0 left-0 h-full w-64 bg-white/10 border-r border-white/20 backdrop-blur-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-[#ff4e3d] mb-10">🍅 Vendor Panel</h2>
            <ul className="space-y-5 text-sm">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  onClick={() => handleTabClick(item.label)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                    activeTab === item.label
                      ? 'bg-[#ff4e3d] text-black shadow-md'
                      : 'text-black/80 hover:bg-white/10 hover:text-[#ff4e3d]'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 text-xs text-white/40">
              &copy; 2025 SwaadBazaar. All rights reserved.
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
