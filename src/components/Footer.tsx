import { Heart, Github, GitlabIcon as Gitlab, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/kamilath-dev/',
      color: 'hover:text-gray-400'
    },
    {
      name: 'GitLab',
      icon: <Gitlab className="w-5 h-5" />,
      href: 'https://gitlab.com/kamilathosseni4',
      color: 'hover:text-orange-500'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/kamilath-osseni-08abb1263',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:kamilathosseni4@gmail.com',
      color: 'hover:text-primary'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Kamilath OSSENI</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Développeuse web junior passionnée, spécialisée en React et JavaScript. 
              Toujours à la recherche de nouveaux défis et d'opportunités d'apprentissage.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <div className="space-y-2">
              {[
                { label: 'Accueil', href: '#home' },
                { label: 'À propos', href: '#about' },
                { label: 'Compétences', href: '#skills' },
                { label: 'Projets', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>kamilathosseni4@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>Disponible pour de nouvelles opportunités</span>
              </div>
            </div>
            
            {/* Quick Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-primary-foreground text-primary px-4 py-2 rounded-lg hover:bg-primary-foreground/90 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">Me contacter</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-1 text-primary-foreground/80 text-sm">
            <span>© {currentYear} Kamilath OSSENI. Tous droits réservés.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center space-x-1">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>et beaucoup de café ☕</span>
            </span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 group"
            aria-label="Retour en haut"
          >
            <span className="text-sm">Retour en haut</span>
            <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;