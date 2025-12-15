"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { Spotlight } from "@/components/ui/spotlight-new";
function HeroSection() {
  return (
    <div className="h-auto rounded-md flex w-full bg-black/[0.96] md:h-[40rem] flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight />
      <div className="p-4 z-10 relative w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >Master the art of Music</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >
          Dive into our comprehensive music courses designed for all skill levels. Whether you're a beginner or an experienced musician, our expert-led lessons will help you unlock your full potential and elevate your musical journey.
        </p>    <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default HeroSection
