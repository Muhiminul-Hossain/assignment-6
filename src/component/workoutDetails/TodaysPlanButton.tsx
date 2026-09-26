"use client";
 import { ToastContainer, toast } from 'react-toastify';
import React, { useContext } from "react";
import { IWorkout } from "@/Types/books.type";
import { WorkoutContext } from "@/context/WorkoutProvider";
const TodaysPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { todaysPlan, setTodaysPlan } = useContext(WorkoutContext);
  const handelTodaysPlan = () => {
    const alreadyAdded= todaysPlan.find((w)=>w.id === workout.id);
    if(alreadyAdded){
      return toast.success("Workout Already Added")
    }
    setTodaysPlan([...todaysPlan, workout]);
  };
  return (
    <button
      className="bg-[#c8f135] text-black text-xs font-black tracking-widest uppercase px-6 py-3 rounded-xl"
      onClick={() => handelTodaysPlan()}
    >
      ☐ Add to today's plan
    </button>
  );
};

export default TodaysPlanButton;
