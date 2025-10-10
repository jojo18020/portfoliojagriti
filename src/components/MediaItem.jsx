import React from 'react';

export default function MediaItem({ src, alt = '' }) {
  if (!src) return null;
  const lower = src.toLowerCase();

  // YouTube inline embed
  if (lower.includes('youtube.com/embed/')) {
    return (
      <div className="aspect-video w-full rounded-xl overflow-hidden border border-[#FF3B63]/20">
        <iframe
          src={src}
          title={alt || 'YouTube video'}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  // native video
  if (/\.(mp4|webm|mov)$/i.test(lower)) {
    return (
      <video
        src={src}
        controls
        playsInline
        className="w-full h-48 object-cover rounded-xl border border-[#FF3B63]/20"
      />
    );
  }

  // pdf
  if (lower.endsWith('.pdf')) {
    return (
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        className="block w-full h-48 rounded-xl border border-[#FF3B63]/20 bg-black/20 text-white flex items-center justify-center"
      >
        📄 Open PDF
      </a>
    );
  }

  // image
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover rounded-xl border border-[#FF3B63]/20"
    />
  );
}
