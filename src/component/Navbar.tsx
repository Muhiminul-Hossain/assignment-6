"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import { Oswald } from "next/font/google";
// import TodaysPlan from "./workoutDetails/My Plan/todaysPlan";
import { WorkoutContext } from "@/context/WorkoutProvider";
const oswaldFont = Oswald({
  subsets: ["latin"],
  weight: "400",
});
const Navbar = () => {
  const { todaysPlan } = useContext(WorkoutContext);
  const { savedForLater } = useContext(WorkoutContext);
  const link = (
    <>
      <li>
        <Link href="/">Workout</Link>
      </li>
      <li className="rounded-2xl bg-[#c8f13529] px-2 text-[#c8f135]">
        <Link href="/my-plan">My Plan</Link>
      </li>
    </>
  );
  return (
    <nav className="bg-black  border-b border-white/20 py-3">
      <div className="navbar shadow-sm container mx-auto items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={logo} alt="fitlog-logo"></Image>
            <Link
              href="/"
              className={`${oswaldFont.className} font-bold text-2xl`}
            >
              FITLOG
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-3 font-bold">
            {link}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <div className="flex items-center gap-2">
            <Link href="/my-plan" className="text-white text-sm font-bold">
              Plan
            </Link>
            <p className="bg-[#c8f135] text-black text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
              {todaysPlan.length}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/my-plan" className="text-white text-sm font-bold">
              Saved
            </Link>
            <p className="bg-white text-black text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
              {savedForLater.length}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
