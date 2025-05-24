
import React from "react";
import Slider from "react-slick";
import { ExternalLink, Github } from "lucide-react";
import GradientCursor from "./GradientCursor";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution built with React and Node.js, featuring real-time inventory management and seamless payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      video: "/videos/ecommerce.mp4"
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative project management tool with drag-and-drop tasks and team updates.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
      github: "#",
      demo: "#",
      video: "/videos/taskapp.mp4"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather app with location-based forecasts, interactive charts, and clean UI.",
      tech: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      github: "#",
      demo: "#",
      video: "/videos/weather.mp4"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media with real-time metrics and reporting.",
      tech: ["Angular", "D3.js", "Express", "PostgreSQL"],
      github: "#",
      demo: "#",
      video: "/videos/socialmedia.mp4"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <>
      <GradientCursor />
      <section id="projects" className="py-16 px-4 md:px-0 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured project */}
            <div className="lg:col-span-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group cursor-none">
              <div className="bg-white rounded-xl overflow-hidden">
                <video
                  className="w-full rounded-lg mb-4 group-hover:scale-105 transition-transform duration-700"
                  src={projects[0].video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="p-6">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">{projects[0].title}</h3>
                  <p className="text-gray-600 mb-4">{projects[0].description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[0].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={projects[0].github} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:scale-110 transition-all duration-300">
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a href={projects[0].demo} className="flex items-center gap-2 text-green-600 hover:text-green-800 hover:scale-110 transition-all duration-300">
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Remaining projects in vertical cards */}
            <div className="space-y-8">
              {projects.slice(1).map((project) => (
                <div
                  key={project.id}
                  className="bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-500 p-1 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.05] group cursor-none"
                >
                  <div className="bg-white rounded-lg overflow-hidden">
                    <video
                      className="w-full rounded-md mb-3 group-hover:scale-110 transition-transform duration-700"
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{project.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 text-sm">
                        <a href={project.github} className="text-blue-500 hover:text-blue-700 flex items-center gap-1 hover:scale-110 transition-all duration-300">
                          <Github size={16} />
                          Code
                        </a>
                        <a href={project.demo} className="text-green-500 hover:text-green-700 flex items-center gap-1 hover:scale-110 transition-all duration-300">
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Explore More</h3>
            <Slider {...sliderSettings}>
              {projects.map((project) => (
                <div key={project.id} className="px-4">
                  <div className="bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 p-1 rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-500 group cursor-none">
                    <div className="bg-white rounded-xl overflow-hidden">
                      <video
                        className="w-full h-56 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-700"
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="p-4">
                        <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">{project.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={project.github}
                            className="flex items-center text-blue-600 hover:text-blue-800 text-sm hover:scale-110 transition-all duration-300"
                          >
                            <Github size={16} className="mr-1" />
                            Code
                          </a>
                          <a
                            href={project.demo}
                            className="flex items-center text-green-600 hover:text-green-800 text-sm hover:scale-110 transition-all duration-300"
                          >
                            <ExternalLink size={16} className="mr-1" />
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="border-t border-gray-200 mt-16"></div>
        </div>
      </section>
    </>
  );
};

export default Projects;
