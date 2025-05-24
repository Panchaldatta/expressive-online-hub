
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 mb-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Datta Panchal
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Full-Stack Developer & UI/UX Designer crafting beautiful digital experiences with modern technologies
        </p>
        
        <div className="flex gap-4 mb-12">
          <a href="#" className="hover:text-gray-700 transition-colors">
            <Github size={24} className="text-gray-500" />
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            <Linkedin size={24} className="text-gray-500" />
          </a>
          <a href="#" className="hover:text-gray-700 transition-colors">
            <Mail size={24} className="text-gray-500" />
          </a>
        </div>
        
        <div className="border-t border-gray-200"></div>
      </div>
    </section>
  );
};

export default Hero;
