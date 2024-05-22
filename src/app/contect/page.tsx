import { SignupFormDemo } from "@/components/contect";
import {TypewriterEffectSmoothDemo} from "@/components/TypewriterEffectSmoothDemo"
import React from "react";

function SkillPage() {
  return (
    <div className=" bg-[#1f2937]">
       <TypewriterEffectSmoothDemo />
      <SignupFormDemo />
    </div>
  );
}

export default SkillPage;

export function generateMetadata({}){
  return{
    title:"Contect Nirav Mathukiya",
    description : "a Beautiful signup form by Nirav Mathukiya"
  }
}