import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Team />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
