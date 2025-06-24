
import React from 'react';

const Skills = () => {
  const skills = [
    { name: "Python", level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "Django", level: 85, color: "from-green-400 to-green-600" },
    { name: "Full Stack Development", level: 80, color: "from-blue-400 to-blue-600" },
    { name: "React.js", level: 75, color: "from-cyan-400 to-cyan-600" },
    { name: "Bootstrap", level: 85, color: "from-purple-400 to-purple-600" },
    { name: "Flutter", level: 70, color: "from-blue-400 to-cyan-400" },
    { name: "Machine Learning", level: 75, color: "from-pink-400 to-red-400" },
    { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-400" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <span className="text-purple-400 font-semibold">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `skillProgress 2s ease-out ${index * 0.1}s both`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tech Icons/Chips */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Python", "Django", "React", "JavaScript", "HTML/CSS", "Bootstrap", "Flutter", "Dart", "ML", "AWS"].map((tech, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 hover:border-purple-400/60 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 transform hover:scale-105"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
