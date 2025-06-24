
import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      title: "MadLibs Generator",
      description: "Creates humorous stories using templates and user input with an interactive and engaging interface.",
      techStack: ["Python", "Django", "HTML", "CSS", "JavaScript"],
      category: "Web Development",
      github: "https://github.com/allawadadeepika/Madlibs-Generator.git",
      demo: "#",
      image: "🎭"
    },
    {
      title: "Notes App",
      description: "A full-stack web application for jotting down thoughts and sharing them with friends. Users can write, save, and optionally share notes with others.",
      techStack: ["Django", "JavaScript", "HTML", "CSS", "SQLite"],
      category: "Web Development",
      github: "https://github.com/allawadadeepika/notesappclone.git",
      demo: "#",
      image: "📝"
    },
    {
      title: "DevConnect",
      description: "A platform connecting developers and tech enthusiasts for collaboration and networking opportunities.",
      techStack: ["Django", "Bootstrap", "JavaScript", "PostgreSQL"],
      category: "Web Development",
      github: "https://github.com/allawadadeepika/Devconnect.git",
      demo: "#",
      image: "👥"
    },
    {
      title: "Warts Treatment Method Detection",
      description: "ML-powered tool to recommend optimal treatment methods using advanced algorithms and data analysis.",
      techStack: ["Python", "Machine Learning", "Django", "TensorFlow"],
      category: "Machine Learning",
      github: "https://github.com/allawadadeepika",
      demo: "#",
      image: "🔬"
    }
  ];

  const categories = ['All', 'Web Development', 'Machine Learning'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm rounded-full p-2 border border-purple-500/20">
              <Filter size={20} className="text-purple-400 ml-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'text-gray-400 hover:text-purple-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-purple-600 rounded-lg transition-all duration-300 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all duration-300 text-sm"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
