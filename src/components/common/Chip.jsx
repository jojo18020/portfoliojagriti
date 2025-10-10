import React from 'react';

const Chip = ({ children, variant = 'default', onClick, href }) => {
  const baseClasses =
    'inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FFC906] focus-visible:ring-offset-[#121F45]';

  const variants = {
    default: 'bg-[#223971] text-white hover:bg-[#2a4489]',
    primary: 'bg-[#CC1E4A] text-white hover:bg-[#b01a42]',
    outline: 'border border-[#22397160] text-white hover:bg-[#223971]'
  };

  const Component = href ? 'a' : 'button';
  const props = href
    ? {
        href,
        target: href.startsWith('http') ? '_blank' : undefined,
        rel: href.startsWith('http') ? 'noopener noreferrer' : undefined
      }
    : { onClick };

  return (
    <Component className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </Component>
  );
};

export default Chip;