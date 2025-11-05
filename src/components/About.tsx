import { GraduationCap, Code2, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4">
              <span className="neon-text">Sobre Mim</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto glow-border" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl glow-border mb-12 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Foto */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl"></div>
                  <img
                    src="public/denisson.png"
                    alt="Denisson Freitas"
                    className="relative w-full h-full object-cover rounded-full border-4 border-primary/50 glow-border"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="flex-1">
                <p className="font-rajdhani text-lg md:text-xl leading-relaxed text-foreground/90 mb-6 text-justify">
                  Olá! Sou <span className="text-primary font-semibold">Denisson Freitas</span>, desenvolvedor de software e pesquisador em <span className="text-primary font-semibold">Engenharia de Software</span>. Bacharel em Ciência da Computação pela Universidade Federal de Sergipe (UFS) desde maio de 2024, atualmente sou mestrando na mesma instituição, dedicando-me à pesquisa em Engenharia de Software.
                </p>
                <p className="font-rajdhani text-lg md:text-xl leading-relaxed text-foreground/90 mb-6 text-justify">
                  Este portfólio reúne minha trajetória acadêmica e profissional, apresentando formação, experiências, projetos desenvolvidos, certificações, registros de software e áreas de especialização.
                </p>
                <p className="font-rajdhani text-lg md:text-xl leading-relaxed text-foreground/90 text-justify">
                  Natural de Sergipe, cristão e movido pela paixão por tecnologia, busco constantemente evolução técnica e contribuições significativas para o ecossistema de TI.
                </p>
              </div>
            </div>
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