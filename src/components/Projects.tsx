import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

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
      gradient: "from-blue-500 via-purple-500 to-pink-500"
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
      gradient: "from-emerald-500 via-teal-500 to-cyan-500"
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
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Comprehensive analytics dashboard for social media with real-time metrics and insights.",
      longDescription: "Advanced analytics platform providing deep insights into social media performance, engagement tracking, and automated reporting features.",
      tech: ["Angular", "D3.js", "Express", "PostgreSQL"],
      github: "#",
      demo: "#",
      status: "Development",
      category: "Full Stack",
      gradient: "from-violet-500 via-indigo-500 to-blue-500"
    },
    {
      id: 5,
      title: "AI Content Generator",
      description: "AI-powered content creation tool for blogs, marketing copy, and social media posts.",
      longDescription: "Leverages advanced AI models to generate high-quality content for various use cases, including SEO optimization and brand voice consistency.",
      tech: ["Next.js", "OpenAI API", "Prisma", "Vercel"],
      github: "#",
      demo: "#",
      status: "Live",
      category: "AI/ML",
      gradient: "from-green-500 via-emerald-500 to-teal-500"
    },
    {
      id: 6,
      title: "Crypto Trading Bot",
      description: "Automated trading bot with advanced algorithms and risk management features.",
      longDescription: "Sophisticated trading bot with machine learning algorithms, portfolio optimization, and comprehensive risk management tools for cryptocurrency markets.",
      tech: ["Python", "TensorFlow", "Binance API", "Redis"],
      github: "#",
      demo: "#",
      status: "Private",
      category: "Backend",
      gradient: "from-yellow-500 via-orange-500 to-red-500"
    }
  ];

  const featuredProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my latest work spanning full-stack development, AI integration, and modern web technologies
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardContent className="p-0 h-full">
                  {/* Project Image/Video Area */}
                  <div className="relative h-48 lg:h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/50">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' ? 'bg-green-100 text-green-800' :
                        project.status === 'Beta' ? 'bg-blue-100 text-blue-800' :
                        project.status === 'Development' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <p className="text-gray-600 mb-6 leading-relaxed cursor-pointer hover:text-gray-800 transition-colors">
                          {project.description}
                        </p>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <p className="text-sm text-gray-700">{project.longDescription}</p>
                      </HoverCardContent>
                    </HoverCard>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      project.status === 'Live' ? 'bg-green-100 text-green-800' :
                      project.status === 'Beta' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'Development' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
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
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Check out my GitHub for more projects and contributions to open source
          </p>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <Github size={20} />
            View GitHub Profile
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
