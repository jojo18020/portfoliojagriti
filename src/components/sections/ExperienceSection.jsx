import React, { useState } from 'react';
import TerminalPrompt from '../common/TerminalPrompt';
import Card from '../common/Card';
import Chip from '../common/Chip';
import Lightbox from '../common/Lightbox';
import { experiences } from '../../data/portfolioData';
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section>
      <TerminalPrompt command="cat experience.log" />
      <div className="space-y-8">
        {experiences.map((exp) => {
          const isExpanded = expandedExperience === exp.id;
          return (
            <Card key={exp.id} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={exp.image}
                        alt={`${exp.org} logo`}
                        className="w-14 h-14 rounded-xl object-cover border border-[#FF3B63]/30"
                      />
                      <div>
                        <h3 className="text-xl font-semibold font-mono text-white">{exp.role}</h3>
                        <p className="text-[#FF6B8D]">{exp.org}</p>
                        <p className="text-gray-400 text-sm">
                          {exp.location} • {exp.dates}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-2">
                      {exp.tools.map((tool) => (
                        <Chip key={tool} variant="outline">
                          {tool}
                        </Chip>
                      ))}
                      {exp.link && (
                        <Chip href={exp.link}>
                          <ExternalLink className="w-3 h-3 mr-1" /> Visit
                        </Chip>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setExpandedExperience(isExpanded ? null : exp.id)}
                    className="ml-4 p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Toggle experience details"
                  >
                    {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>

                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-[#FF3B63]/20">
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start text-gray-200">
                          <span className="text-[#FFC906] mr-3 mt-2">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.mediaSlots.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {exp.mediaSlots.map((media, mediaIndex) => (
                          <img
                            key={mediaIndex}
                            src={media}
                            alt={`${exp.role} media ${mediaIndex + 1}`}
                            className="w-full h-48 object-cover rounded-xl border border-[#FF3B63]/20 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setLightboxImage(media)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  );
};

export default ExperienceSection;