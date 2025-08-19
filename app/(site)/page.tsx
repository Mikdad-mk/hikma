import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import SEOSection from "@/components/SEO";
import Smart from "@/components/Smart";
import Why from "@/components/Why";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "DIGITAL HIKMA - SEO, AI Automation & Web Design",
  description: "Maximize your online potential with our expert SEO, lead-nurturing automation, AI-driven insights, and stunning website designs. Get a free quote today!"
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <SEOSection />
      <Smart />
      <Why />
      <About />
      <FAQ />
      <Pricing />
      <Contact />
    </main>
  );
}
