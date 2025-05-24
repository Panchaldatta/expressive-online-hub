
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution built with React and Node.js, featuring real-time inventory management and seamless payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An intuitive weather application with location-based forecasts, interactive maps, and detailed climate analytics.",
      tech: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media management with real-time metrics and automated reporting.",
      tech: ["Angular", "D3.js", "Express", "PostgreSQL"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-10 mb-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Projects
        </h2>
        
        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 p-6 rounded-lg hover:shadow-sm transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                <a 
                  href={project.demo}
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 mt-10"></div>
      </div>
    </section>
  );
};

export default Projects;
