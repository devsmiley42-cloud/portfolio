import { Code, Palette, Database, Smartphone, Globe, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillsSection = () => {
  const { t } = useLanguage();
  
  const technicalSkills = [
    {
      category: t('skills.frontend'),
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'HTML5 / CSS3' },
        { name: 'JavaScript (ES6+)' },
        { name: 'React.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
      ]
    },
    {
      category: t('skills.backend'),
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'Laravel' },
        { name: 'MySQL' },
        { name: 'Git / GitHub' },
        { name: 'Vite / Webpack' },
        { name: 'API REST' },
      ]
    }
  ];

  const softSkills = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Apprentissage Continu',
      description: 'Curieuse et passionnée par les nouvelles technologies, je me forme constamment aux dernières tendances du web.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Travail d\'Équipe',
      description: 'Collaborative et à l\'écoute, j\'aime partager mes connaissances et apprendre des autres développeurs.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Adaptabilité',
      description: 'Flexible et polyvalente, je m\'adapte rapidement aux nouveaux outils et méthodologies de développement.'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-heading mb-4">{t('skills.title')}</h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Compétences Techniques</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {technicalSkills.map((category, categoryIndex) => (
              <div key={category.category} className={`card-elevated p-8 animate-scale-in animation-delay-${(categoryIndex + 1) * 100} bg-gradient-to-br from-card to-secondary/20 hover:from-secondary/30 hover:to-card transition-all duration-300`}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground shadow-lg">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">{category.category}</h4>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className={`group p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 animate-fade-in-up animation-delay-${skillIndex * 50}`}>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-gradient-primary group-hover:scale-110 transition-transform duration-200"></div>
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-center">Soft Skills</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div key={skill.title} className={`card-elevated p-6 text-center hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-primary text-primary-foreground">
                    {skill.icon}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold mb-3">{skill.title}</h4>
                
                <p className="text-small text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <div className="card-elevated p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Certifications & Formations</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="skill-item">
                <div className="w-3 h-3 rounded-full bg-success mr-3"></div>
                <div className="text-left">
                  <p className="font-medium">Certification React</p>
                  <p className="text-small text-muted-foreground">École O'clock - 2024</p>
                </div>
              </div>
              
              <div className="skill-item">
                <div className="w-3 h-3 rounded-full bg-success mr-3"></div>
                <div className="text-left">
                  <p className="font-medium">JavaScript ES6+</p>
                  <p className="text-small text-muted-foreground">Formation avancée - 2024</p>
                </div>
              </div>
              
              <div className="skill-item">
                <div className="w-3 h-3 rounded-full bg-success mr-3"></div>
                <div className="text-left">
                  <p className="font-medium">Attestation Art Oratoire</p>
                  <p className="text-small text-muted-foreground">RFI Cotonou - Obtenu</p>
                </div>
              </div>
              
              <div className="skill-item">
                <div className="w-3 h-3 rounded-full bg-accent mr-3"></div>
                <div className="text-left">
                  <p className="font-medium">Marketing Digital</p>
                  <p className="text-small text-muted-foreground">En cours</p>
                </div>
              </div>
              
              <div className="skill-item">
                <div className="w-3 h-3 rounded-full bg-accent mr-3"></div>
                <div className="text-left">
                  <p className="font-medium">Anglais Informatique</p>
                  <p className="text-small text-muted-foreground">En cours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;