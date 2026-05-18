"use client";

import Lottie from "lottie-react";
import animationData from "@/public/animations/hero.json";

export default function LottieFiles() {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}