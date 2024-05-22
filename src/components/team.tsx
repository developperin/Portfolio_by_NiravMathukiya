"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
// import { Image } from "next/image"
import m1 from "../../public/m1.png";
import m2 from "../../public/m2.png";
import m3 from "../../public/m3.jpg";
import m4 from "../../public/m4.png";

const people = [
  {
    id: 1,
    name: "Sumit Dhamaliya",
    designation: "Backend Developer",
    image: m1,
  },
  {
    id: 2,
    name: "Uttam Dobariya",
    designation: "Frontend Developer",
    image: m2,
  },
  {
    id: 3,
    name: "Nirav Mathukiya",
    designation: "Full Stack",
    image: m3,
  },
  {
    id: 4,
    name: "Parth Dudhatra",
    designation: "Full Stack",
    image: m4,
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
