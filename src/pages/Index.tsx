
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import GitHubContributions from '../components/GitHubContributions';
import LeetCodeContributions from '../components/LeetCodeContributions';
import CodeChefContributions from '../components/CodeChefContributions';

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent relative w-full">
      <AnimatedBackground />
      <div className="relative z-10 w-full">
        <Header />
        <main className="w-full pt-20">
          <div className="max-w-4xl mx-auto px-6">
            <Hero />
            <About />
            
            {/* Coding Contributions Section */}
            <section className="py-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Coding Contributions
                </h2>
                <p className="text-lg text-gray-600">
                  My activity across various coding platforms
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <GitHubContributions username="torvalds" />
                <LeetCodeContributions username="user123" />
                <CodeChefContributions username="chef123" />
              </div>
            </section>
          </div>
          
          <Projects />
          
          <div className="max-w-4xl mx-auto px-6">
            <Skills />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
