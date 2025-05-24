
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Vue.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-10 mb-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Skills
        </h2>
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 border border-gray-200 text-gray-600 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Currently Learning</h3>
          <div className="flex flex-wrap gap-2">
            {["GraphQL", "Next.js 13", "AI/ML", "Web3", "Rust"].map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 border border-gray-200 text-gray-500 rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10"></div>
      </div>
    </section>
  );
};

export default Skills;
