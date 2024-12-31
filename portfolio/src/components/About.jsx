import React from 'react';
import { motion } from 'framer-motion';
import Card from './common/Card';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8">
              Passionate Computer Science Engineer skilled in Java, Python, and C++, with a strong foundation in software development methodologies and object-oriented programming. I specialize in building robust web applications and exploring machine learning solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                <p className="text-gray-600">
                  B.Tech in Information Technology<br />
                  I.M.S. Engineering College, Ghaziabad<br />
                  2021-2025
                </p>
              </Card>
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Focus Areas</h3>
                <p className="text-gray-600">
                  Full Stack Development<br />
                  Machine Learning<br />
                  Software Engineering
                </p>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;