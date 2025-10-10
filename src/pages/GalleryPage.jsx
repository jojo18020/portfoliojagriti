import React from 'react';
import GallerySection from '../components/sections/GallerySection';
import PageHero from '../components/layout/PageHero';
import { pageIntros } from '../data/portfolioData';

const GalleryPage = () => (
  <div className="space-y-16">
    <PageHero {...pageIntros.gallery} />
    <GallerySection />
  </div>
);

export default GalleryPage;
