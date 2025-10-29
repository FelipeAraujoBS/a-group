import { HeroAbout } from "@/components/about/HeroAbout";
import { OurStory } from "@/components/about/OurStory";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { OurProcess } from "@/components/about/OurProcess";
import { Testimonials } from "@/components/about/Testimonials";

export const metadata = {
  title: "Sobre - A Group | Seu hub de soluções tecnológicas",
  description:
    "Conheça a A Group, empresa de desenvolvimento web especializada em soluções digitais para pequenas e médias empresas.",
};

export default function AboutPage() {
  return (
    <main>
      <HeroAbout />
      <OurStory />
      <MissionVisionValues />
      <OurProcess />
      <Testimonials />
    </main>
  );
}
