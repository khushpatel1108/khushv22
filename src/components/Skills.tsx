
import React from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import SkillItem from '@/components/common/SkillItem';
import {
  Code,
  Database,
  Layout,
  PenTool,
  Server,
  GitBranch,
  Cloud,
  Cpu,
  AppWindow,
  FilePlus,
} from 'lucide-react';

const Skills: React.FC = () => {
  const SKILLS = [
    { name: 'C++', icon: <Cpu /> },
    { name: 'Python', icon: <Code /> },
    { name: 'HTML', icon: <Layout /> },
    { name: 'CSS', icon: <Layout /> },
    { name: 'Bootstrap', icon: <Server /> },
    { name: 'TailwindCSS', icon: <Server /> },
    { name: 'TypeScript', icon: <Database /> },
    { name: 'React', icon: <AppWindow /> },
    { name: 'Angular', icon: <PenTool /> },
    { name: 'Jest', icon: <PenTool /> },
    { name: 'Node.js', icon: <Server /> },
    { name: 'Express', icon: <GitBranch /> },
    { name: 'RESTful APIs', icon: <Server /> },
    { name: 'GraphQL', icon: <Database /> },
    { name: 'MongoDB', icon: <Database /> },
    { name: 'PostgreSQL', icon: <Database /> },
    { name: 'AWS', icon: <Cloud /> },
    { name: 'Git', icon: <GitBranch /> },
    { name: 'GitHub', icon: <GitBranch /> },
    { name: 'Postman', icon: <FilePlus /> },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/30">
      <div className="container-pad">
        <SectionHeading title="Skills & Technologies" subtitle="Expertise" centered />

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {SKILLS.map((skill, index) => (
            <SkillItem
              key={index}
              icon={skill.icon}
              name={skill.name}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
