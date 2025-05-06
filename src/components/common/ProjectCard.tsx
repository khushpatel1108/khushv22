
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useInView } from '@/utils/Animations';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
  liveUrl,
  index,
}) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out-expo ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-300 border-black/5">
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent z-10" />
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out-expo group-hover:scale-105"
          />
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="line-clamp-3">{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow pb-3">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <Badge key={i} variant="outline" className="font-mono text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-0 flex justify-between gap-2">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 w-4 h-4" />
                Code
              </a>
            </Button>
          )}

          {liveUrl && (
            <Button size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
