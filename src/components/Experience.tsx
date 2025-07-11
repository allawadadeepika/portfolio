
import React from 'react';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="relative">
            {/* Experience Card */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <a href="https://drive.google.com/file/d/17EenSRTxCFAnJjPuSLF9XKoGQBS67p4K/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-200"
                    >
                      <Building size={28} className="text-white" />
                    </a>

                  <div>
                    <h3 className="text-2xl font-bold text-white">Backend Developer Intern</h3>
                    <div className="flex items-center gap-3">
                      <p className="text-purple-400 font-semibold text-lg">MH-Cognition</p>
                      <a href="https://drive.google.com/file/d/17EenSRTxCFAnJjPuSLF9XKoGQBS67p4K/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-100 hover:text-purple-400 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        View Experiance Letter
                      </a>
                    </div>


                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-lg">
                  <div className="flex items-center gap-2 text-purple-300">
                    <Calendar size={16} />
                    <span className="font-semibold">Feb 2025 – June 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Developed RESTful APIs and backend logic for a real-time Learning Management System (LMS) using Django REST Framework
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Implemented efficient database models and optimized query performance for enhanced user experience
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Collaborated with frontend developers to ensure seamless API integration and data flow
                  </p>
                </div>
              </div>
              
              {/* Skills used */}
              <div className="mt-6 pt-6 border-t border-purple-500/20">
                <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Django", "Django REST Framework", "Python", "PostgreSQL", "Git", "API Development"].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
