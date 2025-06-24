
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-purple-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Deepika Allawada
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Creative Thinker, Full-Stack Developer, and Backend Engineer passionate about building meaningful tech solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/allawadadeepika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/deepika-allawada-73a479249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:deepikareddy5432@gmail.com"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About','Certificates', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 deepikareddy5432@gmail.com</p>
                <p>📞 +91 7207522968</p>
                <p>📍 Hyderabad, Telangana</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-purple-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <Heart size={16} className="text-red-500 animate-pulse" />
                <span>by Deepika Allawada</span>
              </div>
              
              <div className="flex items-center gap-6">
                <span className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} All rights reserved
                </span>
                <button
                  onClick={scrollToTop}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white text-sm transition-all duration-300 transform hover:scale-105"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
