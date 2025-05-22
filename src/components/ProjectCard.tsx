
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Button from './ui-custom/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  index?: number;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  link,
  index = 0,
  className,
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border bg-card card-shadow reveal",
        className
      )} 
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 my-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          <Button to={link} size="sm" variant="outline" className="w-full mt-2">
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
