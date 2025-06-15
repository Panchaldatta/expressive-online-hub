
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CodingContributionsCarousel from '../components/CodingContributionsCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6">
          <Hero />
          <About />
          
          {/* Coding Contributions Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Coding Contributions
              </h2>
              <p className="text-lg text-gray-600">
                My activity across various coding platforms
              </p>
            </div>
            
            <CodingContributionsCarousel />
          </section>
        </div>
        
        <Projects />
        
        <div className="max-w-6xl mx-auto px-6">
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
