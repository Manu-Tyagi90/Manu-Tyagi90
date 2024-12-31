import React from 'react';
import { motion } from 'framer-motion';
import Button from './common/Button';

function Hero() {
  const handleResumeDownload = () => {
    window.open('https://docs.google.com/document/d/1FxY35jl9zE0NgYqMuqJ-LKGsIyeb1-Q9a9OBwCb4hNg/edit?usp=drivesdk', '_blank');
  };

  return (
    <div id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm Manu Tyagi
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Computer Science Engineer & Full Stack Developer
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={handleResumeDownload}>
              Download Resume
            </Button>
            <Button variant="secondary" href="https://github.com/Manu-Tyagi90">
              GitHub
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mt-12 md:mt-0"
        >
          <img
            src="https://drive.google.com/uc?export=view&id=1DKz9Q5NquNkTOTmjYfAnj2zTyZIg19vK"
            alt="Profile"
            className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-all duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
