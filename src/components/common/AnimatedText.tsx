
import React, { useEffect, useRef } from 'react';
import { useInView } from '@/utils/Animations';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  once = true,
  threshold = 0.1,
}) => {
  const { ref, isInView } = useInView({ threshold });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && once) {
      hasAnimated.current = true;
    }
  }, [isInView, once]);

  const shouldAnimate = once ? (isInView || hasAnimated.current) : isInView;

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={`inline-block relative overflow-hidden ${className}`}
    >
      <span
        className={`inline-block transition-transform duration-700 ease-out-expo ${shouldAnimate ? 'translate-y-0' : 'translate-y-full'
          }`}
      >
        {text}
      </span>
    </span>
  );
};

export default AnimatedText;
