import React from 'react';
import SkillsSection from '../components/sections/SkillsSection';
import PageHero from '../components/layout/PageHero';
import { pageIntros } from '../data/portfolioData';

const SkillsPage = () => (
  <div className="space-y-16">
    <PageHero {...pageIntros.skills} />
    <SkillsSection />
  </div>
);

export default SkillsPage;