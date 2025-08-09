
import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/99c00cca-e4a3-4d71-9fec-5722f65a5048.png" 
                    alt="Deepika Allawada"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hey there! I'm <span className="text-purple-400 font-semibold">Deepika Allawada</span> — a curious mind, creative thinker, and passionate developer. With a B.Tech degree in hand and an eagerness to build meaningful tech, I've dived into backend development through my internship at MH-Cognition, where I helped build a real-time LMS using Django REST Framework.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I've also journeyed through full stack web development with HTML, CSS, and JavaScript, and explored the art of app design using Flutter and Dart. When I'm not coding, you'll find me crafting or learning something new — because creativity doesn't stop at the screen.
              </p>

              <a
                href="https://drive.google.com/file/d/1OZOZz8y5R6BhMA1qJBMeYvXF4b9bN1cL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
