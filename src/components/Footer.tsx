
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/pavandeepkumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/pavandeepkumar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:pavandeepkumarmlk@gmail.com" 
              className="p-3 glass-card rounded-full hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
            <span>Built with</span>
            <span> ❤️ by Pavandeep Kumar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
