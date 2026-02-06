"use client";

import animationData from "@/assets/business-salesman.json";
import { useLottie } from "lottie-react";

const HeroLottie = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className="">
        <div className="w-full">{View}</div>
      </div>
    </>
  );
};

export default HeroLottie;
