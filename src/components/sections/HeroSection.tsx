import { useEffect, useState } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const { t } = useLanguage();
  const fullText = t('hero.title');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-20">
      <div className="container-custom">
        <div className="flex items-center justify-center">
          {/* Content */}
          <div className="text-center space-y-8 animate-fade-in-up max-w-4xl">
            {/* Main Heading */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium">
                {t('hero.greeting')}
              </p>
              <h1 className="text-display text-foreground">
                Kamilath OSSENI
              </h1>
              <div className="text-heading text-primary h-12 flex items-center justify-center">
                {displayedText}
                <span className="animate-pulse ml-1">|</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-body max-w-2xl text-muted-foreground leading-relaxed mx-auto">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animation-delay-200">
              <button
                onClick={scrollToContact}
                className="btn-hero group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                {t('hero.contact')}
              </button>
              
              <a
                href="/Kamilath_OSSENI_CV.pdf"
                download
                className="btn-outline group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                {t('hero.download')}
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-12 animation-delay-300 flex justify-center">
              <button
                onClick={scrollToAbout}
                className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                aria-label="Scroll to about section"
              >
                <span className="text-small font-medium">{t('hero.scroll')}</span>
                <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;