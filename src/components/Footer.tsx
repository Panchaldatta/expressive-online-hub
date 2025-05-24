
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6 w-full">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 mb-4 md:mb-0">
            © 2025 dattadevc All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#about" className="text-gray-500 hover:text-gray-900 transition-colors">About</a>
            <a href="#projects" className="text-gray-500 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-500 hover:text-gray-900 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
