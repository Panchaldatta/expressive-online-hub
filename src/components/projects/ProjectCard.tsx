
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    video: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
      {/* Video Preview */}
      <div className="relative h-64 bg-gray-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={project.github} className="flex items-center justify-center gap-2">
              <Github size={16} />
              Code
            </a>
          </Button>
          <Button size="sm" asChild className="flex-1">
            <a href={project.demo} className="flex items-center justify-center gap-2">
              <ExternalLink size={16} />
              Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
