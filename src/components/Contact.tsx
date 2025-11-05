import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4">
              <span className="neon-text">Contato</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto glow-border" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl glow-border animate-fade-in">
            <div className="text-center mb-8">
              <p className="font-rajdhani text-xl md:text-2xl leading-relaxed text-foreground/90 mb-6">
                Acredito que a tecnologia deve servir à sociedade com ética, segurança e propósito.
                Busco constantemente aprender, inovar e contribuir com soluções que tornem o mundo digital mais confiável e acessível.
              </p>
              <div className="w-16 h-0.5 bg-primary mx-auto my-8 glow-border" />
              <p className="font-rajdhani text-lg italic text-primary glow-text">
                "Integridade é o verdadeiro alicerce da inovação."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <a
                href="mailto:freitasdenis_dev@hotmail.com"
                className="glass-card p-6 rounded-xl glow-border hover:scale-105 transition-all duration-300 flex flex-col items-center gap-3 group"
              >
                <Mail className="w-8 h-8 text-primary group-hover:glow-text transition-all" />
                <span className="font-rajdhani font-semibold">E-mail</span>
                <span className="text-sm text-muted-foreground text-center break-all">freitasdenis_dev@hotmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/freitas-denis-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-xl glow-border hover:scale-105 transition-all duration-300 flex flex-col items-center gap-3 group"
              >
                <Linkedin className="w-8 h-8 text-primary group-hover:glow-text transition-all" />
                <span className="font-rajdhani font-semibold">LinkedIn</span>
                <span className="text-sm text-muted-foreground">/freitas-denis-dev</span>
              </a>

              <a
                href="https://github.com/denisfreitas999"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-xl glow-border hover:scale-105 transition-all duration-300 flex flex-col items-center gap-3 group"
              >
                <Github className="w-8 h-8 text-primary group-hover:glow-text transition-all" />
                <span className="font-rajdhani font-semibold">GitHub</span>
                <span className="text-sm text-muted-foreground">/denisfreitas999</span>
              </a>
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="font-rajdhani text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow-border px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'mailto:denissonfreitas@exemplo.com'}
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
