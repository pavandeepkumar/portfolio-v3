
const About = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="hero-text-gradient">Me</span>
            </h2>
            
            <div className="w-20 h-1 hero-gradient mx-auto mb-8 rounded-full"></div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a <span className="text-primary font-semibold">product-minded Full Stack Engineer</span> currently working at{" "}
              <span className="text-accent">Devstree IT Services</span> as part of a university co-op program. With{" "}
              <span className="text-primary font-semibold">2.5 years of hands-on experience</span>, I've led teams, 
              trained React interns, and delivered scalable solutions across multiple industries.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              I specialize in designing and building complete systems from concept to deployment, including{" "}
              <span className="text-accent">e-commerce platforms</span>, <span className="text-accent">real estate management systems</span>, 
              and <span className="text-accent">AI-powered tools</span>. Currently pursuing my degree (graduating 2026) while 
              working full-time on enterprise-level projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-2xl animate-slide-up animate-delay-100">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Large-Scale Projects</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl animate-slide-up animate-delay-200">
                <div className="text-3xl font-bold text-primary mb-2">2.5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl animate-slide-up animate-delay-300">
                <div className="text-3xl font-bold text-primary mb-2">Teams</div>
                <div className="text-muted-foreground">Led & Mentored</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
