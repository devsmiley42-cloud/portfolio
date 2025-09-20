import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language');
    return (saved as Language) || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Salut, je suis',
    'hero.title': 'Développeuse Web Junior',
    'hero.description': 'Passionnée par le développement web et les nouvelles technologies, je crée des expériences numériques modernes et intuitives.',
    'hero.contact': 'Me contacter',
    'hero.download': 'Télécharger CV',
    'hero.scroll': 'Défiler vers le bas',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.description': 'Découvrez mon parcours, mes passions et ce qui me motive dans le développement web.',
    'about.intro': 'Jeune développeuse web passionnée, je me spécialise dans la création d\'applications web modernes et responsives. Toujours curieuse d\'apprendre de nouvelles technologies et d\'améliorer mes compétences.',
    'about.age': 'Âge',
    'about.location': 'Localisation',
    'about.education': 'Formation',
    'about.university': 'Université ESGIS',
    'about.degree': 'Licence en Informatique',
    'about.experience': 'Mon Expérience',
    'about.exp.frontend': 'Développement Frontend',
    'about.exp.frontend.desc': 'Création d\'interfaces utilisateur modernes avec React, TypeScript et Tailwind CSS.',
    'about.exp.backend': 'Développement Backend',
    'about.exp.backend.desc': 'Développement d\'APIs avec Node.js et gestion de bases de données.',
    'about.exp.responsive': 'Design Responsive',
    'about.exp.responsive.desc': 'Conception d\'expériences utilisateur optimales sur tous les appareils.',
    
    // Skills Section
    'skills.title': 'Mes Compétences',
    'skills.description': 'Découvrez les technologies et outils que je maîtrise pour créer des applications web performantes.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Outils & Autres',
    
    // Projects Section
    'projects.title': 'Mes Projets',
    'projects.description': 'Découvrez quelques-uns de mes projets récents qui démontrent mes compétences et ma créativité.',
    'projects.view': 'Voir le projet',
    'projects.code': 'Voir le code',
    'projects.ecommerce': 'Site E-commerce',
    'projects.ecommerce.desc': 'Une plateforme e-commerce complète avec panier d\'achat, système de paiement et gestion des commandes.',
    'projects.dashboard': 'Dashboard Analytics',
    'projects.dashboard.desc': 'Un tableau de bord interactif pour visualiser des données avec des graphiques et des métriques en temps réel.',
    'projects.portfolio': 'Portfolio Personnel',
    'projects.portfolio.desc': 'Mon portfolio personnel présentant mes compétences et projets avec un design moderne et responsive.',
    
    // Contact Section
    'contact.title': 'Me Contacter',
    'contact.description': 'Vous avez un projet en tête ? Une opportunité à discuter ? N\'hésitez pas à me contacter, je serais ravie d\'échanger avec vous !',
    'contact.stay': 'Restons en contact',
    'contact.opportunity': 'Je suis actuellement à la recherche de nouvelles opportunités et toujours ouverte aux discussions autour de projets passionnants. Que ce soit pour un stage, un CDI ou une collaboration, contactez-moi !',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    'contact.linkedin': 'LinkedIn',
    'contact.available': 'Disponible immédiatement',
    'contact.ready': 'Prête à démarrer un nouveau défi professionnel',
    'contact.response': 'Je réponds généralement sous 24h',
    'contact.form.title': 'Envoyez-moi un message',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.name.placeholder': 'Votre nom',
    'contact.form.email.placeholder': 'votre@email.com',
    'contact.form.subject.placeholder': 'Objet de votre message',
    'contact.form.message.placeholder': 'Décrivez votre projet, votre opportunité ou posez-moi vos questions...',
    'contact.form.send': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.required': 'Tous les champs marqués d\'un * sont obligatoires',
    'contact.form.success': 'Message envoyé !',
    'contact.form.success.desc': 'Merci pour votre message. Je vous répondrai dans les plus brefs délais.',
    'contact.form.error': 'Erreur',
    'contact.form.error.desc': 'Une erreur est survenue. Veuillez réessayer.',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.made': 'Fait avec',
    'footer.by': 'par',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Junior Web Developer',
    'hero.description': 'Passionate about web development and new technologies, I create modern and intuitive digital experiences.',
    'hero.contact': 'Contact me',
    'hero.download': 'Download CV',
    'hero.scroll': 'Scroll down',
    
    // About Section
    'about.title': 'About Me',
    'about.description': 'Discover my journey, my passions and what drives me in web development.',
    'about.intro': 'Young passionate web developer, I specialize in creating modern and responsive web applications. Always curious to learn new technologies and improve my skills.',
    'about.age': 'Age',
    'about.location': 'Location',
    'about.education': 'Education',
    'about.university': 'ESGIS University',
    'about.degree': 'Bachelor\'s in Computer Science',
    'about.experience': 'My Experience',
    'about.exp.frontend': 'Frontend Development',
    'about.exp.frontend.desc': 'Creating modern user interfaces with React, TypeScript and Tailwind CSS.',
    'about.exp.backend': 'Backend Development',
    'about.exp.backend.desc': 'Developing APIs with Node.js and database management.',
    'about.exp.responsive': 'Responsive Design',
    'about.exp.responsive.desc': 'Designing optimal user experiences across all devices.',
    
    // Skills Section
    'skills.title': 'My Skills',
    'skills.description': 'Discover the technologies and tools I master to create high-performance web applications.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools & Others',
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.description': 'Check out some of my recent projects that demonstrate my skills and creativity.',
    'projects.view': 'View project',
    'projects.code': 'View code',
    'projects.ecommerce': 'E-commerce Website',
    'projects.ecommerce.desc': 'A complete e-commerce platform with shopping cart, payment system and order management.',
    'projects.dashboard': 'Analytics Dashboard',
    'projects.dashboard.desc': 'An interactive dashboard to visualize data with real-time charts and metrics.',
    'projects.portfolio': 'Personal Portfolio',
    'projects.portfolio.desc': 'My personal portfolio showcasing my skills and projects with a modern and responsive design.',
    
    // Contact Section
    'contact.title': 'Contact Me',
    'contact.description': 'Have a project in mind? An opportunity to discuss? Don\'t hesitate to contact me, I would be delighted to chat with you!',
    'contact.stay': 'Let\'s stay in touch',
    'contact.opportunity': 'I am currently looking for new opportunities and always open to discussions about exciting projects. Whether it\'s for an internship, a permanent position or a collaboration, contact me!',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.linkedin': 'LinkedIn',
    'contact.available': 'Available immediately',
    'contact.ready': 'Ready to start a new professional challenge',
    'contact.response': 'I usually respond within 24h',
    'contact.form.title': 'Send me a message',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject.placeholder': 'Subject of your message',
    'contact.form.message.placeholder': 'Describe your project, opportunity or ask me your questions...',
    'contact.form.send': 'Send message',
    'contact.form.sending': 'Sending...',
    'contact.form.required': 'All fields marked with * are required',
    'contact.form.success': 'Message sent!',
    'contact.form.success.desc': 'Thank you for your message. I will get back to you as soon as possible.',
    'contact.form.error': 'Error',
    'contact.form.error.desc': 'An error occurred. Please try again.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with',
    'footer.by': 'by',
  }
};