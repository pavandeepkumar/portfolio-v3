import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Project data - in a real app, this would come from an API or database
  const projects = {
    easyprops: {
      title: "🟢 Easy Props - Real Estate Platform",
      description: "A comprehensive platform for property owners and tenants to manage listings, rentals, and transactions. Features automated property tracking, tenant management, and secure payment integration for seamless real estate experience.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      totalTech: 4,
      keyFeatures: 8,
      technologies: [
        { name: "React", color: "bg-blue-500" },
        { name: "Node.js", color: "bg-green-500" },
        { name: "PostgreSQL", color: "bg-blue-600" },
        { name: "Stripe", color: "bg-purple-500" }
      ],
      features: [
        {
          icon: "🏠",
          title: "Property Management",
          description: "Comprehensive property listing and management system with automated tracking."
        },
        {
          icon: "👥",
          title: "Tenant Management",
          description: "Complete tenant onboarding, communication, and management workflows."
        },
        {
          icon: "💳",
          title: "Payment Integration",
          description: "Secure payment processing for rent, deposits, and maintenance fees."
        },
        {
          icon: "📊",
          title: "Analytics Dashboard",
          description: "Real-time insights on property performance and financial metrics."
        },
        {
          icon: "📱",
          title: "Mobile Responsive",
          description: "Fully responsive design optimized for mobile and tablet devices."
        },
        {
          icon: "🔔",
          title: "Real-time Notifications",
          description: "Instant notifications for rent reminders, maintenance requests, and updates."
        },
        {
          icon: "📄",
          title: "Document Management",
          description: "Digital lease agreements, contracts, and document storage system."
        },
        {
          icon: "🔍",
          title: "Advanced Search",
          description: "Powerful search and filtering for properties based on multiple criteria."
        }
      ],
      github: "#",
      live: "#"
    },
    naibeau: {
      title: "💇 Naibeau - Salon Management System",
      description: "An end-to-end solution for salons to manage appointments, services, and staff schedules. Customers can book services online while salon owners track availability, payments, and client history in real time.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      totalTech: 4,
      keyFeatures: 7,
      technologies: [
        { name: "React", color: "bg-blue-500" },
        { name: "Vite", color: "bg-purple-600" },
        { name: "PostgreSQL", color: "bg-blue-600" },
        { name: "TanStack Query", color: "bg-red-500" }
      ],
      features: [
        {
          icon: "📅",
          title: "Appointment Booking",
          description: "Online booking system with real-time availability and automated confirmations."
        },
        {
          icon: "👨‍💼",
          title: "Staff Management",
          description: "Complete staff scheduling, availability tracking, and performance monitoring."
        },
        {
          icon: "💸",
          title: "Payment Processing",
          description: "Integrated payment system with multiple payment methods and automated billing."
        },
        {
          icon: "📊",
          title: "Business Analytics",
          description: "Comprehensive analytics dashboard for revenue, bookings, and customer insights."
        },
        {
          icon: "👤",
          title: "Customer Management",
          description: "Detailed customer profiles with service history and preferences tracking."
        },
        {
          icon: "📱",
          title: "Mobile App",
          description: "Native mobile experience for both customers and salon staff."
        },
        {
          icon: "🔔",
          title: "Automated Reminders",
          description: "SMS and email reminders for appointments and follow-up services."
        }
      ],
      github: "#",
      live: "https://admin.naibeau.com"
    },
    netparts: {
      title: "🚗 Netparts - Auto Parts E-commerce",
      description: "An e-commerce platform dedicated to auto parts, offering easy product search, ordering, and fast delivery tracking. Streamlines the supply chain with real-time stock management and logistics integration.",
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80",
      totalTech: 4,
      keyFeatures: 8,
      technologies: [
        { name: "Next.js", color: "bg-gray-900" },
        { name: "Node.js", color: "bg-green-500" },
        { name: "Express.js", color: "bg-gray-600" },
        { name: "PayPal API", color: "bg-blue-600" }
      ],
      features: [
        {
          icon: "🔍",
          title: "Advanced Part Search",
          description: "Intelligent search system with vehicle compatibility and part specifications."
        },
        {
          icon: "📦",
          title: "Inventory Management",
          description: "Real-time stock tracking with automated reorder points and supplier integration."
        },
        {
          icon: "🚚",
          title: "Delivery Tracking",
          description: "Real-time delivery tracking with GPS integration and customer notifications."
        },
        {
          icon: "💳",
          title: "Secure Payments",
          description: "Multiple payment options with PayPal integration and fraud protection."
        },
        {
          icon: "🏪",
          title: "Vendor Management",
          description: "Multi-vendor marketplace with automated commission and payment processing."
        },
        {
          icon: "📱",
          title: "Mobile Commerce",
          description: "Fully responsive mobile shopping experience with progressive web app features."
        },
        {
          icon: "🔄",
          title: "Order Management",
          description: "Complete order lifecycle management from placement to delivery confirmation."
        },
        {
          icon: "🎯",
          title: "Recommendation Engine",
          description: "AI-powered product recommendations based on vehicle and purchase history."
        }
      ],
      github: "#",
      live: "#"
    },
    reelflix: {
      title: "🎬 Reelflix - Short Video Platform",
      description: "A short-form entertainment platform enabling creators to upload content and viewers to enjoy engaging, high-quality short videos. Built with scalability and smooth video playback for modern audiences.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
      totalTech: 4,
      keyFeatures: 7,
      technologies: [
        { name: "React", color: "bg-blue-500" },
        { name: "Socket.io", color: "bg-gray-700" },
        { name: "Node.js", color: "bg-green-500" },
        { name: "Redis", color: "bg-red-600" }
      ],
      features: [
        {
          icon: "🎥",
          title: "Video Streaming",
          description: "High-quality video streaming with adaptive bitrate and smooth playback."
        },
        {
          icon: "📤",
          title: "Content Upload",
          description: "Easy video upload with automatic compression and quality optimization."
        },
        {
          icon: "👁️",
          title: "Real-time Engagement",
          description: "Live comments, likes, and shares with real-time interaction features."
        },
        {
          icon: "🎯",
          title: "Content Discovery",
          description: "AI-powered content recommendation algorithm for personalized feeds."
        },
        {
          icon: "📊",
          title: "Creator Analytics",
          description: "Comprehensive analytics dashboard for creators to track performance."
        },
        {
          icon: "💰",
          title: "Monetization",
          description: "Built-in monetization features including ads and creator revenue sharing."
        },
        {
          icon: "📱",
          title: "Mobile First",
          description: "Optimized mobile experience with swipe gestures and touch interactions."
        }
      ],
      github: "#",
      live: "#"
    },
    socialscribe: {
      title: "✍️ Social Scribe - AI Content Tool",
      description: "An AI-powered tool that helps businesses and creators generate engaging social media content. Provides analytics and automated engagement strategies to boost reach and online presence.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      totalTech: 4,
      keyFeatures: 6,
      technologies: [
        { name: "React", color: "bg-blue-500" },
        { name: "Chart.js", color: "bg-yellow-500" },
        { name: "Express", color: "bg-gray-600" },
        { name: "OpenAI API", color: "bg-green-600" }
      ],
      features: [
        {
          icon: "🤖",
          title: "AI Content Generation",
          description: "Generate engaging posts, captions, and hashtags using advanced AI models."
        },
        {
          icon: "📊",
          title: "Performance Analytics",
          description: "Track engagement metrics and optimize content strategy with detailed analytics."
        },
        {
          icon: "🎯",
          title: "Audience Targeting",
          description: "AI-powered audience analysis and content personalization for better reach."
        },
        {
          icon: "⏰",
          title: "Automated Scheduling",
          description: "Schedule posts across multiple platforms with optimal timing suggestions."
        },
        {
          icon: "🔍",
          title: "Trend Analysis",
          description: "Real-time trend monitoring and content suggestions based on viral topics."
        },
        {
          icon: "📈",
          title: "Growth Strategies",
          description: "Automated engagement strategies and growth hacking techniques for organic reach."
        }
      ],
      github: "#",
      live: "#"
    },
    porter: {
      title: "⚡ Porter-like Delivery System",
      description: "Designed and architected a comprehensive delivery system similar to Porter, handling logistics, real-time tracking, and driver management. Led the technical planning and system design for scalable operations.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      totalTech: 4,
      keyFeatures: 6,
      technologies: [
        { name: "System Design", color: "bg-purple-600" },
        { name: "Microservices", color: "bg-blue-600" },
        { name: "Real-time APIs", color: "bg-green-600" },
        { name: "Database Architecture", color: "bg-red-600" }
      ],
      features: [
        {
          icon: "🚚",
          title: "Logistics Management",
          description: "Complete logistics workflow from pickup to delivery with route optimization."
        },
        {
          icon: "📍",
          title: "Real-time Tracking",
          description: "Live GPS tracking for customers and drivers with accurate ETAs."
        },
        {
          icon: "👨‍🚚",
          title: "Driver Management",
          description: "Comprehensive driver onboarding, scheduling, and performance monitoring."
        },
        {
          icon: "🏗️",
          title: "Scalable Architecture",
          description: "Microservices-based architecture designed to handle high-volume operations."
        },
        {
          icon: "💰",
          title: "Dynamic Pricing",
          description: "AI-powered pricing algorithm based on distance, demand, and market conditions."
        },
        {
          icon: "📊",
          title: "Operations Dashboard",
          description: "Real-time operations monitoring with analytics and performance insights."
        }
      ],
      github: "#",
      live: "#"
    }
  };
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, []);

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Button>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Projects</span>
                <span>/</span>
                <span className="text-foreground">{project.title}</span>
              </div>
            </div>
            <div className="text-xl font-bold hero-text-gradient">
              Pavandeep Kumar
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Project Info */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text-gradient">
                {project.title}
              </h1>
              <div className="w-20 h-1 hero-gradient rounded-full mb-6"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 animate-slide-up animate-delay-100">
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">{project.totalTech}</div>
                <div className="text-sm text-muted-foreground">Total Technology</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">{project.keyFeatures}</div>
                <div className="text-sm text-muted-foreground">Key Features</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 animate-slide-up animate-delay-200">
              <Button 
                variant="outline" 
                className="flex items-center space-x-2 border-primary/30 hover:bg-primary/10"
                onClick={() => window.open(project.github, '_blank')}
              >
                <Github className="h-4 w-4" />
                <span>Github</span>
              </Button>
              <Button 
                className="flex items-center space-x-2 hero-gradient text-primary-foreground"
                onClick={() => window.open(project.live, '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </Button>
            </div>

            {/* Technologies Used */}
            <div className="animate-slide-up animate-delay-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <span className="text-2xl">💻</span>
                <span>Technologies Used</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={tech.name}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 font-medium"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Project Image and Features */}
          <div className="space-y-8">
            {/* Project Image */}
            <div className="animate-slide-up animate-delay-100">
              <div className="relative rounded-2xl overflow-hidden glass-card">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            {/* Key Features */}
            <div className="animate-slide-up animate-delay-200">
              <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                <span className="text-2xl">⭐</span>
                <span>Key Features</span>
              </h3>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex space-x-4 p-4 glass-card rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;