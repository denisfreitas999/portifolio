import { Code, Database, Wrench, GitBranch, Users, Smartphone, Server, Terminal, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Linguagens',
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Golang', 'C'],
    },
    {
      icon: Database,
      title: 'SQL & Databases',
      skills: ['SQL', 'PLpgSQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
    },
    {
      icon: Smartphone,
      title: 'Frontend',
      skills: ['React', 'React Native', 'HTML', 'CSS'],
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Spring Boot', 'Node.js', 'Express', 'Sequelize'],
    },
    {
      icon: Terminal,
      title: 'Ferramentas Dev',
      skills: ['Git', 'GitHub Actions', 'Gitea', 'VS Code', 'Android Studio', 'Postman', 'Swagger'],
    },
    {
      icon: Settings,
      title: 'Testes & DevOps',
      skills: ['Jest', 'Cypress', 'Robot', 'Jenkins', 'SonarQube', 'Nginx'],
    },
    {
      icon: Wrench,
      title: 'Ferramentas',
      skills: ['WebSocket', 'Socket.io', 'Expo', 'Lucidchart', 'Truffle Ganache'],
    },
    {
      icon: GitBranch,
      title: 'Sistemas',
      skills: ['Linux', 'Windows'],
    },
  ];

  const methodologies = [
    'Scrum',
    'Kanban',
    'Scrumban',
    'Extreme Programming',
    'CI/CD',
    'DevOps',
    'Integração Contínua',
    'Entrega Contínua',
    'Automação de Testes E2E',
  ];

  const softSkills = [
    'Trabalho em equipe',
    'Comunicação Interpessoal',
    'Colaboração',
    'Feedback',
    'Coragem',
    'Respeito',
    'Simplicidade',
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4">
              <span className="neon-text">Habilidades & Competências</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto glow-border" />
          </div>

          {/* Habilidades Técnicas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl glow-border hover:scale-105 transition-transform duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                  <h3 className="font-orbitron font-bold text-xl text-center mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="text-center px-3 py-2 bg-primary/10 border border-primary/30 rounded-lg font-rajdhani text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Metodologias & Práticas */}
          <div className="glass-card p-8 rounded-2xl glow-border animate-fade-in mb-8" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <GitBranch className="w-8 h-8 text-primary" />
              <h3 className="font-orbitron font-bold text-2xl text-center">
                Metodologias & Práticas
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {methodologies.map((method, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-rajdhani font-semibold hover:bg-primary/20 transition-colors duration-300"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass-card p-8 rounded-2xl glow-border animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="font-orbitron font-bold text-2xl text-center">
                Competências Gerais
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-rajdhani font-semibold hover:bg-primary/20 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;