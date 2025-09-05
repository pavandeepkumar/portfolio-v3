
import { Code, Database, Server, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development", 
      skills: ["Node.js", "Nest.js", "Express.js", "REST APIs", "GraphQL", "Authentication"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose", "SQL"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Vercel", "Supabase", "CI/CD"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical <span className="hero-text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 hero-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`skill-card p-6 rounded-2xl animate-slide-up animate-delay-${(index + 1) * 100}`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
