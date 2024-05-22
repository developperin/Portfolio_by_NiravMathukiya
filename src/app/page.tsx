import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
import HeroSection from "@/components/HeroSection";
import { Movingcard } from "@/components/Movingcard";
import {TracingBeamDemo} from "@/components/TracingBeamDemo"


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <HeroSection /> */}
      {/* <TracingBeamDemo/> */}
      <BackgroundBoxesDemo />
      <Movingcard />
    </main>
  );
}
