
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, Play, Pause } from 'lucide-react';
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
  isAnimated?: boolean;
}

const GradientImageCard: React.FC<GradientImageCardProps> = ({ 
  project, 
  featured = false, 
  isAnimated = false 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const images = project.images || [project.image];

  // Auto-advance images for animated card
  useEffect(() => {
    if (isAnimated && isPlaying && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAnimated, isPlaying, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
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
      featured ? 'h-[600px]' : 'h-[500px]'
    } ${isAnimated ? 'transform hover:scale-[1.02]' : ''}`}>
      {/* Inner card with white background */}
      <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Image section with slider */}
        <div className={`relative overflow-hidden ${featured ? 'h-80' : 'h-64'}`}>
          <div className="relative w-full h-full">
            <img
              src={images[currentImageIndex]}
              alt={`${project.title} preview ${currentImageIndex + 1}`}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isAnimated ? 'group-hover:scale-110' : 'group-hover:scale-105'
              }`}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Animated floating elements for animated card */}
            {isAnimated && (
              <>
                <div className="absolute top-6 left-6 w-3 h-3 bg-white/30 rounded-full animate-pulse" />
                <div className="absolute top-12 right-8 w-2 h-2 bg-white/40 rounded-full animate-ping" />
                <div className="absolute bottom-16 left-8 w-4 h-4 bg-white/20 rounded-full animate-bounce" />
              </>
            )}

            {/* Navigation arrows for multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Play/Pause button for animated card */}
            {isAnimated && images.length > 1 && (
              <button
                onClick={togglePlayPause}
                className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
            )}

            {/* Image indicators with progress bar for animated card */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                    }`}
                  >
                    {isAnimated && index === currentImageIndex && isPlaying && (
                      <div className="absolute top-0 left-0 h-full bg-white/80 animate-[slide-progress_3000ms_linear_infinite] w-0" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Status badge */}
            <div className="absolute top-4 right-4">
              <Badge className={`${getStatusColor(project.status)} border font-medium text-xs backdrop-blur-sm`}>
                {project.status}
              </Badge>
            </div>

            {/* Live indicator for animated card */}
            {isAnimated && (
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500/20 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-white text-xs font-medium">LIVE</span>
              </div>
            )}
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
          } ${isAnimated ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : ''}`}>
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
                className={`px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors ${
                  isAnimated ? 'hover:scale-105' : ''
                }`}
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
            <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none hover:scale-105 transition-transform">
              <a href={project.github} className="flex items-center justify-center gap-2">
                <Github size={16} />
                Code
              </a>
            </Button>
            <Button 
              size="sm" 
              asChild 
              className={`flex-1 sm:flex-none transition-transform hover:scale-105 ${
                isAnimated 
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              <a href={project.demo} className="flex items-center justify-center gap-2">
                <ExternalLink size={16} />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated border for animated card */}
      {isAnimated && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse" />
      )}
    </div>
  );
};

export default GradientImageCard;
