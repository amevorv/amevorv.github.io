
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  techStack: string[];
  liveDemo: string;
  githubRepo: string;
  private: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col group bg-background">
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
          {project.categories.map((category) => (
            <Badge key={category} variant="secondary" className="bg-background/80 backdrop-blur-sm font-medium">
              {category}
            </Badge>
          ))}
        </div>
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-primary/5 border-primary/10">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
          <Button size="sm" className={ project.private ? "opacity-50 cursor-not-allowed gap-2" : "gap-2"} asChild>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              <span>{project.private ? "Private" : "Sample"}</span>
              {!project.private && <ExternalLink className="h-4 w-4" />}
            </a>
          </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
