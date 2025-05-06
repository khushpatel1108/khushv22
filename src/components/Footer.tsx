
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { TOP_LEVEL_DOMAIN } from './logic';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container-pad">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity duration-200">
              KhushPatel<span className="text-primary/80">{TOP_LEVEL_DOMAIN}</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Designed and built by Khush Patel
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a href="https://github.com/khushpatel1108" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/khush-patel-89b0b426a" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com/KhushPatel_28" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:khushbtech20@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Mail size={18} />
                <span className="sr-only">Email</span>
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              © {currentYear} Khush Patel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
