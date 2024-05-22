"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export function LampDemo() {
  return (
    
    <LampContainer className="pt-72">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl bg-transparent text-slate-100"
      >
        Join My Github  and Explore Now<br/>
        <div className="pt-6">
        <Link href={"https://github.com/developperin"} className="">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Download Resume
          </Button>
        </Link>
        </div>
      </motion.h1>
    </LampContainer>
    

  );
}
