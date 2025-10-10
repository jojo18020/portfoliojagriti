import React, { useEffect, useMemo, useState } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

const normalizePath = (path) => {
  if (!path) {
    return '/';
  }

  const [purePath] = path.split('?');
  const trimmed = purePath.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

const routes = {
  '/': Home,
  '/about': AboutPage,
  '/experience': ExperiencePage,
  '/projects': ProjectsPage,
  '/skills': SkillsPage,
  '/gallery': GalleryPage,
  '/contact': ContactPage
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path) => {
    const normalized = normalizePath(path);
    if (normalized === currentPath) {
      return;
    }

    window.history.pushState({}, '', normalized);
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const CurrentPage = useMemo(() => routes[currentPath] ?? Home, [currentPath]);

  return (
    <Layout currentPath={currentPath} onNavigate={handleNavigate}>
      <CurrentPage />
    </Layout>
  );
}