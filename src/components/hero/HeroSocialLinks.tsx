
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSocialLinks = () => {
  const socialLinks = [
    {
      href: "https://github.com/dattadevc",
      icon: Github,
      label: "GitHub",
      bgColor: "bg-gray-100 hover:bg-gray-200",
      textColor: "text-gray-700"
    },
    {
      href: "https://www.linkedin.com/in/dattadev/",
      icon: Linkedin,
      label: "LinkedIn",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      href: "mailto:dattadevc@gmail.com",
      icon: Mail,
      label: "Email",
      bgColor: "bg-red-50 hover:bg-red-100",
      textColor: "text-red-600"
    }
  ];

  return (
    <div className="flex items-center justify-center gap-6">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-6 py-3 ${link.bgColor} rounded-lg transition-all hover:scale-105`}
        >
          <link.icon size={20} className={link.textColor} />
          <span className={`font-medium ${link.textColor}`}>{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default HeroSocialLinks;
