import { ExternalLink, Github, Eye } from 'lucide-react';
import esgisImage from '@/assets/esgis-university.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import taskflowImage from '@/assets/task.png';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      title: 'ImmoGestion',
      description: 'Plateforme de gestion immobilière complète permettant la gestion des biens, locataires et propriétaires. Interface moderne avec tableau de bord intuitif et système de notifications.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      liveUrl: 'https://immo-gestion-chi.vercel.app',
      githubUrl: 'https://github.com/kamilath-dev/',
      featured: true
    },
    {
      id: 2,
      title: 'ESGIS',
      description: 'Site web institutionnel pour une université présentant les formations, valeurs, processus d\'admission et informations académiques. Design professionnel et navigation intuitive.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'MySQL'],
      image: esgisImage,
      liveUrl: 'https://esgis-three.vercel.app',
      githubUrl: 'https://github.com/kamilath-dev/',
      featured: true
    },
    {
      id: 3,
      title: 'CAMPER CAFE',
      description: 'Site vitrine élégant pour un café restaurant présentant le menu complet avec prix, ambiance et informations pratiques. Design moderne et responsive.',
      technologies: ['HTML5', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      liveUrl: 'https://cafe-menu-murex.vercel.app',
      githubUrl: 'https://github.com/kamilath-dev/',
      featured: false
    },
    {
      id: 4,
      title: 'TaskFlow - Gestion de Tâches',
      description: "Application en cours de développement permettant aux entreprises d'organiser leurs tâches, employés, réunions et autres aspects de la gestion interne.",
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      image: taskflowImage,
      liveUrl: 'https://taskflow-4.netlify.app',
      githubUrl: 'https://github.com/kamilath-dev/',
      featured: false
    }  
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-heading mb-4">{t('projects.title')}</h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Projets Phares</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`card-project animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <div className="relative overflow-hidden aspect-video group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay avec boutons */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-background/90 text-foreground px-4 py-2 rounded-lg hover:bg-background transition-colors duration-200"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">{t('projects.view')}</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-background/90 text-foreground px-4 py-2 rounded-lg hover:bg-background transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                </div>
              </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-small text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-center">Autres Projets</h3>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={project.id} className={`card-project animate-scale-in animation-delay-${(index + 1) * 100}`}>
                <div className="relative overflow-hidden aspect-video group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay avec boutons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-background/90 text-foreground px-4 py-2 rounded-lg hover:bg-background transition-colors duration-200"
                      >
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">{t('projects.view')}</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-background/90 text-foreground px-4 py-2 rounded-lg hover:bg-background transition-colors duration-200"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    </div>
                  </div>
                </div>


                <div className="p-4 space-y-3">
                  <h4 className="font-semibold group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h4>
                  
                  <p className="text-small text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/50 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card-elevated p-8 bg-gradient-subtle max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Curieuse de découvrir plus ?</h3>
            <p className="text-muted-foreground mb-6">
              Consultez mes profils GitHub et GitLab pour explorer l'ensemble de mes projets 
              et contributions open source.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/kamilath-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline group"
              >
                <Github className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Voir sur GitHub
              </a>
              <a
                href="https://gitlab.com/kamilathosseni4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline group"
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Voir sur GitLab
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
