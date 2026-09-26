"use client";
 import { toast } from 'react-toastify';
import React, { useContext } from "react";
import { IWorkout } from "@/Types/books.type";
import { WorkoutContext } from "@/context/WorkoutProvider";
const SaveForLater = ({ workout }: { workout: IWorkout }) => {
  const { savedForLater,setSavedForLater } = useContext(WorkoutContext);
  const handelSaveWorkout = () => {
    const alreadyAdded= savedForLater.find((w)=>w.id === workout.id);
    if(alreadyAdded){
      return toast.success("Already Saved")
    }
    setSavedForLater([...savedForLater, workout]);
  };
  return (
    <button
      className="bg-[#c8f135] text-black text-xs font-black tracking-widest uppercase px-6 py-3 rounded-xl"
      onClick={() => handelSaveWorkout()}
    >
      ☐Save For Later
    </button>
  );
};

export default SaveForLater;
