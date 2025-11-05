import { Github, ExternalLink, Shield, Lock, Database, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      icon: Shield,
      title: "NodeJS-Autenticacao-JWT",
      description: "API Rest em Node.js com autenticação, perfis de usuários e permissões de um sistema de supermercado.",
      tech: ["Node.js", "JWT", "Express"],
      github: "https://github.com/denisfreitas999/NodeJS-Autenticacao-JWT",
      live: "#"
    },
    {
      icon: Lock,
      title: "NodeJS-JWT-CRYPTOGRAPHY",
      description: "Explorando fundamentos da criptografia: cifras, funções de hash, transmissão segura, criptografia simétrica e assimétrica, tokens JWT e técnicas de mitigação.",
      tech: ["Node.js", "JWT", "Cryptography"],
      github: "https://github.com/denisfreitas999/NodeJS-JWT-CRYPTOGRAPHY",
      live: "#"
    },
    {
      icon: Database,
      title: "ORM-NodeJS-Sequelize-SQlite",
      description: "API de uma plataforma de cursos utilizando ORM com Node.js, Sequelize e SQLite.",
      tech: ["Node.js", "Sequelize", "SQLite"],
      github: "https://github.com/denisfreitas999/ORM-NodeJS-Sequelize-SQlite",
      live: "#"
    },
    {
      icon: Brain,
      title: "NodeJS-WebSockets",
      description: "Projeto com WebSockets, implementando comunicações em tempo real com Socket.IO e MongoDB.",
      tech: ["Node.js", "Socket.IO", "MongoDB"],
      github: "https://github.com/denisfreitas999/NodeJS-WebSockets",
      live: "#"
    },
    {
      icon: Shield,
      title: "Node-Unity-Integration-Tests",
      description: "Testes de Unidade e Integração utilizando Node.js e Jest.",
      tech: ["Node.js", "Jest", "Testing"],
      github: "https://github.com/denisfreitas999/Node-Unity-Integration-Tests",
      live: "#"
    },
    {
      icon: Lock,
      title: "QA-Robot-E2E-BDD-Test-Automation",
      description: "Testes E2E Automatizados utilizando o framework Robot e o padrão Behavior Driven Development (BDD).",
      tech: ["Robot Framework", "BDD", "E2E"],
      github: "https://github.com/denisfreitas999/QA-Robot-E2E-BDD-Test-Automation",
      live: "#"
    },
    {
      icon: Database,
      title: "QA-Cypress-E2E-Test-Automation",
      description: "Testes E2E Automatizados utilizando o Cypress.",
      tech: ["Cypress", "JavaScript", "E2E"],
      github: "https://github.com/denisfreitas999/QA-Cypress-E2E-Test-Automation",
      live: "#"
    },
    {
      icon: Brain,
      title: "Evolving-my-JS-to-TS",
      description: "Melhorando experiência de desenvolvimento com TypeScript.",
      tech: ["TypeScript", "JavaScript", "Node.js"],
      github: "https://github.com/denisfreitas999/Evolving-my-JS-to-TS",
      live: "#"
    },
    {
      icon: Database,
      title: "PostgreSQL-learning",
      description: "Exploração e aprendizagem do SGBD PostgreSQL e da Linguagem PL/pgSQL.",
      tech: ["PostgreSQL", "PL/pgSQL", "SQL"],
      github: "https://github.com/denisfreitas999/PostgreSQL-learning",
      live: "#"
    },
    {
      icon: Database,
      title: "MySQL-learning",
      description: "Repositório exploratório para aprendizagem de SQL utilizando o SGBD MySQL.",
      tech: ["MySQL", "SQL", "Database"],
      github: "https://github.com/denisfreitas999/MySQL-learning",
      live: "#"
    },
    {
      icon: Shield,
      title: "NodeJS-Melhorando-Fluxo-Dev",
      description: "Node.js melhorando o fluxo de desenvolvimento e integração de equipe.",
      tech: ["Node.js", "DevOps", "CI/CD"],
      github: "https://github.com/denisfreitas999/NodeJS-Melhorando-Fluxo-Dev",
      live: "#"
    },
    {
      icon: Brain,
      title: "Git-Github-Rep",
      description: "Repositório de testes para comandos de Git e Github.",
      tech: ["Git", "GitHub", "Version Control"],
      github: "https://github.com/denisfreitas999/Git-Github-Rep",
      live: "#"
    }
  ];

  const softwareRegistrations = [
    {
      title: "Gradway Alumni: Portal Institucional de Egressos",
      description: "Portal institucional para gestão e acompanhamento de egressos",
      registry: "Processo No: BR512023003602-1"
    },
    {
      title: "Plataforma de Orçamento Participativo Digital Decide Brasil - Aplicativo Móvel Decide Brasil Cidadão",
      description: "Aplicativo móvel para participação cidadã em orçamento participativo",
      registry: "Processo No: BR512024002841-2"
    },
    {
      title: "Plataforma de Orçamento Participativo Digital Decide Brasil - Sistema Administrativo Web Decide Brasil",
      description: "Sistema administrativo web para gestão de orçamento participativo",
      registry: "Processo No: BR512024002835-8"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="text-glow-cyan">Projetos</span> <span className="text-primary">&</span> <span className="text-glow-cyan">Repositórios</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="cyber-card group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 border border-primary/30 rounded-lg group-hover:border-glow-cyan transition-all">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold text-primary flex-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="cyber-button border-primary text-primary hover:bg-primary/10">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                  </a>
                  <Button variant="outline" size="sm" className="cyber-button border-primary text-primary hover:bg-primary/10" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Registrations */}
        <div id="registros" className="scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="text-primary">Registros</span> <span className="text-glow-cyan">de Software</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {softwareRegistrations.map((reg, index) => (
              <div key={index} className="cyber-card group flex flex-col h-full">
                <h3 className="text-lg font-orbitron font-semibold text-primary mb-3 leading-tight text-center">
                  {reg.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow text-sm text-center">
                  {reg.description}
                </p>
                <div className="mt-auto w-full">
                  <div className="px-4 py-2 border border-primary/50 rounded-lg text-center">
                    <span className="text-xs text-primary font-orbitron block">
                      {reg.registry}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;