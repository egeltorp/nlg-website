import { Presentation, PartyPopper, Send, GraduationCap, BriefcaseBusiness, Beer } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Presentation,
      title: "Lunchföreläsningar",
      description: "Lunchföreläsningar är ett uppskattat inslag som regelbundet lockar många studenter. Som företag får ni en unik möjlighet att presentera er verksamhet och skapa direktkontakt med framtidens ingenjörer på Bergssektionen.",
      benefits: ["Direktkontakt med studenter", "Professionell exponering", "Avslappnad nätverksmiljö"]
    },
    {
      icon: BriefcaseBusiness,
      title: "BKW-mässan",
      description: (
        <>
          BKW-mässan är en årlig arbetsmarknadsdag för studenter från Bergs-, Kemi- och W-sektionerna vid KTH.
          Här möts företag och framtidens ingenjörer för att nätverka, rekrytera och skapa långsiktiga kontakter.
          Dagen avslutas med en festlig Bankett som erbjuder en mer avslappnad miljö för vidare samtal och relationer.
          Mer information på{" "}
          <a
            href="https://www.thsbkw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            www.thsbkw.com
          </a>.
        </>
      ),
      benefits: ["Nätverkande", "Rekrytering", "Synlighet bland studenter"],
    },
    {
      icon: Beer,
      title: "Företagspub",
      description: (
        <>
          En företagspub är ett avslappnat och uppskattat evenemang där ni får möjlighet att träffa våra studenter i en informell miljö. 
          Ni kan presentera ert företag, hålla en kort föreläsning eller mingla över mat och dryck. 
          NLG hjälper till med planering, marknadsföring och logistik för ett lyckat evenemang.
        </>
      ),
      benefits: ["Avslappnat nätverkande", "Starkare företagsprofil", "Direktkontakt med studenter"],
    },    
    {
      icon: GraduationCap,
      title: "Mottagningen",
      description: (
        <>
          Under mottagningen välkomnar Kongliga Bergssektionen nya studenter på Materialdesign genom fyra veckor av aktiviteter. 
          Ert företag kan synas på flera sätt – via affischer, annonser i sångboken <i>Nøllegorillan</i>, loggor på Phaddrarnas tröjor 
          eller banderoller på campus. Ni kan även sponsra produkter, hålla en lunchföreläsning eller synas vid Nollegasquen. 
          För mer information, kontakta{" "}
          <a
            href="mailto:mottagning.bergs@gmail.com"
            className="text-accent hover:underline"
          >
            mottagning.bergs@gmail.com
          </a>.
        </>
      ),
      benefits: ["Stor synlighet", "Direktkontakt med nya studenter", "Flexibla samarbeten"],
    },
    {
      icon: Send,
      title: "Annonsering",
      description: (
        <>
          Nå ut till våra studenter direkt via riktade mailutskick och engagerande inlägg på våra plattformar som 
          Instagram och Facebook. Med mail kan ni nå specifika årskurser, medan mediainlägg ger bred exponering 
          för hela programmet. Vi hanterar både spridning och anpassning för att maximera er synlighet.
        </>
      ),
      benefits: ["Riktad kommunikation", "Bred exponering", "Effektiv marknadsföring"],
    },    
    {
      icon: PartyPopper,
      title: "Sittningar & Event",
      description: "Bergssektionen arrangerar flera stora sittningar, bland annat Bergslusse och Vårbalen, där företag får möjlighet att synas och nätverka med studenter och alumner i en festlig miljö. Som sponsor kan ni marknadsföra ert företag och bygga värdefulla relationer under dessa välbesökta evenemang. </>",
      benefits: ["Exklusiv exponering", "Nätverkande i festlig miljö", "Starka relationer med studenter och alumner"],
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vad Vi Erbjuder
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Vi erbjuder skräddarsydda lösningar för att möta era specifika behov och mål
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="font-display text-2xl text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed pt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
