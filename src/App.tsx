"use client";
import { useState } from "react";
import phrases from "./phrases.json";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      className="flex flex-col items-center justify-center h-screen -mt-16"
    >
      {yesPressed ? (
        <>
          <div style={{ display: "block" }}>
            <img
              className="rounded-lg"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Bear Kiss"
            />
          </div>
          <div className="text-8xl bg-red-500 font-bold my-4">Bach gaya!!!</div>
        </>
      ) : (
        <>
          <img
            className="rounded-lg h-[200px]"
            src="https://cloudgenius.s3.amazonaws.com/belantime.jpeg"
            alt="Belantime"
          />
          <h1 className="text-4xl font-bold my-4">
            Will you beat me on BelanTine day?
          </h1>
          <div style={{ display: "block" }}>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              No
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "Yes" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
