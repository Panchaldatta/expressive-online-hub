
// import React from 'react';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Frontend",
//       skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML", "CSS"]
//     },
//     {
//       title: "Backend",
//       skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
//     },
//     {
//       title: "Tools & Others",
//       skills: ["Git", "Docker", "AWS", "Figma", "Postman"] 
//     }
//   ];

//   return (
//     <section id="skills" className="py-10 mb-12">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6">
//           Skills
//         </h2>
        
//         <div className="space-y-8">
//           {skillCategories.map((category, index) => (
//             <div key={index} className="mb-6">
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
//               <div className="flex flex-wrap gap-2">
//                 {category.skills.map((skill, skillIndex) => (
//                   <span 
//                     key={skillIndex} 
//                     className="px-3 py-1 border border-gray-200 text-gray-600 rounded-md text-sm"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="mt-8">
//           <h3 className="text-xl font-semibold text-gray-900 mb-3">Currently Learning</h3>
//           <div className="flex flex-wrap gap-2">
//             {["GraphQL", "Next.js 13", "AI/ML"].map((tech, index) => (
//               <span 
//                 key={index} 
//                 className="px-3 py-1 border border-gray-200 text-gray-500 rounded-md text-sm"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
        
//         <div className="border-t border-gray-200 mt-10"></div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from 'react';
import {
  Code,
  Database,
  Cloud,
  GitBranch,
  Palette,
  FileText,
  MousePointerClick,
  LayoutTemplate,
  CloudCog,
  ServerCog,
  BrainCog,
  Atom,
} from 'lucide-react';

const iconMap = {
  "React": <Atom className="w-4 h-4" />,
  "TypeScript": <Code className="w-4 h-4" />,
  "Tailwind CSS": <LayoutTemplate className="w-4 h-4" />,
  "Next.js": <CloudCog className="w-4 h-4" />,
  "HTML": <FileText className="w-4 h-4" />,
  "CSS": <Palette className="w-4 h-4" />,

  "Node.js": <ServerCog className="w-4 h-4" />,
  "Express": <ServerCog className="w-4 h-4" />,
  "PostgreSQL": <Database className="w-4 h-4" />,
  "MongoDB": <Database className="w-4 h-4" />,

  "Git": <GitBranch className="w-4 h-4" />,
  "Docker": <Cloud className="w-4 h-4" />,
  "AWS": <Cloud className="w-4 h-4" />,
  "Figma": <MousePointerClick className="w-4 h-4" />,
  "Postman": <MousePointerClick className="w-4 h-4" />,

  "GraphQL": <Code className="w-4 h-4" />,
  "Next.js 13": <CloudCog className="w-4 h-4" />,
  "AI/ML": <BrainCog className="w-4 h-4" />
};

const SkillCard = ({ skill }) => (
  <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700">
    {iconMap[skill] || <Code className="w-4 h-4" />}
    <span>{skill}</span>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML", "CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "Postman"] 
    }
  ];

  return (
    <section id="skills" className="py-10 mb-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">Skills</h2>
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill, i) => (
                  <SkillCard key={i} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">Currently Learning</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["GraphQL", "Next.js 13", "AI/ML"].map((tech, index) => (
              <SkillCard key={index} skill={tech} />
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-10"></div>
      </div>
    </section>
  );
};

export default Skills;
