
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface GradientImageCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    tech: string[];
    github: string;
    demo: string;
    status: string;
    category: string;
    gradient: string;
    image: string;
    images?: string[];
    date?: string;
  };
  featured?: boolean;
}

const GradientImageCard: React.FC<GradientImageCardProps> = ({ project, featured = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800 border-green-200';
      case 'Beta': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Development': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Private': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} p-1 shadow-xl hover:shadow-2xl transition-all duration-500 ${
      featured ? 'col-span-2 row-span-2' : ''
    }`}>
      {/* Inner card with white background */}
      <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Image section with slider */}
        <div className={`relative overflow-hidden ${featured ? 'h-80' : 'h-64'}`}>
          <div className="relative w-full h-full">
            <img
              src={images[currentImageIndex]}
              alt={`${project.title} preview ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Navigation arrows for multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={16} />
                </button>
              </>
            )}

            {/* Image indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Status badge */}
            <div className="absolute top-4 right-4">
              <Badge className={`${getStatusColor(project.status)} border font-medium text-xs`}>
                {project.status}
              </Badge>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className={`flex-1 p-6 flex flex-col ${featured ? 'p-8' : ''}`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs font-medium">
              {project.category}
            </Badge>
            {project.date && (
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Calendar size={12} />
                <span>{project.date}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 ${
            featured ? 'text-3xl mb-4' : 'text-xl'
          }`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className={`text-gray-600 leading-relaxed flex-1 ${
            featured ? 'text-lg mb-6' : 'text-sm mb-4'
          }`}>
            {featured && project.longDescription ? project.longDescription : project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, featured ? 6 : 4).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > (featured ? 6 : 4) && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                +{project.tech.length - (featured ? 6 : 4)}
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-auto">
            <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none">
              <a href={project.github} className="flex items-center justify-center gap-2">
                <Github size={16} />
                Code
              </a>
            </Button>
            <Button 
              size="sm" 
              asChild 
              className="flex-1 sm:flex-none bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <a href={project.demo} className="flex items-center justify-center gap-2">
                <ExternalLink size={16} />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientImageCard;
