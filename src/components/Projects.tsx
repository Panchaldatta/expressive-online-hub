import React from "react";
import { ExternalLink, Github, ArrowRight, Play, Code2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GitHubContributions from "./GitHubContributions";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management and seamless payment integration.",
      longDescription: "Built with React and Node.js, this platform features advanced inventory tracking, multiple payment gateways, and an intuitive admin dashboard for managing products and orders.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      status: "Live",
      category: "Full Stack",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop functionality and real-time updates.",
      longDescription: "A comprehensive task management solution featuring team collaboration, drag-and-drop task organization, real-time notifications, and detailed project analytics.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
      github: "#",
      demo: "#",
      status: "Beta",
      category: "Frontend",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts and beautiful data visualization.",
      longDescription: "Features 7-day forecasts, interactive charts, location-based weather data, and responsive design that works seamlessly across all devices.",
      tech: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      github: "#",
      demo: "#",
      status: "Live",
      category: "Frontend",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Comprehensive analytics dashboard for social media with real-time metrics and insights.",
      tech: ["Angular", "D3.js", "Express", "PostgreSQL"],
      github: "#",
      demo: "#",
      status: "Development",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "AI Content Generator",
      description: "AI-powered content creation tool for blogs, marketing copy, and social media posts.",
      tech: ["Next.js", "OpenAI API", "Prisma", "Vercel"],
      github: "#",
      demo: "#",
      status: "Live",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Crypto Trading Bot",
      description: "Automated trading bot with advanced algorithms and risk management features.",
      tech: ["Python", "TensorFlow", "Binance API", "Redis"],
      github: "#",
      demo: "#",
      status: "Private",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800 border-green-200';
      case 'Beta': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Development': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Private': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Code2 size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-600">My Work</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my latest work showcasing modern web development, 
            innovative solutions, and creative problem-solving.
          </p>
        </div>

        {/* GitHub Contributions */}
        <div className="mb-24">
          <GitHubContributions username="dattadevc" />
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="text-yellow-500" size={24} />
            <h3 className="text-3xl font-bold text-gray-900">Featured Work</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white ${
                  index === 0 ? 'xl:col-span-2 xl:row-span-2' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index === 0 ? 'h-80' : 'h-48'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} border font-medium`}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                      <Play size={20} />
                      Preview
                    </Button>
                  </div>
                </div>

                <CardContent className={`${index === 0 ? 'p-8' : 'p-6'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors ${
                    index === 0 ? 'text-3xl' : 'text-xl'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-gray-600 mb-6 leading-relaxed ${
                    index === 0 ? 'text-lg' : 'text-sm'
                  }`}>
                    {index === 0 ? project.longDescription : project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, index === 0 ? 6 : 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} className="flex items-center gap-2">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <a href={project.demo} className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  <div className="absolute top-3 right-3">
                    <Badge className={`${getStatusColor(project.status)} border text-xs`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} className="flex items-center gap-1 text-xs">
                        <Github size={14} />
                        Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.demo} className="flex items-center gap-1 text-xs text-blue-600">
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-12 border border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <a href="#contact" className="flex items-center gap-2">
                  <Sparkles size={20} />
                  Start a Project
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/dattadevc" className="flex items-center gap-2">
                  <Github size={20} />
                  View All on GitHub
                  <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
