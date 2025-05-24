
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-10 mb-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          About Me
        </h2>
        
        <div className="prose prose-lg text-gray-600 mb-8">
          <p className="mb-4">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that combine technical excellence with thoughtful design. I love turning complex 
            problems into simple, beautiful solutions.
          </p>
          
          <p className="mb-4">
            Started as a curious student exploring web development, I've evolved into a 
            full-stack developer who thrives on creating seamless user experiences. 
            My background in both design and development gives me a unique perspective 
            on building products that users love.
          </p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>5+ years of professional experience</li>
            <li>20+ successful projects delivered</li>
            <li>Continuous learning mindset</li>
          </ul>
        </div>
        
        <div className="border-t border-gray-200"></div>
      </div>
    </section>
  );
};

export default About;
