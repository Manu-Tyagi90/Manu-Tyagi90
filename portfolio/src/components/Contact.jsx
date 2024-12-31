import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Connect With Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              href="https://www.linkedin.com/in/thoughtful-manu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600">Professional Network</p>
            </a>
            <a
              href="https://github.com/Manu-Tyagi90"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600">Code Repository</p>
            </a>
            <a
              href="https://leetcode.com/u/manutygii90"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <h3 className="text-xl font-semibold mb-2">LeetCode</h3>
              <p className="text-gray-600">Problem Solving</p>
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/manutyveuo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <h3 className="text-xl font-semibold mb-2">GeeksforGeeks</h3>
              <p className="text-gray-600">Coding Practice</p>
            </a>
            <a
              href="https://www.codechef.com/users/manu_tyagii_90"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <h3 className="text-xl font-semibold mb-2">CodeChef</h3>
              <p className="text-gray-600">Competitive Programming</p>
            </a>
            <a
              href="https://www.hackerrank.com/profile/manutygii90"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <h3 className="text-xl font-semibold mb-2">HackerRank</h3>
              <p className="text-gray-600">Coding Challenges</p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;