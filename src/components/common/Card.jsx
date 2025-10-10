import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-[#121F45] rounded-2xl border border-[#22397120] shadow-lg ${className}`}>
    {children}
  </div>
);

export default Card;