import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";
import nlgLogo from "@/assets/logo.svg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Materialteknik och ingenjörskonst" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Logo */}
          <img 
          src={nlgLogo}
          alt="Logo"
          className="mx-auto mb-1 w-[20rem] md:w-[24rem] h-auto brightness-0 invert"
          />


          <h1 className="font-display text-4xl md:text-7xl font-bold text-primary-foreground mb-8 leading-tight">
            Näringslivsgruppen
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="hidden md:block text-xl md:text-2xl text-primary-foreground/85 mb-12 max-w-3xl mx-auto leading-relaxed">
          Näringslivsgruppen (NLG) vid Bergssektionen på KTH arbetar aktivt för att skapa och stärka samarbeten mellan våra studenter och näringslivet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-strong transition-all hover:scale-105"
            >
              Kontakta oss
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 backdrop-blur-sm font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
            >
              Läs mer
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:z-10 md:animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
