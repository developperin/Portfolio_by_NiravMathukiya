import { TracingBeamDemo } from "@/components/TracingBeamDemo";
import React from "react";


function SkillPage() {
  return (
    <>
   <TracingBeamDemo />
    </>
  );
}

export default SkillPage;

export function generateMetadata({}){
  return{
    title:"Skill of Nirav Mathukiya",
    description : "a Beautiful signup form by Nirav Mathukiya"
  }
}