
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const projects = [
    {
      id: "easyprops",
      title: "🟢 Easy Props - Real Estate Platform",
      description: "A comprehensive platform for property owners and tenants to manage listings, rentals, and transactions. Features automated property tracking, tenant management, and secure payment integration for seamless real estate experience.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#"
    },
    {
      id: "naibeau",
      title: "💇 Naibeau - Salon Management System",
      description: "An end-to-end solution for salons to manage appointments, services, and staff schedules. Customers can book services online while salon owners track availability, payments, and client history in real time.",
      tech: ["React", "Vite", "PostgreSQL", "TanStack Query"],
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "https://naibeau.com"
    },
    {
      id: "netparts",
      title: "🚗 Netparts - Auto Parts E-commerce",
      description: "An e-commerce platform dedicated to auto parts, offering easy product search, ordering, and fast delivery tracking. Streamlines the supply chain with real-time stock management and logistics integration.",
      tech: ["Next.js", "Node.js", "Express.js", "PayPal API"],
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#"
    },
    {
      id: "reelflix",
      title: "🎬 Reelflix - Short Video Platform",
      description: "A short-form entertainment platform enabling creators to upload content and viewers to enjoy engaging, high-quality short videos. Built with scalability and smooth video playback for modern audiences.",
      tech: ["React", "Socket.io", "Node.js", "Redis"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#"
    },
    {
      id: "socialscribe",
      title: "✍️ Social Scribe - AI Content Tool",
      description: "An AI-powered tool that helps businesses and creators generate engaging social media content. Provides analytics and automated engagement strategies to boost reach and online presence.",
      tech: ["React", "Chart.js", "Express", "OpenAI API"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "https://socialscribeai.com/"
    },
    {
      id: "porter",
      title: "⚡ Porter-like Delivery System",
      description: "Designed and architected a comprehensive delivery system similar to Porter, handling logistics, real-time tracking, and driver management. Led the technical planning and system design for scalable operations.",
      tech: ["System Design", "Microservices", "Real-time APIs", "Database Architecture"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-15" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="hero-text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 hero-gradient mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world projects delivered at Devstree and through client collaborations across industries
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                rotateY: 2,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="project-card p-6 rounded-2xl h-full relative overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10" />
                
                <div className="relative mb-6 rounded-xl overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-300" />
                  
                  {/* Project icon overlay */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-2xl">
                        {project.title.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                  
                  {/* View project button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="hero-gradient">
                      View Project
                    </Button>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center space-x-2 group/btn hover:border-primary/50"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                  >
                    <Github className="h-4 w-4 group-hover/btn:text-primary transition-colors" />
                    <span>Code</span>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex items-center space-x-2 hero-gradient"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.live, '_blank');
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
