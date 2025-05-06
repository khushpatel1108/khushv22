
import React from 'react';
import { useInView } from '@/utils/Animations';

interface SkillItemProps {
  icon: React.ReactNode;
  name: string;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, name, index }) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex items-center gap-2 p-3 md:p-4 rounded-lg border border-border/40 bg-card transition-all duration-500 ease-out-expo hover:border-primary/20 hover:shadow-sm ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 text-primary flex items-center">
        {icon}
      </div>
      <span className="text-xs sm:text-sm font-medium truncate overflow-hidden whitespace-nowrap max-w-full">
        {name}
      </span>
    </div>
  );
};

export default SkillItem;
