import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleEmailClick = () => {
    window.location.href = "mailto:naringsliv@bergs.kth.se";
  };

  const handlePhoneClick = () => {
    toast({
      title: "Kontaktinformation",
      description: "Ring oss på telefon för att diskutera samarbetsmöjligheter",
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Kontakta Oss
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            Intresserad av att samarbeta? Hör av er så berättar vi mer om hur vi kan hjälpa ert företag 
            att nå framtidens ingenjörer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="bg-card/95 backdrop-blur-sm border-primary-foreground/10 p-6 text-center hover:shadow-elegant transition-all hover:scale-100">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">E-post</h3>
            <p className="text-sm text-muted-foreground">femten@b.kth.se</p>
          </Card>

          <Card className="bg-card/95 backdrop-blur-sm border-primary-foreground/10 p-6 text-center hover:shadow-elegant transition-all hover:scale-100">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
            <p className="text-sm text-muted-foreground">Tillgänglig vid förfrågan</p>
          </Card>

          <Card className="bg-card/95 backdrop-blur-sm border-primary-foreground/10 p-6 text-center hover:shadow-elegant transition-all hover:scale-100">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Plats</h3>
            <p className="text-sm text-muted-foreground">KTH Campus, Stockholm</p>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={handleEmailClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-lg shadow-strong hover:scale-105 transition-all"
          >
            <Mail className="mr-2 h-5 w-5" />
            Skicka ett meddelande
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
