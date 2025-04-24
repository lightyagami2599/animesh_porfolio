import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Animesh<span className="text-primary">_Portfolio</span></h3>
            <p className="text-gray-300 mb-4">Creating spaces that inspire, connect, and transform.</p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-300 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:jenaanimesh2002@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
              <li><a href="/education" className="text-gray-300 hover:text-primary transition-colors">Education</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Parul University</li>
              <li>Vadodara, Gujarat</li>
              <li>jenaanimesh2002@gmail.com</li>
              <li>+91 - 95564 98920</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Animesh Jena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;