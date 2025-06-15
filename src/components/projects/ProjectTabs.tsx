
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectGrid from "./ProjectGrid";

interface ProjectTabsProps {
  projectCategories: {
    web: Array<any>;
    mobile: Array<any>;
    ai: Array<any>;
  };
}

const ProjectTabs = ({ projectCategories }: ProjectTabsProps) => {
  return (
    <Tabs defaultValue="web" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="web" className="transition-all duration-300">
          Web Applications
        </TabsTrigger>
        <TabsTrigger value="mobile" className="transition-all duration-300">
          Mobile Apps
        </TabsTrigger>
        <TabsTrigger value="ai" className="transition-all duration-300">
          AI Projects
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="web" className="transition-all duration-500 ease-in-out">
        <ProjectGrid projects={projectCategories.web} />
      </TabsContent>
      
      <TabsContent value="mobile" className="transition-all duration-500 ease-in-out">
        <ProjectGrid projects={projectCategories.mobile} />
      </TabsContent>
      
      <TabsContent value="ai" className="transition-all duration-500 ease-in-out">
        <ProjectGrid projects={projectCategories.ai} />
      </TabsContent>
    </Tabs>
  );
};

export default ProjectTabs;
