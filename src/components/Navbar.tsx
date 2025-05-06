
import React, { useEffect, useState } from 'react';
import { useScrollProgress } from '@/utils/Animations';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { TOP_LEVEL_DOMAIN } from './logic';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollProgress = useScrollProgress();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#skills' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Progress bar */}
      <div
        className="h-[2px] bg-primary/20 fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="h-full bg-primary transition-all duration-150 ease-out-expo"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Main navbar */}
      <nav
        className={`py-4 px-6 md:px-12 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity duration-200"
          >
            KhushPatel<span className="text-primary/80">{TOP_LEVEL_DOMAIN}</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="px-3 py-2 text-sm font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="/assets/Khush_Patel_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 text-sm font-medium border border-primary/20 hover:border-primary/50 rounded-full transition-all duration-300"
            >
              Resume
            </a>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-primary p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-background z-40 flex flex-col justify-center transform transition-transform duration-500 ease-out-expo ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } md:hidden pt-20`}
      >
        <div className="flex flex-col items-center space-y-6 px-12">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              onClick={closeMenu}
              className="text-2xl font-medium"
              style={{
                transitionDelay: `${isMenuOpen ? 0.1 + index * 0.05 : 0}s`,
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'opacity 0.3s ease, transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)'
              }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-6 px-6 py-2 text-lg font-medium border border-primary/30 rounded-full"
            style={{
              transitionDelay: `${isMenuOpen ? 0.1 + navItems.length * 0.05 : 0}s`,
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'opacity 0.3s ease, transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)'
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
