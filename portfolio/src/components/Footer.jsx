import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg mb-4">
            © {new Date().getFullYear()} Manu Tyagi. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Manu-Tyagi90"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/thoughtful-manu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/manutygii90"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              LeetCode
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;