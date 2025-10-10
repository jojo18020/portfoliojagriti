import React from 'react';
import { X } from 'lucide-react';

const Lightbox = ({ image, onClose }) => {
  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <img src={image} alt="Preview" className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl" />
      <button
        type="button"
        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default Lightbox;
