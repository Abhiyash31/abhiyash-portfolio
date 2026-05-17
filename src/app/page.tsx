import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Skills />
      <Experience />
    </>
  );
}
