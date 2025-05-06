
import React from 'react';
import { useInView } from '@/utils/Animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`mb-16 ${centered ? 'text-center' : ''} ${className} ${isInView ? 'reveal active' : 'reveal'}`}
    >
      <span className="text-sm uppercase tracking-wider font-mono text-muted-foreground px-3 py-1 border border-border rounded-full inline-block mb-4">
        {subtitle || ''}
      </span>
      <h2 className="heading-lg">{title}</h2>
    </div>
  );
};

export default SectionHeading;
