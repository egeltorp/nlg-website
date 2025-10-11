import kth from "@/assets/kth.png";
import bergssektionen from "@/assets/bergssektionen.png";
import nlg from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-light/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-8">
            <div className="mr-8">
              <h3 className="font-display text-2xl font-bold mb-4">
                Näringslivsgruppen
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Näringslivsgruppen (NLG) arbetar aktivt för att skapa och stärka samarbeten mellan våra studenter och näringslivet
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Snabblänkar</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Om oss
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Våra tjänster
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Kontakt
                  </a>
                </li>
                <li>
                  <a href="https://bergssektionen.se/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Bergssektionen
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="mailto:femten@b.kth.se">femten@b.kth.se</a></li>
                <li>KTH Campus</li>
                <li>Stockholm, Sverige</li>
              </ul>
            </div>

          <div>
              <h4 className="font-semibold text-lg mb-4">Webmaster</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="mailto:tholmb@kth.se">tholmb@kth.se</a></li>
                <li>Theodor Holmberg</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 py-8 border-t border-primary-light/20">
            <img
              src={kth}
              alt="KTH"
              className="h-24 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src={bergssektionen}
              alt="Bergssektionen"
              className="h-24 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src={nlg}
              alt="Näringslivsgruppen"
              className="h-24 md:h-20 opacity-80 hover:opacity-100 transition-opacity invert"
            />
          </div>

          <div className="border-t border-primary-light/20 pt-8 text-center">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} Näringslivsgruppen, KTH Bergssektionen. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
