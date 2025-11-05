import { GraduationCap, Code2, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4">
              <span className="neon-text">Sobre Mim</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto glow-border" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl glow-border mb-12 animate-fade-in">
            <p className="font-rajdhani text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
              Olá, sou <span className="text-primary font-semibold">Denisson Freitas</span>, um cristão, sergipano e obstinado a seguir carreira no mundo da Tecnologia da Informação.
            </p>
            <p className="font-rajdhani text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
              Tive o privilégio de concluir meu bacharelado em <span className="text-primary font-semibold">Ciência da Computação</span> pela Universidade Federal de Sergipe (UFS) em maio de 2024 e atualmente estou no programa de pós-graduação (Mestrado) na mesma instituição, com linha de pesquisa voltada para <span className="text-primary font-semibold">Engenharia de Software</span>.
            </p>
            <p className="font-rajdhani text-lg md:text-xl leading-relaxed text-foreground/90">
              Criei este portfólio para integrar informações sobre mim — minha formação, experiências profissionais, participação em projetos, cursos realizados, áreas de interesse e outras informações relevantes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl glow-border hover:scale-105 transition-transform duration-300 animate-fade-in">
              <GraduationCap className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="font-orbitron font-bold text-xl text-center mb-2">Formação</h3>
              <p className="font-rajdhani text-center text-muted-foreground">
                Bacharel em Ciência da Computação (UFS)
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl glow-border hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Code2 className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="font-orbitron font-bold text-xl text-center mb-2">Especialidade</h3>
              <p className="font-rajdhani text-center text-muted-foreground">
                Segurança da Informação & LGPD
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl glow-border hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="font-orbitron font-bold text-xl text-center mb-2">Foco</h3>
              <p className="font-rajdhani text-center text-muted-foreground">
                Desenvolvimento de Software
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
