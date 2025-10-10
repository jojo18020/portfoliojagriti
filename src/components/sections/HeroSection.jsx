import React from 'react';
import { heroContent } from '../../data/portfolioData';
import Chip from '../common/Chip';

const PUB = process.env.PUBLIC_URL || '';

const HeroSection = () => {
  const {
    name,
    tagline,
    email,
    githubUrl,
    linkedinUrl,
    resumeUrl,
    headshot // optional: set in portfolioData if you have it, e.g. `${PUB}/media/headshot.jpg`
  } = heroContent || {};

  return (
    <section className="grid md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-2 space-y-4">
        <h1 className="text-3xl md:text-4xl font-mono font-semibold text-white">
          {name}
        </h1>
        <p className="text-gray-300">{tagline}</p>
        <div className="flex flex-wrap gap-2">
          {email && <Chip href={`mailto:${email}`}>Email</Chip>}
          {githubUrl && <Chip href={githubUrl}>GitHub</Chip>}
          {linkedinUrl && <Chip href={linkedinUrl}>LinkedIn</Chip>}
          {resumeUrl && <Chip href={resumeUrl}>Resume</Chip>}
        </div>
      </div>

      {headshot && (
        <div className="md:col-span-1">
          <img
            src={headshot}
            alt={`${name} headshot`}
            className="w-full aspect-square object-cover rounded-2xl border border-[#FF3B63]/30"
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
