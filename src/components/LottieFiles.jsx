"use client";

import Lottie from "lottie-react";
import animationData from "../../public/animations/hero.json";

export default function LottieFiles() {
  return (
    <div
      className="
        w-full
        max-w-[220px]
        sm:max-w-[320px]
        md:max-w-[420px]
        lg:max-w-[520px]
        xl:max-w-[800px]
        aspect-square
        mx-auto
      "
    >
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-full h-full"
      />
    </div>
  );
}