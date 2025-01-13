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
    <div className="text-center mt-12">
      <button
        onClick={handleClick}
        className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg transition-all hover:scale-110 hover:bg-blue-700"
      >
        {" "}
        Refresh{" "}
      </button>
      <h1 className="text-5xl font-bold">typeracer</h1>
      <p className="mt-2 text-lg">CP Olympics 2024</p>
      <p className="text-sm text-gray-600">13 / 2 / 2025</p>
      <div className="flex justify-center gap-64 mt-4 text-3xl">
        <span className="px-4 py-2">{userName1}</span>
        <span className="px-4 py-2">{userName2}</span>
      </div>
      <Link href={link} target="_blank">
        <button className="mt-4 px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg transition-all hover:scale-110 hover:bg-blue-700">
          Join Race
        </button>
      </Link>
    </div>
  );
}
