import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Linkedin, Check, Send, AlertCircle } from "lucide-react";



{/* <span className="text-sm font-medium">{t('projects.code')}</span> */}

const ContactSection = () => {
  const { t } = useLanguage(); // 👈 récupère t ici
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://bwgqdlyifszrhktrystz.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur envoi email:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'kamilathosseni4@gmail.com',
      href: 'mailto:kamilathosseni4@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      value: '+229 01 53 41 38 38',
      href: 'tel:+2290153413838'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localisation',
      value: 'Cotonou, Apkapka',
      href: '#'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'Kamilath OSSENI',
      href: 'https://www.linkedin.com/in/kamilath-osseni-08abb1263'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-heading mb-4">Me Contacter</h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ? Une opportunité à discuter ? 
            N'hésitez pas à me contacter, je serais ravie d'échanger avec vous !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-xl font-semibold mb-6">Restons en contact</h3>
              <p className="text-muted-foreground mb-8">
                Je suis actuellement à la recherche de nouvelles opportunités et 
                toujours ouverte aux discussions autour de projets passionnants. 
                Que ce soit pour un stage, un CDI ou une collaboration, contactez-moi !
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.href}
                  className={`block card-elevated p-6 hover-lift hover-glow group animate-fade-in-up animation-delay-${(index + 1) * 100}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="card-elevated p-6 bg-gradient-to-r from-success/10 to-primary/10">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="font-medium text-success">Disponible immédiatement</h4>
                  <p className="text-small text-muted-foreground">
                    Prête à démarrer un nouveau défi professionnel
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center space-x-2 text-small text-muted-foreground">
              <Check className="w-4 h-4 text-primary" />
              <span>Je réponds généralement sous 24h</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elevated p-8 animate-slide-in-right">
            <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Décrivez votre projet, votre opportunité ou posez-moi vos questions..."
                  rows={6}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-hero ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Envoyer le message</span>
                  </div>
                )}
              </button>

              <div className="flex items-center space-x-2 text-small text-muted-foreground">
                <AlertCircle className="w-4 h-4" />
                <span>Tous les champs marqués d'un * sont obligatoires</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;