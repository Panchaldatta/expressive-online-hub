
import React from "react";
import { Code2 } from "lucide-react";

const HeroHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm text-gray-600 font-medium">Available for opportunities</span>
      </div>
      
      <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
        Datta Panchal
      </h1>
      
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-8">
        <Code2 size={16} className="text-blue-600" />
        <span className="text-gray-700 font-medium">Full-Stack Developer</span>
        <span className="text-gray-400">•</span>
        <span className="text-gray-700 font-medium">UI/UX Designer</span>
      </div>
      
      <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
        Crafting beautiful digital experiences with modern technologies. 
        Passionate about creating seamless user interfaces and robust backend systems.
      </p>
    </div>
  );
};

export default HeroHeader;
