
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in CSE (AIML)",
      institution: "Malla Reddy University",
      period: "2021 – 2025",
      score: "CGPA: 8.80",
      icon: "🎓"
    },
    {
      degree: "Intermediate (M.P.C)",
      institution: "NRI Junior College",
      period: "2019 – 2021",
      score: "94.8%",
      icon: "📚"
    },
    {
      degree: "SSC",
      institution: "Silver Dale The High School",
      period: "2018 – 2019",
      score: "CGPA: 9.2",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>
            
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-purple-400 rounded-full border-4 border-gray-900"></div>
                  
                  {/* Content Card */}
                  <div className="ml-20 w-full">
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-[1.02]">
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{edu.icon}</span>
                            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          </div>
                          <p className="text-purple-400 font-semibold mb-2">{edu.institution}</p>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-lg">
                          <span className="text-purple-300 font-semibold">{edu.score}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
