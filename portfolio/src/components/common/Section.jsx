import React from 'react';
import { motion } from 'framer-motion';

function Section({ children, id, title, className = '', background = 'white' }) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  };

  return (
    <section id={id} className={`py-20 ${bgColors[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title && (
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              {title}
            </h2>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export default Section;