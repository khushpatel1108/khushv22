import React, { useEffect, useRef } from 'react';
import AnimatedText from './common/AnimatedText';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();

      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;

      containerRef.current.style.setProperty('--mouse-x', `${x}`);
      containerRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 md:py-0"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_calc(var(--mouse-x)*100%)_calc(var(--mouse-y)*100%),rgba(59,130,246,0.15),transparent_50%)]"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        />
      </div>

      <div className="container-pad flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block font-fira text-primary/80 tracking-wide mb-4 ml-1">
            Hi, my name is
          </span>
        </motion.div>

        <div className="stagger-children mb-4 flex flex-col space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="heading-xl text-foreground">
              <AnimatedText text="Khush Patel." />
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="heading-xl text-primary ">
              <AnimatedText text="I build things for the web." />
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-xl mb-12"
        >
          <p className="body-lg text-muted-foreground">
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, user-centered products.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-full px-6">
            <a href="#projects">
              View My Work
            </a>
          </Button>
        </div>

        <div className="flex items-center space-x-6 mt-16">
          <a href="https://github.com/KhushPatel28" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/KhushPatel28" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://twitter.com/KhushPatel_28" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="mailto:KhushPatel2883@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about" 
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <span className="text-xs font-medium mb-2">Scroll Down</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
