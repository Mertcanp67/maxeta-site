import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Craftsmanship } from "@/components/Craftsmanship";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Faq } from "@/components/Faq";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileBar } from "@/components/MobileBar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="icerik">
        <Hero />
        <Stats />
        <About />
        <Craftsmanship />
        <Services />
        <Process />
        <Projects />
        <Faq />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBar />
    </>
  );
}
