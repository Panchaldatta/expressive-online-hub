
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Calendar, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="py-20 mb-16">
      <div className="max-w-4xl mx-auto">
        {/* Main Hero Content */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 font-medium">Available for opportunities</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Datta Panchal
          </h1>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-8">
            <Code2 size={16} className="text-blue-600" />
            <span className="text-gray-700 font-medium">Full-Stack Developer</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-700 font-medium">UI/UX Designer</span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Crafting beautiful digital experiences with modern technologies. 
            Passionate about creating seamless user interfaces and robust backend systems.
          </p>
        </div>

        {/* Action Buttons */}
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

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Pune, India</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Experience</h3>
              <p className="text-gray-600">1+ Years</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Projects</h3>
              <p className="text-gray-600">7+ Completed</p>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://github.com/dattadevc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all hover:scale-105"
          >
            <Github size={20} className="text-gray-700" />
            <span className="font-medium text-gray-700">GitHub</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/dattadev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all hover:scale-105"
          >
            <Linkedin size={20} className="text-blue-600" />
            <span className="font-medium text-blue-600">LinkedIn</span>
          </a>
          
          <a 
            href="mailto:dattadevc@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-red-50 hover:bg-red-100 rounded-lg transition-all hover:scale-105"
          >
            <Mail size={20} className="text-red-600" />
            <span className="font-medium text-red-600">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
