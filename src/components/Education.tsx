import { GraduationCap, BookOpen, Target, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4">
              <span className="neon-text">Formação Acadêmica</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto glow-border" />
          </div>

          {/* Formação Acadêmica Superior */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 rounded-2xl glow-border hover:scale-105 transition-transform duration-300 animate-fade-in">
              <GraduationCap className="w-12 h-12 text-primary mb-4" />
              <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-primary font-rajdhani text-sm mb-4">
                Concluído
              </div>
              <h3 className="font-orbitron font-bold text-2xl mb-3">Bacharelado em Ciência da Computação</h3>
              <p className="font-rajdhani text-lg text-muted-foreground mb-2">Universidade Federal de Sergipe (UFS)</p>
              <p className="font-rajdhani text-primary font-semibold">Concluído em Maio/2024</p>
            </div>

            <div className="glass-card p-8 rounded-2xl glow-border border-2 border-primary/40 hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <GraduationCap className="w-12 h-12 text-primary mb-4" />
              <div className="inline-block px-3 py-1 bg-secondary/20 border border-secondary/50 rounded-full text-secondary font-rajdhani text-sm mb-4 animate-pulse-glow">
                Em Andamento
              </div>
              <h3 className="font-orbitron font-bold text-2xl mb-3">Mestrado em Ciência da Computação</h3>
              <p className="font-rajdhani text-lg text-muted-foreground mb-2">Universidade Federal de Sergipe (UFS)</p>
              <p className="font-rajdhani text-primary font-semibold">Linha de Pesquisa: Engenharia de Software</p>
            </div>
          </div>

          {/* Cursos e Certificações */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Award className="w-8 h-8 text-primary" />
              <h3 className="font-orbitron font-bold text-2xl">Cursos & Certificações</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl glow-border hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.25s' }}>
                <BookOpen className="w-10 h-10 text-primary mb-3" />
                <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-primary font-rajdhani text-sm mb-3">
                  Concluído
                </div>
                <h4 className="font-orbitron font-bold text-xl mb-2">Especialização em Proteção de Dados</h4>
                <p className="font-rajdhani text-muted-foreground mb-1">Legale Educacional</p>
                <p className="font-rajdhani text-sm text-primary">LGPD e Governança de Dados</p>
              </div>

              <div className="glass-card p-6 rounded-xl glow-border hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <BookOpen className="w-10 h-10 text-primary mb-3" />
                <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-primary font-rajdhani text-sm mb-3">
                  Concluído
                </div>
                <h4 className="font-orbitron font-bold text-xl mb-2">Técnico em Química</h4>
                <p className="font-rajdhani text-muted-foreground mb-1">Instituto Federal de Sergipe (IFS)</p>
                <p className="font-rajdhani text-sm text-primary">Formação Técnica Integrada</p>
              </div>
            </div>
          </div>

          {/* Áreas de Interesse */}
          <div className="glass-card p-8 rounded-2xl glow-border animate-fade-in" style={{ animationDelay: '0.35s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="font-orbitron font-bold text-2xl">Áreas de Interesse</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span className="font-rajdhani text-lg">Engenharia de Software</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span className="font-rajdhani text-lg">Proteção de Dados Pessoais (LGPD)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span className="font-rajdhani text-lg">Governança e Segurança da Informação</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span className="font-rajdhani text-lg">Language Server Protocol</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span className="font-rajdhani text-lg">Blockchain e Smart Contracts</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span className="font-rajdhani text-lg">DevSecOps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;