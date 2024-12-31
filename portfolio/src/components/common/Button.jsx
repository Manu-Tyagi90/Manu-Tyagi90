import React from 'react';

function Button({ children, variant = 'primary', onClick, href, className = '' }) {
  const baseStyles = "px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg";
  const variants = {
    primary: "bg-white text-primary hover:bg-gray-100",
    secondary: "bg-gray-900 text-white hover:bg-gray-800"
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;