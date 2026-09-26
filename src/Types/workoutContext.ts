import { IWorkout } from "./books.type";

export interface IWorkoutContext {
  todaysPlan: IWorkout[];
  setTodaysPlan: (plan: IWorkout[]) => void;
  savedForLater: IWorkout[];
  setSavedForLater: (saved: IWorkout[]) => void;
}