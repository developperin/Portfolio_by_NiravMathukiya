"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg z-0">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn(
          "md:text-4xl text-xl text-white relative z-20 text-center leading-3 sm:text-sm "
        )}
      >
        Master in Frontend in 100 Days With <br /> <br  className="py-2"></br>Nirav Mathukiya
      </h1>
      {/* <p className="text-center mt-2 text-neutral-300 relative z-20">
        A seasoned frontend developer with two years of experience adept at
        crafting responsive, user-friendly interfaces. Proficient in HTML, CSS,
        JavaScript, and various frameworks, with a keen eye for design details.
      </p> */}
      <p className="mt-4 font-normal text-center md:text-lg text-neutral-300 max-w-lg mx-auto z-20"> A seasoned frontend developer with two years of experience adept at
          crafting responsive, user-friendly interfaces. Proficient in HTML,
          CSS, JavaScript, and various frameworks, with a keen eye for design
          details.</p>
    </div>
  );
}
