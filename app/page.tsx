import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Differentials } from "@/components/home/Differentials";
import { CTAFinal } from "@/components/home/CTAFinal";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesPreview />
      <Differentials />
      <CTAFinal />
    </div>
  );
}
