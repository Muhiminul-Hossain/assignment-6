"use client";
import TodaysPlan from "./workoutDetails/My Plan/todaysPlan";
import SavedWorkout from "./workoutDetails/My Plan/Saved";
import { useContext, useState } from "react";
import { IWorkout } from "@/Types/books.type";
import { WorkoutContext } from "@/context/WorkoutProvider";

const PlanSavedTab = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const { todaysPlan, savedForLater } = useContext(WorkoutContext);
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "rating",
  );

  const sortWorkouts = (workouts: IWorkout[]) => {
    const sortedWorkouts = [...workouts];
    if (sortBy === "duration") {
      sortedWorkouts.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }
    return sortedWorkouts;
  };

  const sortedTodaysPlan = sortWorkouts(todaysPlan);
  const sortedSavedPlan = sortWorkouts(savedForLater);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="bg-[#15171d] rounded-full p-1 flex gap-1">
          <button
            onClick={() => setActiveTab("today")}
            className={`px-5 py-2 rounded-full text-xs font-black uppercase transition-all ${
              activeTab === "today" ? "bg-white text-black" : "text-gray-400"
            }`}
          >
            Today's Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-2 rounded-full text-xs font-black uppercase transition-all ${
              activeTab === "saved" ? "bg-white text-black" : "text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-3 text-gray-400 text-xs">
          <div className="flex items-center gap-1">
            <p>Sort</p>
            <p> By</p>
          </div>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
            className="select select-sm bg-[#15171d] text-white border-none text-xs font-bold"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {activeTab === "today" ? (
        <TodaysPlan workouts={sortedTodaysPlan} />
      ) : (
        <SavedWorkout workouts={sortedSavedPlan} />
      )}
    </div>
  );
};

export default PlanSavedTab;
