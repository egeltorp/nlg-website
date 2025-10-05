import { Target, GraduationCap, Handshake, } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Om Näringslivsgruppen
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Vi strävar efter att bygga långsiktiga och framgångsrika relationer mellan företag och våra studenter, som är framtidens ingenjörer inom materialteknik. 
          Vi ser gärna samarbeten över längre perioder och anpassar våra erbjudanden för att möta era specifika behov, för att skapa en framgångsrik och givande relation för båda parter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group bg-card rounded-xl p-8 shadow-elegant hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-border">
            <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Vårt Syfte
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Att skapa starka och långsiktiga samarbeten mellan studenter och näringsliv. 
              Vi bygger broar mellan akademi och industri för att främja kunskapsutbyte, innovation och rekrytering.
            </p>
          </div>

          <div className="group bg-card rounded-xl p-8 shadow-elegant hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-border">
            <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Våra Studenter
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Våra medlemmar är framtidens ingenjörer inom materialdesign, metallurgi och hållbar utveckling - ambitiösa, kunniga och redo att bidra till industrins utveckling..
            </p>
          </div>

          <div className="group bg-card rounded-xl p-8 shadow-elegant hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-border">
            <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Handshake className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Ert Samarbete
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Vi erbjuder flexibla och skräddarsydda lösningar för företag som vill synas, rekrytera och samarbeta med våra studenter. Tillsammans skapar vi värde för både företag och framtida ingenjörer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
