
import React, { useEffect } from "react";
import Button from "@/components/ui-custom/Button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  useEffect(() => {
    // Add staggered animation to elements with stagger-item class
    const staggerItems = document.querySelectorAll('.stagger-item');
    
    staggerItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('stagger-show');
      }, 100 * index);
    });
  }, []);

  return (
    <div className="w-full relative">
      {/* Hero Section - Updated with modern asymmetrical layout */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in relative">
                <span className="text-gradient">About</span> Me
                <div className="absolute -z-10 w-20 h-20 rounded-full bg-primary/20 blur-3xl left-1/4 top-1/2"></div>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 animate-fade-in max-w-lg" style={{ animationDelay: "0.2s" }}>
                Hello! I'm a passionate full-stack developer and designer with over 5 years of experience 
                creating beautiful, functional digital experiences.
              </p>
              <p className="text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                I specialize in building modern web applications using React, Node.js, and other cutting-edge 
                technologies. My approach combines technical expertise with an eye for design to create 
                solutions that are both beautiful and functional.
              </p>
              <p className="text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through writing and speaking.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <Button href="/resume.pdf">Download Resume</Button>
                <Button to="/contact" variant="outline">Get In Touch</Button>
              </div>
            </div>
            <div className="lg:col-span-5 animate-fade-in hover-lift relative" style={{ animationDelay: "0.6s" }}>
              <div className="absolute -z-10 w-full h-full bg-primary/5 rounded-full blur-3xl transform -translate-x-1/4"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                  alt="Profile" 
                  className="w-full object-cover shadow-xl aspect-[4/3] scale-105 hover:scale-100 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border-8 border-background bg-secondary/30 backdrop-blur-sm z-10 transform rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline with enhanced animations */}
      <section className="py-24 px-6 bg-secondary/80">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center reveal shimmer">Experience & Education</h2>
          
          <div className="space-y-12">
            {experience.map((item, index) => (
              <div 
                key={index} 
                className="relative flex flex-col md:flex-row reveal stagger-item"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline connector */}
                {index < experience.length - 1 && (
                  <div className="absolute left-4 md:left-[10.5rem] top-10 bottom-0 w-0.5 bg-border"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-[10.5rem] w-9 h-9 rounded-full bg-primary flex items-center justify-center -translate-x-1/2 shimmer">
                  <div className="w-3 h-3 rounded-full bg-primary-foreground"></div>
                </div>
                
                {/* Date */}
                <div className="w-full md:w-40 pt-1 pl-8 md:pl-0 md:text-right md:pr-12 mb-4 md:mb-0">
                  <span className="font-medium">{item.period}</span>
                </div>
                
                {/* Content */}
                <div className="pl-8 md:pl-12 pb-8 hover-lift">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground mb-2">{item.company}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills with modern card layout */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute -z-10 top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-bold mb-12 text-center reveal text-gradient">Skills & Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <Card 
                key={category.name} 
                className="reveal stagger-item overflow-hidden border border-border/40 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-6">
                  <div className="mb-1 flex items-center">
                    <span className="w-2 h-8 bg-primary rounded mr-3"></span>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="bg-secondary/80 rounded-full px-3 py-1.5 text-sm transform transition-transform duration-300 hover:scale-105 hover:bg-primary/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data
const experience = [
  {
    period: "2021 - Present",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    description: "Lead development of modern web applications using React, Next.js and TypeScript. Collaborate with designers and backend developers to implement complex features and optimize performance."
  },
  {
    period: "2018 - 2021",
    title: "UI/UX Designer & Developer",
    company: "Creative Solutions Agency",
    description: "Designed and developed user interfaces for clients across various industries. Created wireframes, prototypes, and implemented frontend solutions using modern frameworks and tools."
  },
  {
    period: "2015 - 2018",
    title: "Bachelor of Science in Computer Science",
    company: "University of Technology",
    description: "Graduated with honors. Specialized in web development and interactive media. Completed a thesis on optimizing user experience in single-page applications."
  }
];

const skills = [
  {
    name: "Frontend Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Redux", "HTML5/CSS3"]
  },
  {
    name: "Backend Development",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "Firebase"]
  },
  {
    name: "Design",
    skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX Design", "Wireframing", "Prototyping"]
  },
  {
    name: "Tools & Methods",
    skills: ["Git", "GitHub", "VS Code", "Agile/Scrum", "CI/CD", "Jest", "Webpack"]
  },
  {
    name: "Mobile & Other",
    skills: ["React Native", "Progressive Web Apps", "Responsive Design", "Cross-browser Testing", "Performance Optimization"]
  },
  {
    name: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Team Collaboration", "Project Management", "Time Management"]
  }
];

export default About;
