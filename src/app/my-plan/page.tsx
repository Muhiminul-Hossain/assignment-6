"use client";
import PlanSavedTab from "@/component/PlanSavedTab";
import { WorkoutContext } from "@/context/WorkoutProvider";
import React, { useContext, useState } from "react";

const TodaysPlanPage = () => {
  const { todaysPlan, savedForLater } = useContext(WorkoutContext);
  const [activeTab, setActiveTab] = useState("today");

  const currentList = activeTab === "today" ? todaysPlan : savedForLater;
  const totalMinutes = currentList.reduce((acc, w) => acc + w.duration, 0);
  const totalCalories = currentList.reduce((acc, w) => acc + w.caloriesBurned, 0);

  return (
    <section className="container mx-auto my-12">
      <div className="mb-6">
        <h1 className="text-white text-4xl font-black">MY PLAN</h1>
        <p className="text-gray-400 text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="bg-[#15171d] rounded-2xl flex justify-between px-10 py-6 mb-6">
        <div>
          <h3 className="text-gray-400 text-xs uppercase mb-2">Exercises</h3>
          <p className="text-[#c8f135] text-4xl font-black">
            {currentList.length}
          </p>
        </div>
        <div>
          <h3 className="text-gray-400 text-xs uppercase mb-2">Minutes</h3>
          <p className="text-white text-4xl font-black">{totalMinutes}</p>
        </div>
        <div>
          <h3 className="text-gray-400 text-xs uppercase mb-2">Calories</h3>
          <p className="text-white text-4xl font-black">{totalCalories}</p>
        </div>
      </div>

      <PlanSavedTab activeTab={activeTab} setActiveTab={setActiveTab} />
    </section>
  );
};

export default TodaysPlanPage;