
import React from "react";
import ProjectsHeader from "./projects/ProjectsHeader";
import ProjectTabs from "./projects/ProjectTabs";
import { projectCategories } from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <ProjectsHeader />
        <ProjectTabs projectCategories={projectCategories} />
      </div>
    </section>
  );
};

export default Projects;
