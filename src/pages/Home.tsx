
import React from "react";
import Scene3D from "@/components/Scene3D";
import Button from "@/components/ui-custom/Button";
import ProjectCard from "@/components/ProjectCard";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto w-full">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
              <span className="text-primary">Creative</span> Developer <br /> & Designer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              I create exceptional digital experiences with a focus on clean code, 
              beautiful design, and thoughtful interactions.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button to="/projects" size="lg">
                View My Work
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="lg:h-[600px] h-[400px] w-full animate-fade-in relative" style={{ animationDelay: "0.4s" }}>
            <Scene3D className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="bg-secondary py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 reveal">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto reveal">
              Here are some of my most recent and notable projects. Each one represents 
              a unique challenge and solution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
          <div className="text-center mt-12 reveal">
            <Button to="/projects" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 reveal">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto reveal">
              With a diverse set of skills across multiple disciplines, I bring
              a holistic approach to every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.category} 
                className="bg-card p-6 rounded-lg border reveal" 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's collaborate to bring your ideas to life with creative solutions and exceptional execution.
          </p>
          <Button 
            to="/contact" 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90"
          >
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

// Sample data
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with a clean design and smooth checkout experience.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "/projects/1",
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio website for a professional photographer with a focus on visual content.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["React", "Three.js", "Tailwind CSS"],
    link: "/projects/2",
  },
  {
    title: "Mobile Application",
    description: "A cross-platform mobile application for tracking personal fitness and nutrition goals.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "/projects/3",
  },
];

const skills = [
  {
    category: "Frontend Development",
    items: [
      "React & React Native",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js & WebGL",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "RESTful APIs",
    ],
  },
  {
    category: "Design & UI/UX",
    items: [
      "Figma",
      "Adobe Creative Suite",
      "Responsive Design",
      "Motion Design",
      "User Research",
    ],
  },
];

export default Home;
