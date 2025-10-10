import React from 'react';
import ProjectsSection from '../components/sections/ProjectsSection';
import PageHero from '../components/layout/PageHero';
import { pageIntros } from '../data/portfolioData';

const ProjectsPage = () => (
  <div className="space-y-16">
    <PageHero {...pageIntros.projects} />
    <ProjectsSection />
  </div>
);

export default ProjectsPage;
