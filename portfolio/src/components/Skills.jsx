import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = {
  'Programming Languages': ['Java', 'Python', 'C++'],
  'Frameworks & Libraries': [
    'Spring Boot',
    'Spring Framework',
    'JPA',
    'JDBC',
    'Thymeleaf',
    'NumPy',
    'Pandas',
    'Matplotlib',
    'Scikit-learn'
  ],
  'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
  'Tools & Platforms': [
    'Eclipse',
    'Visual Studio Code',
    'Git',
    'MySQL',
    'Postman',
    'Thunder Client',
    'AWS'
  ],
  'Soft Skills': [
    'Problem-solving',
    'Critical thinking',
    'Communication',
    'Teamwork',
    'Time management'
  ]
};

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;