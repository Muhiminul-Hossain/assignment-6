import Image from "next/image";
import React from "react";
import { Oswald } from "next/font/google";
import bannerImage from "@/assets/banner.png";

const oswaldFont = Oswald({
  subsets: ["latin"],
  weight: "700",
});

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between bg-[#15171d] rounded-2xl px-6 md:px-20 py-16 my-12">
      <div className="text-center lg:text-left">
        <p className="text-[#c8f135] text-xs font-bold uppercase mb-6">
          Workout Library
        </p>
        <h2 className={`${oswaldFont.className} text-white text-4xl md:text-6xl uppercase mb-6 font-black`}>
          Train With Intent. Log <br /> Every Set.
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into
          today's plan, and watch the week's work add up.
        </p>
        <button className="bg-[#c8f135] text-black text-xs font-black tracking-widest uppercase px-6 py-3 rounded-xl">
          Browse Workouts
        </button>
      </div>
      <div className="mt-10 lg:mt-0">
        <Image
          src={bannerImage}
          alt="banner-image"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default Banner;  