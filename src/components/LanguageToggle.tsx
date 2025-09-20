import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background transition-all duration-300 hover:scale-105"
      aria-label={`Switch to ${language === 'fr' ? 'English' : 'French'}`}
    >
      <Languages className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium">
        {language === 'fr' ? 'EN' : 'FR'}
      </span>
    </button>
  );
};

export default LanguageToggle;