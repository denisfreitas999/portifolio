import { Shield, Lock, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated 3D-style elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="relative">
          <Shield className="w-96 h-96 text-primary animate-rotate-slow" />
          <Lock className="w-48 h-48 text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
        </div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }} />

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-primary glow-border" />
              <span className="text-primary font-rajdhani font-semibold tracking-wider uppercase text-sm">
                Portfólio Digital
              </span>
              <div className="w-12 h-0.5 bg-primary glow-border" />
            </div>
          </div>

          <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6">
            <span className="block text-foreground">Denisson Freitas</span>
            <span className="block neon-text mt-2">Engenheiro de Software</span>
          </h1>

          <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground max-w-6xl mx-auto leading-relaxed">
            Ciência da Computação | Segurança da Informação | Proteção de Dados Pessoais
          </p>

          <div className="pt-4">
            <p className="font-rajdhani text-lg md:text-xl text-foreground/90 italic max-w-2xl mx-auto mb-8">
              "Construindo soluções seguras e inteligentes para um mundo digital confiável."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" onClick={() => scrollToSection('experience')} className="font-rajdhani text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow-border px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105">
              Ver Portfólio
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="font-rajdhani text-lg font-semibold border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105">
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>

      <button onClick={() => scrollToSection('about')} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-label="Rolar para baixo">
        <ChevronDown className="w-10 h-10 text-primary glow-text" />
      </button>
    </section>;
};
export default Hero;