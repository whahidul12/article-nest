import Aurora from "@/components/backgrounds/Aurora";
import Faq from "@/components/FAQ/Faq";
import Feature from "@/components/feature/Feature";
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import Stats from "@/components/stats/Stats";
import Testimonial from "@/components/testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Feature />
      <Testimonial />
      <Stats />
      <Faq />
    </>
  );
}
