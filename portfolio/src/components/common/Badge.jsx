import React from 'react';

function Badge({ children, variant = 'blue', className = '' }) {
  const variants = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800'
  };

  return (
    <span className={`${variants[variant]} px-3 py-1 rounded-full text-sm ${className}`}>
      {children}
    </span>
  );
}

export default Badge;