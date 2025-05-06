
import React from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import { useInView } from '@/utils/Animations';
import { Briefcase } from 'lucide-react';
import { EXPERIENCES } from './logic';

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  index: number;
  intern?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  duration,
  description,
  index
}) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative pl-10 pb-10 transition-all duration-700 ease-out-expo ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {index !== 2 && (
        <div className="absolute left-[7px] top-[28px] h-full w-[2px] bg-border" />
      )}

      <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Briefcase className="h-2 w-2" />
      </div>
      
      <div className="space-y-2">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>
        <p className="text-base font-medium text-primary/80">{company}</p>
        <ul className="mt-2 space-y-2">
          {description.map((item, i) => (
            <li key={i} className="text-muted-foreground">
              {i+1}. {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container-pad">
        <SectionHeading title="Work Experience" subtitle="Career" />

        <div className="max-w-3xl mx-auto mt-10">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceItem
              key={index}
              title={experience.title}
              company={experience.company}
              duration={experience.duration}
              description={experience.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
