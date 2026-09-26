"use client"
import React, { createContext, ReactNode, useState } from "react";
import { IWorkoutContext } from "@/Types/workoutContext";
import { IWorkout } from "@/Types/books.type";
export const WorkoutContext = createContext<IWorkoutContext>(
  {} as IWorkoutContext,
);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<IWorkout[]>([]);
  const [savedForLater, setSavedForLater] = useState<IWorkout[]>([]);

  const sharedData = {
    todaysPlan,
    setTodaysPlan,
    savedForLater,
    setSavedForLater,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
