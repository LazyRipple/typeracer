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
    <div className="flex flex-col justify-center items-center w-full h-screen gap-y-3">
      <div className="w-96 space-y-6">
        <div className="mb-4">
          <label className="block text-lg font-medium">User 1</label>
          <input
            type="text"
            className="mt-1 px-2 block w-full bg-transparent border-2 border-foreground border-gray-300 rounded-md shadow-sm sm:text-lg"
            value={userName1}
            onChange={(e) => {
              setUserName1(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">User 2</label>
          <input
            type="text"
            className="mt-1 px-2 block w-full bg-transparent border-2 border-foreground border-gray-300 rounded-md shadow-sm sm:text-lg"
            value={userName2}
            onChange={(e) => {
              setUserName2(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Link</label>
          <input
            type="text"
            className="mt-1 px-2 block w-full bg-transparent border-2 border-foreground border-gray-300 rounded-md shadow-sm sm:text-lg"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </div>
      </div>

      <button
        className="mt-4 px-8 py-4 bg-transparent border-2 border-foreground text-foreground font-semibold rounded-lg transition-all hover:scale-110"
        onClick={handdleClick}
      >
        Save
      </button>
    </div>
  );
}
