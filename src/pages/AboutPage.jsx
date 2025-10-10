import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import PageHero from '../components/layout/PageHero';
import { pageIntros } from '../data/portfolioData';

const AboutPage = () => (
  <div className="space-y-16">
    <PageHero {...pageIntros.about} />
    <AboutSection />
    <SkillsSection />
  </div>
);

export default AboutPage;