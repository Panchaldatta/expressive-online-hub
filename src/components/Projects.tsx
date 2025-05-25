
import React from "react";
import { ArrowRight, Code2, Sparkles, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import GitHubContributions from "./GitHubContributions";
import GradientImageCard from "./GradientImageCard";

const Projects = () => {
  const mainProject = {
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
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    ],
    date: "26 December 2023"
  };

  const secondaryProject = {
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
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    ],
    date: "15 November 2023"
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
          
          {/* Two cards side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Animated Card */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium z-10 animate-bounce">
                🔥 Live Preview
              </div>
              <GradientImageCard 
                project={mainProject} 
                featured={true} 
                isAnimated={true}
              />
            </div>

            {/* Static Card */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                ⭐ Featured
              </div>
              <GradientImageCard 
                project={secondaryProject} 
                featured={true} 
                isAnimated={false}
              />
            </div>
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
