import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8 md:py-12 mt-20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Shalini<span className="text-primary">.dev</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Building digital experiences with modern web technologies.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/ShaliniTiwariiii"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/shalinitiwari"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:salinitiwari12345@gmail.com"
            className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 mt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Shalini Tiwari. All rights reserved.
      </div>
    </footer>
  );
}
