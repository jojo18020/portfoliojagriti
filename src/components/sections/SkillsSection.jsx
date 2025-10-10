import React from 'react';
import TerminalPrompt from '../common/TerminalPrompt';
import Card from '../common/Card';
import Chip from '../common/Chip';
import { skillCategories } from '../../data/portfolioData';

const SkillsSection = () => (
  <section>
    <TerminalPrompt command="skills --list" />
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skillCategories.map((category) => {
        const Icon = category.icon;
        return (
          <Card key={category.title} className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-[#FF3B63]/20 border border-[#FF3B63]/30">
                <Icon className="w-5 h-5 text-[#FF9AAE]" />
              </div>
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Chip key={skill} variant="outline">
                  {skill}
                </Chip>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  </section>
);

export default SkillsSection;