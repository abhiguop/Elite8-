
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  // Filter projects based on the selected category
  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A curated collection of my work across web development, design, and mobile applications.
          </p>
          
          {/* Project Filters */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <FilterButton 
              active={filter === "all"} 
              onClick={() => setFilter("all")}
            >
              All Projects
            </FilterButton>
            <FilterButton 
              active={filter === "web"} 
              onClick={() => setFilter("web")}
            >
              Web Development
            </FilterButton>
            <FilterButton 
              active={filter === "design"} 
              onClick={() => setFilter("design")}
            >
              UI/UX Design
            </FilterButton>
            <FilterButton 
              active={filter === "mobile"} 
              onClick={() => setFilter("mobile")}
            >
              Mobile Apps
            </FilterButton>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Filter Button Component
const FilterButton = ({ children, active, onClick }: { children: React.ReactNode, active: boolean, onClick: () => void }) => {
  return (
    <button
      className={`px-6 py-2 rounded-full transition-colors ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-foreground hover:bg-secondary/80"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Sample data
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with a clean design and smooth checkout experience.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "web",
    link: "/projects/1",
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio website for a professional photographer with a focus on visual content.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["React", "Three.js", "Tailwind CSS"],
    category: "web",
    link: "/projects/2",
  },
  {
    title: "Mobile Application",
    description: "A cross-platform mobile application for tracking personal fitness and nutrition goals.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["React Native", "Firebase", "Redux"],
    category: "mobile",
    link: "/projects/3",
  },
  {
    title: "Dashboard UI Design",
    description: "A clean and intuitive dashboard interface for an analytics platform.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    technologies: ["Figma", "Adobe XD", "Sketch"],
    category: "design",
    link: "/projects/4",
  },
  {
    title: "Blog Platform",
    description: "A minimalist blogging platform designed for writers and content creators.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["Next.js", "GraphQL", "PostgreSQL"],
    category: "web",
    link: "/projects/5",
  },
  {
    title: "Health App UI Design",
    description: "A modern mobile UI design for a health tracking application.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    technologies: ["Figma", "Prototyping", "User Testing"],
    category: "design",
    link: "/projects/6",
  },
];

export default Projects;
