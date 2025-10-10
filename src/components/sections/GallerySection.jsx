import React, { useState } from 'react';
import TerminalPrompt from '../common/TerminalPrompt';
import Lightbox from '../common/Lightbox';
import MediaItem from '../MediaItem';
import { galleryItems } from '../../data/portfolioData';

const isImage = (src = '') => /\.(png|jpe?g|gif|webp|svg)$/i.test(src);

const GallerySection = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section>
      <TerminalPrompt command="open gallery" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-xl overflow-hidden border border-[#FF3B63]/20"
            onClick={() => isImage(item.src) && setLightboxImage(item.src)}
            role={isImage(item.src) ? 'button' : undefined}
          >
            <MediaItem src={item.src} alt={item.caption} />
            <div className="absolute inset-0 bg-[#FF3B63]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs md:text-sm text-white text-center px-2">
              {item.caption}
            </div>
          </div>
        ))}
      </div>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  );
};

export default GallerySection;
