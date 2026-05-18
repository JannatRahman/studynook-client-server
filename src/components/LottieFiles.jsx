"use client";

import Lottie from "lottie-react";
import animationData from "../../public/animations/hero.json";

export default function LottieFiles() {
  return (
    <div style={{ width: 600, height: 600 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}