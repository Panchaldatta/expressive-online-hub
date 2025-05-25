
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  Trophy, 
  Target, 
  Heart,
  Lightbulb,
  Users,
  Zap
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code2, color: 'bg-blue-100 text-blue-600' },
    { name: 'UI/UX Design', icon: Palette, color: 'bg-pink-100 text-pink-600' },
    { name: 'Backend Development', icon: Database, color: 'bg-green-100 text-green-600' },
    { name: 'Web Development', icon: Globe, color: 'bg-purple-100 text-purple-600' }
  ];

  const stats = [
    { label: 'Years Experience', value: '1+', icon: Trophy },
    { label: 'Projects Completed', value: '7+', icon: Target },
    { label: 'Happy Clients', value: '5+', icon: Heart },
    { label: 'Technologies', value: '10+', icon: Zap }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to solve complex problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong relationships with teams and clients to deliver exceptional results.'
    },
    {
      icon: Target,
      title: 'Quality',
      description: 'Committed to delivering high-quality code and designs that exceed expectations.'
    }
  ];

  return (
    <section id="about" className="py-20 mb-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">About Me</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Passionate Developer &<br />Creative Problem Solver
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into digital reality through clean code, 
            thoughtful design, and innovative solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-gray-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Started as a curious student exploring web development, I've evolved into a 
                full-stack developer who thrives on creating seamless user experiences. 
                My background in both design and development gives me a unique perspective 
                on building products that users love.
              </p>
              
              <p>
                I believe in the power of clean, maintainable code and intuitive design. 
                Every project is an opportunity to learn something new and push the 
                boundaries of what's possible on the web.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                    <skill.icon className="w-4 h-4 mr-2" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Drives Me</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-md bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-gray-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with 
              passionate people. Let's turn your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                <Users className="w-5 h-5" />
                Start a Conversation
              </a>
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all"
              >
                <Trophy className="w-5 h-5" />
                View My Work
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
