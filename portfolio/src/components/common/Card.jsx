import React from 'react';

function Card({ children, className = '' }) {
  return (
    <div className={`bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

export default Card;