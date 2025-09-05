
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80"></div>
        
        {/* Large Aurora Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 hero-gradient rounded-full blur-3xl opacity-20 animate-aurora"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl opacity-15 animate-aurora" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-25 animate-aurora" style={{ animationDelay: '14s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary rounded-full opacity-60 animate-particle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-accent rounded-full opacity-80 animate-particle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-40 w-4 h-4 bg-primary rounded-full opacity-50 animate-particle" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-60 right-20 w-2 h-2 bg-accent rounded-full opacity-70 animate-particle" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-1/3 left-1/5 w-3 h-3 bg-primary rounded-full opacity-40 animate-particle" style={{ animationDelay: '8s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-accent rounded-full opacity-90 animate-particle" style={{ animationDelay: '10s' }}></div>
        
        {/* Gradient Mesh */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Full Stack Engineer @Devstree • Student @University
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Hi, I'm{" "}
            <span className="hero-text-gradient">
              Pavandeep Kumar
            </span>
            <br />
            <TypingAnimation 
              text="Full Stack Developer" 
              delay={2000}
              speed={150}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            />
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Product-minded engineer with{" "}
            <span className="text-primary font-semibold">2.5 years</span> of experience building scalable solutions.{" "}
            Led teams, trained interns, and delivered{" "}
            <span className="text-accent">10+ large-scale projects</span> across industries
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="hero-gradient text-primary-foreground font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group animate-pulse-glow"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-3 rounded-full transition-all duration-300 hover:animate-pulse-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            {[
              { href: "https://github.com/pavandeepkumar", icon: Github, delay: 0 },
              { href: "https://www.linkedin.com/in/pavandeepkumar/", icon: Linkedin, delay: 0.1 },
              { href: "mailto:pavandeepkumarmlk@gmail.com", icon: Mail, delay: 0.2 }
            ].map(({ href, icon: Icon, delay }) => (
              <motion.a
                key={href}
                href={href}
                target={href.includes('mailto') ? undefined : "_blank"}
                rel={href.includes('mailto') ? undefined : "noopener noreferrer"}
                className="p-3 glass-card rounded-full hover:bg-primary/10 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + delay, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
