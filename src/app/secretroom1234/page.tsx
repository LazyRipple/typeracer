"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [userName1, setUserName1] = useState("User 1");
  const [userName2, setUserName2] = useState("User 2");
  const [link, setLink] = useState(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  );

  const handdleClick = async () => {
    await fetch("api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        NuserName1: userName1,
        NuserName2: userName2,
        Nlink: link,
      }),
    });
  };

  useEffect(() => {
    setUserName1("User 1");
    setUserName2("User 2");
    setLink("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }, []);

  return (
    <div className="flex flex-col items-center mt-12 text-black space-y-4">
      <div className="w-96 space-y-6">
        <div className="mb-4">
          <label className="block text-lg font-medium text-white">User 1</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
            value={userName1}
            onChange={(e) => {
              setUserName1(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-white">User 2</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
            value={userName2}
            onChange={(e) => {
              setUserName2(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-white">Link</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </div>
      </div>

      <button
        className="bg-white px-10 hover:bg-gray-300 transition-all hover:scale-110 py-3 text-black text-xl rounded-lg"
        onClick={handdleClick}
      >
        Save
      </button>
    </div>
  );
}
