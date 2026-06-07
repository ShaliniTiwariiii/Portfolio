"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Experience & <span className="text-primary">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              My professional journey and academic background.
            </p>
          </div>

          <div className="space-y-12">
            {/* Experience */}
            <motion.div variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>
              
              <div className="relative mb-12 md:flex items-center justify-between">
                <div className="md:w-[45%] md:text-right mb-4 md:mb-0 order-1 md:order-1">
                  <h3 className="text-xl font-bold text-foreground">Software Engineer</h3>
                  <p className="text-primary font-medium mt-1">Scogo Networks</p>
                  <p className="text-sm text-muted-foreground mt-2">Previous Company</p>
                </div>
                
                <div className="absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 order-2">
                  <Briefcase size={16} className="text-primary" />
                </div>
                
                <div className="md:w-[45%] bg-background p-6 rounded-xl border border-border shadow-sm order-3">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Contributed to full-stack development, building scalable solutions using React.js, Next.js, and Java/Spring Boot. 
                    Collaborated with cross-functional teams to deliver high-quality software features and improve application performance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }} className="relative pl-8 md:pl-0 mt-20">
              <div className="relative mb-12 md:flex items-center justify-between">
                <div className="md:w-[45%] bg-background p-6 rounded-xl border border-border shadow-sm order-3 md:order-1 text-left md:text-right">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Completed comprehensive studies in Electrical and Electronics Engineering, developing strong analytical and problem-solving skills that transitioned perfectly into software engineering.
                  </p>
                </div>
                
                <div className="absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-purple-500 flex items-center justify-center z-10 order-2 md:order-2">
                  <GraduationCap size={16} className="text-purple-500" />
                </div>
                
                <div className="md:w-[45%] mb-4 md:mb-0 order-1 md:order-3 md:pl-8 text-left">
                  <h3 className="text-xl font-bold text-foreground">B.Tech - Electrical and Electronics Engineering</h3>
                  <p className="text-purple-500 font-medium mt-1">UPTU (Dr. A.P.J. Abdul Kalam Technical University)</p>
                  <p className="text-sm text-muted-foreground mt-2">2021</p>
                </div>
              </div>
            </motion.div>

            {/* Certification */}
            <motion.div variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }} className="relative pl-8 md:pl-0">
              <div className="relative md:flex items-center justify-between">
                <div className="md:w-[45%] md:text-right mb-4 md:mb-0 order-1 md:order-1">
                  <h3 className="text-xl font-bold text-foreground">Software Development & Problem Solving</h3>
                  <p className="text-emerald-500 font-medium mt-1">Scaler Academy</p>
                  <p className="text-sm text-muted-foreground mt-2">2025</p>
                </div>
                
                <div className="absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-emerald-500 flex items-center justify-center z-10 order-2">
                  <Award size={16} className="text-emerald-500" />
                </div>
                
                <div className="md:w-[45%] bg-background p-6 rounded-xl border border-border shadow-sm order-3">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Advanced Data Structures and Algorithms (DSA), System Design, and Full Stack Development program to master modern software engineering practices.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
