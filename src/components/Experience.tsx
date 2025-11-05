import { Briefcase, Calendar, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Influir – Automatização de Processos',
      client: 'Banco do Estado de Sergipe (BANESE)',
      period: 'Novembro 2024 – Abril 2025 (6 meses)',
      role: 'Desenvolvedor Web/Java',
      activities: [
        'Automação de processos visando aumento da produtividade e redução de erros manuais',
        'Desenvolvimento e sustentação de sistemas utilizando Java (8, 11 e 17) e Spring Boot',
        'Integração e versionamento com Git e Gitea',
        'Gerenciamento de versões de sistemas e ambientes de homologação via pipelines CI/CD com Jenkins',
        'Monitoramento de qualidade de código com SonarQube',
        'Utilização de bancos Oracle e SQL Server',
      ],
      methodologies: [
        'Scrum e Kanban',
        'Daily stand-ups, sprint reviews e retrospectives',
        'Planejamento com Planning Poker',
        'Colaboração com times multidisciplinares',
      ],
    },
    {
      company: 'Universidade Federal de Sergipe (UFS)',
      period: 'Dezembro 2023 – Março 2024 (4 meses)',
      role: 'Estagiário em Desenvolvimento Web',
      description: 'Atuei na implantação e manutenção do software Gradway Alumni na UFS, cobrindo backend e frontend. Minhas responsabilidades incluíram otimizar desempenho, resolver problemas e acompanhar atualizações, oferecendo uma visão completa do ciclo de vida de software.',
      technologies: ['JavaScript', 'Node.js', 'React', 'Linux', 'Windows', 'MongoDB'],
    },
  ];

  const tccProject = {
    title: 'Plataforma Decide Brasil',
    institution: 'Universidade Federal de Sergipe (UFS)',
    period: 'Agosto 2023 – Março 2024 (7 meses)',
    description: 'Durante a produção do meu Trabalho de Conclusão de Curso (TCC), desenvolvi a Plataforma Decide Brasil, uma inovação no campo do Orçamento Participativo Digital. O objetivo era digitalizar assembleias presenciais e ampliar a participação cidadã nas decisões municipais.',
    components: [
      'Decide Brasil Cidadão (app móvel)',
      'Decide Brasil Manager (sistema administrativo web)',
    ],
    highlight: 'Integração com tecnologia blockchain para garantir transparência e segurança nas votações',
    technologies: ['ReactJS', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'Blockchain'],
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4">
              <span className="neon-text">Experiência Profissional</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto glow-border" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl glow-border hover:scale-[1.02] transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <Briefcase className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-orbitron font-bold text-2xl mb-2">{exp.company}</h3>
                    {exp.client && (
                      <p className="font-rajdhani text-lg text-muted-foreground mb-2">
                        Prestação de Serviços para: <span className="text-primary">{exp.client}</span>
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-rajdhani">{exp.period}</span>
                    </div>
                    <p className="font-rajdhani text-xl text-primary font-semibold">{exp.role}</p>
                  </div>
                </div>

                {exp.description && (
                  <p className="font-rajdhani text-lg leading-relaxed text-foreground/90 mb-6">
                    {exp.description}
                  </p>
                )}

                {exp.activities && (
                  <div className="mb-6">
                    <h4 className="font-orbitron font-semibold text-lg mb-3">Principais Atividades:</h4>
                    <ul className="space-y-2">
                      {exp.activities.map((activity, i) => (
                        <li key={i} className="font-rajdhani text-foreground/90 flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.methodologies && (
                  <div className="mb-6">
                    <h4 className="font-orbitron font-semibold text-lg mb-3">Metodologias e Práticas Ágeis:</h4>
                    <ul className="space-y-2">
                      {exp.methodologies.map((method, i) => (
                        <li key={i} className="font-rajdhani text-foreground/90 flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary font-rajdhani text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* TCC Project */}
            <div className="glass-card p-8 rounded-2xl glow-border border-2 border-primary/40 animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <Code className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-primary font-rajdhani text-sm mb-3">
                    Projeto TCC
                  </div>
                  <h3 className="font-orbitron font-bold text-2xl mb-2">{tccProject.title}</h3>
                  <p className="font-rajdhani text-lg text-muted-foreground mb-2">{tccProject.institution}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="font-rajdhani">{tccProject.period}</span>
                  </div>
                </div>
              </div>

              <p className="font-rajdhani text-lg leading-relaxed text-foreground/90 mb-6">
                {tccProject.description}
              </p>

              <div className="mb-6">
                <h4 className="font-orbitron font-semibold text-lg mb-3">Componentes da Plataforma:</h4>
                <ul className="space-y-2">
                  {tccProject.components.map((component, i) => (
                    <li key={i} className="font-rajdhani text-foreground/90 flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{component}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-primary/10 border-l-4 border-primary rounded mb-6">
                <p className="font-rajdhani text-lg text-foreground/90">
                  <span className="font-semibold">Destaque:</span> {tccProject.highlight}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {tccProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary font-rajdhani text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
