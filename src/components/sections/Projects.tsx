"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    title: "AI Finance Manager",
    description: "An intelligent, full-stack personal finance application that transforms raw transaction data into visual, actionable financial insights using Generative AI. Features dynamic UI with responsive breakdown charts and personalized budgeting advice.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
    techStack: ["Next.js", "React", "Tailwind CSS", "Recharts", "Java", "Spring Boot", "MySQL", "Gemini API"],
    github: "https://github.com/ShaliniTiwariiii/aifinance",
    live: null,
  },
  {
    title: "KMD Real Estate Platform",
    description: "A modern and responsive real estate website for showcasing residential, commercial, and land investment opportunities. Implemented dynamic property listings, project showcase pages, inquiry forms, and SEO-friendly content.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=500",
    techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux Saga"],
    github: null,
    live: "https://kmdrealestatevrindavan.com/",
  },
  {
    title: "E-Commerce Platform",
    description: "Microservices-based e-commerce system with relational data models. Integrated Stripe Payment Gateway, implemented JWT/BCrypt authentication, and wrote comprehensive unit tests ensuring reliability.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=500",
    techStack: ["Java", "Spring Boot", "MySQL", "JPA/Hibernate", "JWT", "Stripe API"],
    github: "https://github.com/ShaliniTiwariiii",
    live: null,
  },
  {
    title: "Movie Ticket Booking System",
    description: "Full-stack movie booking application (BookMyShow Clone) with real-time seat selection. Handled race conditions with DB-level locking, designed RESTful APIs following MVC and clean architecture principles.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800&h=500",
    techStack: ["Java", "Spring Boot", "MySQL", "JPA/Hibernate", "JWT"],
    github: "https://github.com/ShaliniTiwariiii",
    live: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work, showcasing my skills in full-stack development, API integration, and system design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-background rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-60 overflow-hidden bg-muted">
                 
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-background/90 text-foreground rounded-full hover:scale-110 transition-transform"
                      >
                        <Github size={20} />
                        <span className="sr-only">View Source</span>
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-primary/90 text-primary-foreground rounded-full hover:scale-110 transition-transform"
                      >
                        <ExternalLink size={20} />
                        <span className="sr-only">View Live</span>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
