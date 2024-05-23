"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { Button } from "./ui/moving-border";
import j2 from "@/images/2.png"

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden h-full w-full">
      <ContainerScroll 
        titleComponent={
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-black dark:text-black">
              Nirav Mathukiya <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Git Hub
              </span>
            </h1>
          </div>
        }
      >
        <div className="w-full h-full flex items-center justify-center flex-col text-2xl gap-4">
            <div className="flex items-center text-center w-1/2 mx-auto md:flex-col sm:flex-col ">
                <Image src={j2} alt="good" width={100} height={100}></Image>
                <div className="text-slate-100 ">
                    <p>Nirav Mathukiya</p>
                    <p className="text-sm">Hello, I'm Nirav Mathukiya !!! 🌐 As a passionate web developer</p>
                    </div>
            </div>
         <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 text-center w-full"
            >
              Follow Github
            </Button>
            </div>
      </ContainerScroll>
    </div>
  );
}
