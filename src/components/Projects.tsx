import React from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import ProjectCard from '@/components/common/ProjectCard';
import { PROJECTS } from './logic';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container-pad">
        <SectionHeading title="My Projects" subtitle="Featured Work" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
