import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/20 glass-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-orbitron font-bold text-lg neon-text">Denisson Freitas</span>
          </div>
          <p className="font-rajdhani text-muted-foreground text-center">
            © {new Date().getFullYear()} Denisson Freitas. Desenvolvido com dedicação e tecnologia.
          </p>
          <p className="font-rajdhani text-sm text-muted-foreground text-center">
            Este portfólio é atualizado continuamente.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
