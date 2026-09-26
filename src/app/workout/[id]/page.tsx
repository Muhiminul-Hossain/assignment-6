import { IWorkout } from "@/Types/books.type";
import Image from "next/image";
import { Oswald } from "next/font/google";
import React from "react";
import TodaysPlanButton from "@/component/workoutDetails/TodaysPlanButton";
import SaveForLaterButton from "@/component/workoutDetails/SaveForLaterButton";

const oswaldFont = Oswald({ subsets: ["latin"], weight: "700" });

interface IWorkoutDetailsPageProp {
  params: Promise<{ id: string }>;
}

const getWorkoutList = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProp) => {
  const { id } = await params;
  const workoutListData = await getWorkoutList();
  const workout: IWorkout = workoutListData.find(
    (workout: IWorkout) => workout.id === Number(id),
  ) as IWorkout;

  return (
    <section className="container mx-auto my-12 flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-1/2 relative h-[500px] rounded-2xl overflow-hidden">
        <Image src={workout.image} alt={workout.name} width={800} height={1000} />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className={`${oswaldFont.className} text-white text-5xl uppercase font-black mb-3`}>{workout.name}</h1>
        <p className="text-gray-400 text-sm mb-6">{workout.description}</p>
        <ul className="flex gap-2 mb-6">
          {workout.muscleGroups.map((group) => (
            <li key={group} className="bg-[#c8f135] text-black text-xs font-black px-4 py-1 rounded-full uppercase">{group}</li>
          ))}
        </ul>
        <ul className="bg-[#15171d] rounded-2xl divide-y divide-white/10 mb-8">
          <li className="flex justify-between px-6 py-4"><span className="text-gray-400 text-xs uppercase tracking-widest">Equipment</span><span className="text-white font-bold">{workout.equipment}</span></li>
          <li className="flex justify-between px-6 py-4"><span className="text-gray-400 text-xs uppercase tracking-widest">Difficulty</span><span className="text-white font-bold">{workout.difficulty}</span></li>
          <li className="flex justify-between px-6 py-4"><span className="text-gray-400 text-xs uppercase tracking-widest">Sets</span><span className="text-white font-bold">{workout.sets}</span></li>
          <li className="flex justify-between px-6 py-4"><span className="text-gray-400 text-xs uppercase tracking-widest">Reps</span><span className="text-white font-bold">{workout.reps}</span></li>
          <li className="flex justify-between px-6 py-4"><span className="text-gray-400 text-xs uppercase tracking-widest">Duration</span><span className="text-white font-bold">{workout.duration} min</span></li>
          <li className="flex justify-between px-6 py-4"><span className="text-gray-400 text-xs uppercase tracking-widest">Calories</span><span className="text-white font-bold">{workout.caloriesBurned} kcal</span></li>
          <li className="flex justify-between px-6 py-4"><span className="text-gray-400 text-xs uppercase tracking-widest">Rating</span><span className="text-white font-bold">{workout.rating}</span></li>
        </ul>
        <div>
          <h2 className={`${oswaldFont.className} text-white text-2xl uppercase font-black mb-4`}>Instructions</h2>
          <ul className="flex flex-col gap-3 mb-8">
            {workout.instructions.map((instruction, index) => (
              <li key={index} className="text-gray-400 text-sm">{index + 1}. {instruction}</li>
            ))}
          </ul>
          <div className="flex gap-4">
            
            <TodaysPlanButton workout={workout}></TodaysPlanButton>
            <SaveForLaterButton workout={workout}></SaveForLaterButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;