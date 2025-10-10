import React from 'react';
import ExperienceSection from '../components/sections/ExperienceSection';
import PageHero from '../components/layout/PageHero';
import { pageIntros } from '../data/portfolioData';

const ExperiencePage = () => (
  <div className="space-y-16">
    <PageHero {...pageIntros.experience} />
    <ExperienceSection />
  </div>
);

export default ExperiencePage;
