import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 toolbar ${
        isScrolled ? 'py-4 shadow-lg' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-primary cursor-pointer hover:scale-105 transition"
          >
            MT
          </Link>
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-primary cursor-pointer transition transform hover:scale-105"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;