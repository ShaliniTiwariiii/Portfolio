"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground mt-1">salinitiwari12345@gmail.com</p>
                  {/* Replace with actual email */}
                  <a href="mailto:salinitiwari12345@gmail.com" className="text-primary text-sm hover:underline mt-2 inline-block">
                    Send a message
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground mt-1">Lucknow, India</p>
                  <span className="text-sm text-muted-foreground block mt-2">Open to remote & relocation</span>
                </div>
              </div>
            </div>

            <form className="bg-background p-8 rounded-xl border border-border shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Hello!"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <Button type="submit" className="w-full gap-2">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
