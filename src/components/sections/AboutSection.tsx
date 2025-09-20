import { MapPin, Calendar, GraduationCap } from 'lucide-react';
import profilePhoto from '@/assets/me.jpg.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo and Info Cards */}
          <div className="space-y-6 animate-slide-in-left">
            {/* Profile Photo */}
            <div className="relative w-80 h-80 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl rotate-6"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-large hover-lift">
                <img
                  src={profilePhoto}
                  alt="Kamilath OSSENI - Développeuse Web"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card-elevated p-4 hover-glow">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">{t('about.location')}</p>
                    <p className="text-small">Cotonou, Apkapka</p>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-4 hover-glow">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Disponibilité</p>
                    <p className="text-small">Immédiate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-in-right">
            <div>
              <h2 className="text-heading mb-4">
                {t('about.title')}
              </h2>
              <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-4 text-body text-muted-foreground">
              <p>
                Diplômée en Architectures des Logiciels, je suis passionnée par le développement 
                web et la création d'applications modernes et performantes. Ma formation solide 
                en génie logiciel me permet d'aborder les projets avec une approche structurée 
                et méthodique.
              </p>
              
              <p>
                Spécialisée en <span className="text-primary font-medium">React</span>, 
                <span className="text-primary font-medium"> Laravel</span> et 
                <span className="text-primary font-medium"> JavaScript</span>, j'ai une 
                approche full-stack qui me permet de concevoir des solutions complètes. 
                J'aime relever les défis techniques et créer des interfaces intuitives.
              </p>

              <p>
                Actuellement en Master, je continue à approfondir mes connaissances tout 
                en cherchant des opportunités pour mettre en pratique mes compétences 
                au sein d'équipes dynamiques et innovantes.
              </p>
            </div>

            {/* Formation */}
            <div className="card-elevated p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">{t('about.education')}</h3>
              </div>
              
              <div className="space-y-3">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-medium">Master en Architectures des Logiciels</h4>
                  <p className="text-small">ESGIS Cotonou, Jericho • En cours</p>
                  <p className="text-small text-muted-foreground">
                    Formation avancée en génie logiciel et développement d'applications
                  </p>
                </div>
                
                <div className="border-l-2 border-secondary/50 pl-4">
                  <h4 className="font-medium">Licence en Architectures des Logiciels</h4>
                  <p className="text-small">ESGIS Cotonou, Jericho • 2024</p>
                </div>
              </div>

            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-secondary/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-small">Projets réalisés</div>
              </div>
              
              <div className="text-center p-4 bg-secondary/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-small">Motivation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;