
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Salesforce Certificate",
      issuer: "Salesforce",
      year: "2023",
      icon: "⚡",
      color: "from-cyan-400 to-blue-400",
      issuerLink:"https://www.salesforce.com/trailblazer/erkowxpdk7n9knylzg",
      link: "https://skillwallet.smartinternz.com/internships/salesforce_certificates/76d7c0780ceb8fbf964c102ebc16d75f"
    },
    {
      title: " AWS Academy Cloud Foundations",
      issuer: "AWS",
      year: "2023",
      icon: "☁️",
      color: "from-blue-400 to-cyan-400",
      issuerLink:"https://www.credly.com/users/2111cs020117-allawada-deepika",
      link: "https://www.credly.com/badges/9acf34a9-b180-4e73-b02d-29b5a7a8875c/public_url"
    },
    {
      title: "AWS Academy Data Engineering",
      issuer: "AWS",
      year: "2024",
      icon: "🤖",
      color: "from-blue-400 to-cyan-400",
      issuerLink:"",
      link: "https://drive.google.com/file/d/1j0CEpS8S_2dhNCU_hKu7owj1NAVBVib4/view?usp=sharing"
    },
    {
      title: "AICTE AI-ML Virtual Internship",
      issuer: "AICTE",
      year: "2024",
      icon: "🤖",
      color: "from-blue-400 to-cyan-400",
      issuerLink:"https://www.aicte-india.org/",
      link: "https://drive.google.com/file/d/1j0CEpS8S_2dhNCU_hKu7owj1NAVBVib4/view?usp=sharing"
    },
    {
      title: "Artificial Intelligence",
      issuer: "NPTEL",
      year: "2024",
      icon: "🧠",
      color: "from-purple-400 to-pink-400",
      issuerLink:"https://nptel.ac.in/",
      link: "https://drive.google.com/file/d/15okwYh6zwJxPhKYTPARN_0JZo8ldd89z/view?usp=sharing"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      year: "2023",
      icon: "💻",
      color: "from-green-400 to-blue-400",
      issuerLink:"https://www.udemy.com/",
      link: "https://drive.google.com/file/d/1yX_tnqbxw0EtFT5OxO8jMH5yVrdQwa6V/view?usp=sharing"
    },
    {
      title: "Null Class Full Stack Certificate",
      issuer: "Null Class",
      year: "2023",
      icon: "🎯",
      color: "from-indigo-400 to-purple-400",
      issuerLink:"",
      link: "https://drive.google.com/file/d/1He_yH6c9rk6FfX3_02KfUxKVbTfAtcs1/view?usp=sharing"
    },
    
    {
      title: "Cambridge English Empower B2",
      issuer: "Cambridge",
      year: "2023",
      icon: "📚",
      color: "from-red-400 to-pink-400",
      issuerLink:"",
      link: "https://drive.google.com/file/d/1XexdPR0BNVK5Ke1Ynrs0-RDe9gMcW6HR/view?usp=sharing"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="group bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl`}>
                    {cert.icon}
                  </div>
                  <div className="text-right">
                    <Award size={20} className="text-purple-400 mb-1" />
                    <span className="text-sm text-gray-400">{cert.year}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                {cert.issuerLink ? (
                <a
                  href={cert.issuerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 font-semibold text-sm mb-4 hover:underline hover:text-purple-300 transition-colors duration-200 block"
                >
                  {cert.issuer}
                </a>
              ) : (
                <p className="text-purple-400 font-semibold text-sm mb-4">{cert.issuer}</p>
              )}


                
                {cert.link !== "#" ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    View Certificate
                  </a>
                ) : (
                  <button className="flex items-center gap-2 text-sm text-gray-500 cursor-not-allowed">
                    <ExternalLink size={16} />
                    View Certificate
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
