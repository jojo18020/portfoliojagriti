import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ currentPath, onNavigate, children }) => (
  <div className="min-h-screen bg-[#121F45] text-white flex flex-col">
    <Header currentPath={currentPath} onNavigate={onNavigate} />
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</div>
    </main>
    <Footer />
  </div>
);

export default Layout;