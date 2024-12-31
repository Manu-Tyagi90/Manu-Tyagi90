import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Spring Boot REST API for Employee Management',
    description: 'Implemented robust CRUD operations for employee data, including authentication and authorization using JWT. Ensured data integrity through stringent validation and sanitization.',
    technologies: ['Spring Boot', 'JWT', 'AWS EC2', 'REST API'],
    github: 'https://github.com/Manu-Tyagi90/SpringBoot-RestAPI',
    achievements: ['95% uptime', '20% reduction in response time']
  },
  {
    title: 'Machine Learning Model for Nipah Virus Prediction',
    description: 'Developed a logistic regression model to predict the probability of Nipah virus infection based on various factors. Utilized Python and Scikit-learn with historical infection data.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
    github: 'https://github.com/Manu-Tyagi90/MyProjects.MachineLearning',
    achievements: ['81% prediction accuracy']
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;