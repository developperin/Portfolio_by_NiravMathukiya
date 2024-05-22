"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Movingcard() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    name: "- Sumit Dhamaliya",
    title: "Persistence Pays Off",
  },
  {
    quote:
      "The journey of a thousand miles begins with one step. Embrace every step, for they lead you closer to your destination.",
    name: "- Uttam Dobariya",
    title: "Embrace the Journey",
  },
  {
    quote: "In the midst of challenges lies opportunity. Embrace discomfort, for it is the fertile ground where growth flourishes",
    name: "- Parth Dudhatra",
    title: "Embrace Growth",
  },
  {
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    name: "- The Life",
    title: "The Truth of Life",
  },
  {
    quote:
      "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.",
    name: "- Nirav Mathukiya",
    title: "Courage in Adversity",
  },
];
