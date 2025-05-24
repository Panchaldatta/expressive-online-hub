
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

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
