import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navSections } from '../../data/portfolioData';

const Header = ({ currentPath, onNavigate }) => {
  const [open, setOpen] = useState(false);

  const handleNavigate = (event, path) => {
    event.preventDefault();
    setOpen(false);
    onNavigate(path);
  };

  const linkBaseClasses = 'relative text-sm uppercase tracking-wide transition-colors';

  return (
    <header className="sticky top-0 z-40 bg-[#121F45]/90 backdrop-blur-sm border-b border-[#22397120]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a
            href="/"
            onClick={(event) => handleNavigate(event, '/')}
            className="font-mono text-xl font-bold text-[#FFC906]"
          >
            Jagriti Jain
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navSections.map((section) => {
              const isActive = currentPath === section.path;
              return (
                <a
                  key={section.id}
                  href={section.path}
                  onClick={(event) => handleNavigate(event, section.path)}
                  className={`${linkBaseClasses} ${
                    isActive ? 'text-[#CC1E4A]' : 'text-gray-200 hover:text-[#FFC906]'
                  }`}
                >
                  {section.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#CC1E4A] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#22397120] bg-[#121F45]">
          <div className="px-4 py-4 space-y-2">
            {navSections.map((section) => (
              <a
                key={section.id}
                href={section.path}
                onClick={(event) => handleNavigate(event, section.path)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPath === section.path
                    ? 'bg-[#223971]/40 text-[#FFC906]'
                    : 'text-gray-200 hover:bg-[#223971]/30'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;