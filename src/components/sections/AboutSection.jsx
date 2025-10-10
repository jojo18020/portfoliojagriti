import React from 'react';
import TerminalPrompt from '../common/TerminalPrompt';
import Card from '../common/Card';
import Chip from '../common/Chip';
import { FileText } from 'lucide-react';
import { quickFacts, heroContent } from '../../data/portfolioData';

const AboutSection = () => (
  <section>
    <TerminalPrompt command="about" />
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
        <p>
          Mechanical Engineering graduate from UIUC with an ECE minor, specializing in controls and robotics, currently 
          working as a junior member at Wipro PARI.
          I blend hardware design, software development, and data analysis to build robust, intelligent robotic systems. 
        </p>
        <p>
          My mission is to develop data-aware robot systems that can adapt and perform reliably in complex, real-world
          environments. From MRI-compatible medical devices to industrial automation, I love tackling interdisciplinary
          challenges that push the boundaries of what's possible.
        </p>
      </div>
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4 font-mono text-[#FF9AAE]">Quick Facts</h3>
        <div className="space-y-3 text-sm text-gray-200">
          {quickFacts.map((fact) => (
            <div key={fact.label}>
              <strong className="uppercase text-xs tracking-widest text-[#FF6B8D]">{fact.label}:</strong>
              <p className="text-base">{fact.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Chip variant="outline" href={heroContent.resumeUrl}>
            <FileText className="w-4 h-4 mr-2" /> Download CV
          </Chip>
        </div>
      </Card>
    </div>
  </section>
);

export default AboutSection;
