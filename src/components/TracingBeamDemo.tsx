"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { AnimatedTooltipPreview } from "@/components/team";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 py-40">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "",
    description: (
      <>
        <div>
          <p className="text-center pb-2 font-bold">
            {" "}
            I am Nirav Mathukiya A Frontend Devlopper{" "}
          </p>
          - As a skilled Web Developer and Web Designer , I have a proven track
          record of creating visually appealing and user-friendly websites. My
          biggest achievement has been developing a website and that resulted in
          a 20% increase in website traffic and customer engagement. My best
          qualities include being detail-oriented, creative, and having
          excellent problem-solving skills. With expertise in HTML, CSS,
          JavaScript, and I am able to provide innovative solutions to complex
          web development challenges. My passion for staying updated with the
          latest technologies allows me to constantly improve my skills and
          deliver top-notch results
        </div>
      </>
    ),
    badge: "PROFESSIONAL SUMMARY",
    image: "",
  },
  {
    title: "",
    description: (
      <>
        <div>
          • 2022 - Now <br />
          <p className="py-2 text-wrap">
            ‎ ‎ - BCA VNSGU, India, Surat ‎ (Sutex Bank Collage of Computer
            Science)
            <br />‎ ‎ - I Complete my BCA Degree with Sutext Bank collage of
            Computer Application and I have learn many skills in collage
          </p>
          <br />
          <br />
          • 2010 - 2022 <br />
          <p className="py-2 text-wrap">
            ‎ ‎ -10th and 12th (Shree Swaminarayan Paramsukh
            Gurukul),Surat,India <br />‎ ‎ - I successfully completed my high
            school education with a remarkable academic record. Achieving an
            impressive 89% overall , Continuing my aademic journey, I excelled
            in the 12th grade, earning an outstanding 85% in the final
            examinations
          </p>
          <br />
          <br />
        </div>
      </>
    ),
    badge: "Eduction",
    image: "",
  },
  {
    title: "",
    description: (
      <>
        <div className="flex justify-around font-bold">
          <div className="flex flex-col gap-3/4">
            <p>•‎ ‎HTML </p>
            <p>•‎ ‎CSS</p>
            <p>•‎ ‎JavaScript</p>
            <p>•‎ ‎Bootstrap</p>
            <p>•‎ ‎Tailwind CSS</p>
            <p>•‎ ‎React</p>
            <p>•‎ ‎Next </p>
          </div>
          <div>
            <p>•‎ ‎JQuery </p>
            <p>•‎ ‎Adobe Photoshop</p>
            <p>•‎ ‎Figma</p>
            <p>•‎ ‎Node.js</p>
            <p>•‎ ‎Git and Github</p>
            <p>•‎ ‎communication and teamwork</p>
          </div>
        </div>
      </>
    ),
    badge: "Skills",
    image: "",
  },
  {
    title: "",
    description: (
      <>
        <AnimatedTooltipPreview />
      </>
    ),
    badge: "Team",
    image: "",
  },
];
