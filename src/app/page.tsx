import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { SelectedWork } from "@/components/SelectedWork";
import { About } from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <SelectedWork />
      <About />
    </>
  );
}
