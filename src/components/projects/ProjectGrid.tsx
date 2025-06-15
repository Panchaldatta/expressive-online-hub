
import React from "react";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Array<{
    id: number;
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    video: string;
  }>;
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
