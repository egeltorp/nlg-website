import React from "react"

import image1 from "/images/viktor.jpg";
import image2 from "/images/josef.jpg";
import image3 from "/images/elias.jpg";
import image4 from "/images/theodor.jpg";

interface Member {
  name: string
  role: string
  image: string
  description?: string
}

const members: Member[] = [
  {
    name: "Viktor Almqvist",
    role: "Ordförande",
    image: image1,
    description: "Leder Näringslivsgruppen med fokus på samarbete, struktur och långsiktig utveckling av organisationen.",
  },
  {
    name: "Josef Mekki",
    role: "Fest & Bankett",
    image: image2,
    description: "Planerar och leder NLG:s sociala evenemang, med fokus på gemenskap, professionalism och glädje.",
  },
  {
    name: "Elias Skott",
    role: "Logistik",
    image: image3,
    description: "Säkerställer att all logistik kring evenemang och samarbeten fungerar smidigt och effektivt.",
  },
  {
    name: "Theodor Holmberg",
    role: "PR & Grafisk Design",
    image: image4,
    description: "Ansvarar för NLG:s visuella identitet, kommunikation och varumärkesprofil — både digitalt och tryckt.",
  },
]

const NLGTeam: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section intro */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ledningen
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Träffa personerna bakom Näringslivsgruppen — ett engagerat team som arbetar
            för att bygga relationer mellan studenter och näringsliv.
          </p>
        </div>

        {/* Member grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
          {members.map((member) => (
            <div
              key={member.name}
              className="group bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-strong border border-border transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm uppercase tracking-wide text-accent font-medium mb-3">
                  {member.role}
                </p>
                {member.description && (
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {member.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NLGTeam
