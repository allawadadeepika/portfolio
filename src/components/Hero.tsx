import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-purple-400 rounded-full animate-float delay-300"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-blue-400 rounded-full animate-float delay-700"></div>
      <div className="absolute top-1/3 left-20 w-3 h-3 bg-pink-400 rounded-full animate-float delay-1000"></div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1 shadow-lg">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src="/lovable-uploads/2cef081b-fb57-42e7-8ae1-063bf0ca6024.png"
              alt="Deepika Allawada"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-slide-up">
          Deepika Allawada
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slide-up delay-300">
          Full-Stack Developer | Backend Developer | Problem Solver
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up delay-500">
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-6 py-2 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Let's Connect
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-slide-up delay-700">
          <a
            href="https://github.com/allawadadeepika"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/deepika-reddy-03944a217/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:deepikareddy5432@gmail.com"
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={20} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('#about')}
          className="animate-bounce"
        >
          <ArrowDown size={28} className="text-purple-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;