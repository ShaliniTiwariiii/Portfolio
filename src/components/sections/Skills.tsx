"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Redux Toolkit", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Spring Data JPA", "REST APIs", "Microservices"],
  },
  {
    title: "Database",
    skills: ["MySQL", "Hibernate"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "Vercel", "JWT", "Stripe API", "Gemini API"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              My <span className="text-primary">Technical Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with to build robust applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILL_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-border/50 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
