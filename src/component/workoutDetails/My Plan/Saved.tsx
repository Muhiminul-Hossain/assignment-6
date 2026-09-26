"use client";
import { WorkoutContext } from '@/context/WorkoutProvider';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IWorkout } from '@/Types/books.type';

const SavedWorkout = ({workouts}:{workouts:IWorkout[]}) => {
    const { savedForLater } = useContext(WorkoutContext);

    if (savedForLater.length === 0) {
        return (
            <div className="border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center py-24 gap-4">
                <h2 className="text-white font-black text-xl uppercase">Nothing Here Yet</h2>
                <p className="text-gray-400 text-sm">Browse the library and add a lift to get today moving.</p>
                <Link href="/" className="bg-[#c8f135] text-black text-xs font-black tracking-widest uppercase px-6 py-3 rounded-full">
                    Go to workouts
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {workouts.map((workout) => (
                <div key={workout.id} className="bg-[#15171d] rounded-2xl flex items-center gap-4 p-4">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <Image src={workout.image} alt={workout.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-black text-sm uppercase">{workout.name}</h3>
                        <p className="text-gray-400 text-xs mb-2">{workout.equipment}</p>
                        <div className="flex gap-4 text-gray-400 text-xs">
                            <span>⏱ {workout.duration} min</span>
                            <span>🔥 {workout.caloriesBurned} kcal</span>
                            <span>⭐ {workout.rating}</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Link href={`/workout/${workout.id}`} className="border border-white/20 text-white text-xs font-black px-4 py-2 rounded-xl">
                            View Details
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SavedWorkout;