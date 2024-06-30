// import { useState } from "react";
import Toggle from "./Toggle";
export default function Header() {
  return (
    <>
      <div className="flex items-center sm:justify-between sm:px-56 py-5 bg-white dark:bg-slate-600">
        <div className="w-max flex items-center justify-between">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-orange-500 pr-5 text-5xl text-black dark:text-white font-bold">
            Text-Converter
          </h1>
        </div>
        <Toggle />
      </div>
    </>
  );
}
