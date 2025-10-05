import { Card } from "@/components/ui/card";

// Partner logos would be imported here
import ssabLogo from "@/assets/logos/SSAB.png";
import alleimaLogo from "@/assets/logos/alleima.jpg";
import jernkontoretLogo from "@/assets/logos/jernkontoret.jpg";
import suzukiLogo from "@/assets/logos/suzuki_garphyttan.jpg";
import swerimLogo from "@/assets/logos/swerim.jpg"
import bkwLogo from "@/assets/logos/bkw.jpg"

const Partners = () => {
  // Placeholder for partner companies
  const partners = [
    { name: "SSAB", logo: ssabLogo },
    { name: "Alleima", logo: alleimaLogo },
    { name: "Jernkontoret", logo: jernkontoretLogo },
    { name: "Suzuki-Garphyttan", logo: suzukiLogo },
    { name: "Swerim", logo: swerimLogo },
    { name: "BKW", logo: bkwLogo },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Våra Samarbetspartners
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Vi är stolta över att samarbeta med ledande företag inom stål, material och ingenjörskonst
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-8 flex items-center justify-center hover:shadow-elegant transition-all duration-300 hover:scale-105 min-h-[160px]"
            >
              {partner.logo ? (
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-20 object-contain grayscale hover:grayscale-0 transition-all"
                />
              ) : (
                <div className="text-center">
                  <div className="text-2xl font-display font-semibold text-muted-foreground/40">
                    {partner.name}
                  </div>
                  <div className="text-xs text-muted-foreground/30 mt-2">
                    Logo kommer
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Intresserad av att bli partner?{" "}
            <a 
              href="#contact" 
              className="text-primary hover:text-primary-light font-semibold transition-colors underline"
            >
              Kontakta oss
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
