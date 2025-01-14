"use client";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [userName1, setUserName1] = useState("User 1");
  const [userName2, setUserName2] = useState("User 2");
  const [link, setLink] = useState(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  );

  const handleClick = async () => {
    const res = await fetch("/api");
    const data = await res.json();
    setUserName1(data.userName1);
    setUserName2(data.userName2);
    setLink(data.link);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-y-3 pb-5">
      <button
        onClick={handleClick}
        className="absolute bottom-4 right-4 px-8 py-4 bg-transparent border-2 border-foreground text-foreground font-semibold rounded-lg transition-all hover:scale-110"
      >
        {" "}
        Refresh{" "}
      </button>
      <h1 className="text-6xl font-bold pt-6">typeracer</h1>
      <p className="mt-2 text-lg">CP Olympics 2024</p>
      <p className="text-sm text-gray-500">13 / 2 / 2025</p>
      <div className="grid grid-cols-9 mt-4 text-3xl w-full">
        <div className="col-span-4 px-4 py-2 pr-4 text-center">{userName1}</div>
        <div className="col-span-1 flex justify-center items-center">VS</div>
        <div className="col-span-4 px-4 py-2 pl-4 text-center">{userName2}</div>
      </div>
      <Link href={link} target="_blank">
        <button className="mt-4 px-8 py-4 bg-transparent border-2 border-foreground font-semibold rounded-lg transition-all hover:scale-110">
          Join Race
        </button>
      </Link>
    </div>
  );
}
