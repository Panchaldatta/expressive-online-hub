
import React from "react";
import { Code2 } from "lucide-react";

const ProjectsHeader = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
        <Code2 size={16} className="text-blue-600" />
        <span className="text-sm font-medium text-blue-600">My Work</span>
      </div>
      
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Featured Projects
      </h2>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        A collection of my latest work showcasing modern web development and innovative solutions.
      </p>
    </div>
  );
};

export default ProjectsHeader;
