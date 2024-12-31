import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Education
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                B.Tech in Information Technology
              </h3>
              <p className="text-xl text-gray-600 mb-4">
                I.M.S. Engineering College, Ghaziabad
              </p>
              <p className="text-lg text-gray-600 mb-2">2021-2025</p>
              <p className="text-lg font-medium text-blue-600">
                CGPA: 8.04
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;