import { useState } from "react";
import phrases from "./phrases.json";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track current image index
  const images = [
    "https://cdn.memegenerator.es/imagenes/memes/full/3/13/3130348.jpg",
    "https://i.imgflip.com/1ovjew.jpg",
    "https://th.bing.com/th/id/OIP.kYbrTCtOureAk6px8MIxtQHaHa?rs=1&pid=ImgDetMain",
    "https://www.meme-arsenal.com/memes/72dd941ddbed72b3d7765a8e64becb11.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8NLk90Q3_8oNci-56Wy1IAKgXf6WhICACw&usqp=CAU",
    "https://media.tenor.com/Yrj3F_-AGKkAAAAi/cartoon-cute.gif",
    "https://media1.tenor.com/m/K1VyJCb1im0AAAAC/kid-crying.gif",
    "https://media1.tenor.com/m/CyJzmWAjPTEAAAAC/cat-no.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3ZvcmM2dWtjcjl1MXBjYTV4Y3oybnM4ZnhjZGRsMW1jM3phNXR0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JMe4NTbuueHnZdZlTh/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2oxOHU5bmVhemd5bGNjbHhqbmhyNjk5a2x2Z2JlY2M2OGg3YmR1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/I1nwVpCaB4k36/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHE0ZjkxMnZscTRpN3hzOTczeXV5bDY0Z3RuNnBnMzI5MW9xeG1sYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8vUEXZA2me7vnuUvrs/giphy.gif",
    // Add more image URLs as needed
  ];
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setYesPressed(false); // Resetting yesPressed state
    // Increment current image index and reset to 0 if it exceeds the number of images
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
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
        flexDirection: "column", // Center content vertically
        height: "100vh",
      }}
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
          {noCount > 0 && ( // Render image only if noCount is greater than 0
            <div>
              <img
                src={images[currentImageIndex]} // Use current image URL based on currentImageIndex
                alt="Meme Images."
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
