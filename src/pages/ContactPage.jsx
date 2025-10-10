import React from 'react';
import ContactSection from '../components/sections/ContactSection';
import PageHero from '../components/layout/PageHero';
import { pageIntros } from '../data/portfolioData';

const ContactPage = () => (
  <div className="space-y-16">
    <PageHero {...pageIntros.contact} />
    <ContactSection />
  </div>
);

export default ContactPage;