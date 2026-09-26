import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Oswald } from "next/font/google";
import { IWorkout } from "@/Types/books.type";
const oswaldFont = Oswald({
  subsets: ["latin"],
  weight: "400",
});
const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <Link href={`/workout/${workout.id}`} key={workout.id}>
      <div className="bg-[#15171d] rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
        <div className="relative w-full h-52">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex gap-2 mb-3 flex-wrap">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="bg-[#c8f135] text-black text-xs font-black px-3 py-1 rounded-full uppercase"
              >
                {group}
              </span>
            ))}
          </div>
          <h3
            className={`${oswaldFont.className} text-white font-black text-xl uppercase mb-1`}
          >
            {workout.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4">{workout.equipment}</p>
          <div className="flex items-center gap-4 text-gray-400 text-sm border-t border-white/10 pt-3">
            <span>⏱ {workout.duration} min</span>
            <span>🔥 {workout.caloriesBurned} kcal</span>
            <span>⭐ {workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
