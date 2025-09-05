import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const StickyContact = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-6 bottom-6 z-50 flex flex-col gap-3"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={scrollToContact}
          className="hero-gradient text-primary-foreground rounded-full p-4 shadow-lg animate-pulse-glow"
        >
          <Mail className="h-5 w-5" />
        </Button>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          onClick={() => window.open('tel:+919798949232')}
          className="glass-card border-primary/30 rounded-full p-4 hover:bg-primary/10"
        >
          <Phone className="h-5 w-5 text-primary" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default StickyContact;