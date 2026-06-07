"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                With over <strong className="text-foreground font-semibold">2.3 years of experience</strong> in full-stack development, 
                I specialize in building end-to-end web applications. My journey started with a strong foundation in 
                Electrical and Electronics Engineering, which evolved into a deep passion for software engineering.
              </p>
              <p>
                Currently based in <strong className="text-foreground font-semibold">Lucknow, India</strong>, I recently worked at 
                Scogo Networks where I honed my skills in both frontend and backend technologies. I enjoy architecting 
                microservices with Spring Boot and crafting seamless user interfaces using Next.js and Tailwind CSS.
              </p>
              <p>
                I am actively seeking Full Stack Developer or Software Engineer opportunities where I can contribute to 
                meaningful projects and continue growing as an engineer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-background rounded-xl border border-border shadow-sm flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Layout size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Frontend</h3>
                  <p className="text-sm text-muted-foreground mt-1">React, Next.js</p>
                </div>
              </div>
              
              <div className="p-6 bg-background rounded-xl border border-border shadow-sm flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Server size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Backend</h3>
                  <p className="text-sm text-muted-foreground mt-1">Java, Spring Boot</p>
                </div>
              </div>
              
              <div className="p-6 bg-background rounded-xl border border-border shadow-sm flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Database</h3>
                  <p className="text-sm text-muted-foreground mt-1">MySQL, JPA</p>
                </div>
              </div>
              
              <div className="p-6 bg-background rounded-xl border border-border shadow-sm flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Languages</h3>
                  <p className="text-sm text-muted-foreground mt-1">JavaScript, Java</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
