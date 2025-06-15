
import React from "react";
import { Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroActions = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
      <Button 
        asChild 
        size="lg" 
        className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 h-auto text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
      >
        <a href="#contact" className="flex items-center gap-2">
          <Sparkles size={20} />
          Let's Work Together
        </a>
      </Button>
      
      <Button 
        asChild 
        variant="outline" 
        size="lg"
        className="border-2 border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-900 px-8 py-3 h-auto text-lg font-semibold rounded-lg transition-all"
      >
        <a href="#projects" className="flex items-center gap-2">
          <Code2 size={20} />
          View My Work
        </a>
      </Button>
    </div>
  );
};

export default HeroActions;
