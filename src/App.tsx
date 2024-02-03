"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div style={{
    	display: 'flex',
    	alignItems: 'center',
		  justifyContent: 'center',
		  height: "100vh"
	  }}
		className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
			  <>
			<div style={{display: "block"}}>
				<img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
				  </div>
        <div className="text-8xl bg-red-500 font-bold  my-4">Bach gaya!!!</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://cloudgenius.s3.amazonaws.com/belantime.jpeg" />
			<h1 className="text-4xl my-4">Will you beat me on BelanTine day?</h1>
			<div style={{display: "block"}}>
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
