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
      demo: "#",
      video: "/videos/ecommerce.mp4"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with drag-and-drop tasks and team updates.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
      github: "#",
      demo: "#",
      video: "/videos/taskapp.mp4"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather app with location-based forecasts, interactive charts, and clean UI.",
      tech: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      github: "#",
      demo: "#",
      video: "/videos/weather.mp4"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media with real-time metrics and reporting.",
      tech: ["Angular", "D3.js", "Express", "PostgreSQL"],
      github: "#",
      demo: "#",
      video: "/videos/socialmedia.mp4"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 md:px-0 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured project - spans all columns on small screens, 2 cols on large */}
          <div className="lg:col-span-2 bg-white border border-gray-200 p-6 rounded-2xl shadow-md">
            <video
              className="w-full rounded-lg mb-4"
              src={projects[0].video}
              autoPlay
              loop
              muted
              playsInline
            />
            <h3 className="text-3xl font-semibold text-gray-900 mb-2">{projects[0].title}</h3>
            <p className="text-gray-600 mb-4">{projects[0].description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {projects[0].tech.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={projects[0].github} className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <Github size={18} />
                <span className="text-sm font-medium">Code</span>
              </a>
              <a href={projects[0].demo} className="flex items-center gap-2 text-green-600 hover:text-green-800">
                <ExternalLink size={18} />
                <span className="text-sm font-medium">Live Demo</span>
              </a>
            </div>
          </div>

          {/* Remaining projects - stacked beside feature project */}
          <div className="space-y-8">
            {projects.slice(1).map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-200"
              >
                <video
                  className="w-full rounded-md mb-3"
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-sm">
                  <a href={project.github} className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                    <Github size={16} />
                    Code
                  </a>
                  <a href={project.demo} className="text-green-500 hover:text-green-700 flex items-center gap-1">
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16"></div>
      </div>
    </section>
  );
};

export default Projects;
