import React, { useState } from 'react';
import TerminalPrompt from '../common/TerminalPrompt';
import Card from '../common/Card';
import Chip from '../common/Chip';
import CodeBlock from '../common/CodeBlock';
import Lightbox from '../common/Lightbox';
import { projects } from '../../data/portfolioData';
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import MediaItem from '../MediaItem';

const isImage = (src = '') => /\.(png|jpe?g|gif|webp|svg)$/i.test(src);

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section>
      <TerminalPrompt command="ls projects/" />
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const isExpanded = expandedProject === project.id;
          const media = project.media || [];
          const preview = media[0];

          // collapsed: show up to 2 media; expanded: all
          const mediaToShow = isExpanded ? media : media.slice(0, 2);
          const mediaWrapperClass =
            mediaToShow.length > 1 ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' : 'space-y-3';

          return (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-[0_15px_45px_-20px_rgba(255,59,99,0.8)] transition-shadow"
            >
              <div className="p-6 space-y-4">
                {/* header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold font-mono text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag) => (
                        <Chip key={tag} variant="outline">{tag}</Chip>
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Toggle project details"
                  >
                    {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>

                {/* media block (preview or small set) */}
                {mediaToShow.length > 0 && (
                  <div className={mediaWrapperClass}>
                    {mediaToShow.map((src, i) => (
                      <div
                        key={i}
                        className="rounded-xl overflow-hidden border border-[#FF3B63]/20 cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => isImage(src) && setLightboxImage(src)}
                        role={isImage(src) ? 'button' : undefined}
                      >
                        <MediaItem src={src} alt={`${project.title} media ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                )}

                {/* links */}
                {project.links?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, idx) => (
                      <Chip key={idx} href={link.url}>
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {link.label}
                      </Chip>
                    ))}
                  </div>
                )}

                {/* expanded details */}
                {isExpanded && (
                  <div className="pt-4 border-t border-[#FF3B63]/20 space-y-4">
                    {project.problem && (
                      <>
                        <h4 className="font-mono font-semibold text-[#FF9AAE] mb-1">Problem</h4>
                        <p className="text-gray-200 text-sm">{project.problem}</p>
                      </>
                    )}
                    {project.solution && (
                      <>
                        <h4 className="font-mono font-semibold text-[#FF9AAE] mb-1">Solution</h4>
                        <p className="text-gray-200 text-sm">{project.solution}</p>
                      </>
                    )}
                    {project.tools && (
                      <>
                        <h4 className="font-mono font-semibold text-[#FF9AAE] mb-1">Tools</h4>
                        <p className="text-gray-200 text-sm">{project.tools}</p>
                      </>
                    )}
                    {project.outcome && (
                      <>
                        <h4 className="font-mono font-semibold text-[#FF9AAE] mb-1">Outcome</h4>
                        <p className="text-gray-200 text-sm">{project.outcome}</p>
                      </>
                    )}

                    {/* gallery (remaining media beyond the first two/preview set) */}
                    {isExpanded && media.length > mediaToShow.length && (
                      <div>
                        <h4 className="font-mono font-semibold text-[#FF9AAE] mb-2">Gallery</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {media.slice(mediaToShow.length).map((src, i) => (
                            <div
                              key={i}
                              className="rounded-xl overflow-hidden border border-[#FF3B63]/20 cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => isImage(src) && setLightboxImage(src)}
                              role={isImage(src) ? 'button' : undefined}
                            >
                              <MediaItem src={src} alt={`${project.title} more media ${i + 1}`} />
                            </div>
                          ))}
                        </div>
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

export default ProjectsSection;
