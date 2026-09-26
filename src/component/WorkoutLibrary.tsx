import React from "react";
import { Oswald } from "next/font/google";
import WorkoutCard from "./WorkoutCard";
import { IWorkout } from "@/Types/books.type";

const oswaldFont = Oswald({ subsets: ["latin"], weight: "700" });
const getWorkoutList = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const WorkoutLibrary = async () => {
  const workoutData = await getWorkoutList();

  return (
    <section className="container mx-auto my-12">
      <h2 className={`${oswaldFont.className} text-white text-4xl uppercase font-black mb-2`}>
        The Library
      </h2>
      <p className="text-gray-400 text-sm mb-8">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutData.map((workout:IWorkout) =>{
            return <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>
        } )}
      </div>
    </section>
  );
};

export default WorkoutLibrary;
