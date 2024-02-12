import React, { useState, useEffect } from "react";

function Eyes() {
  const [showContent, setShowContent] = useState(true); // This state will control whether to show the initial content or the video

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180); // Convert to degrees and adjust as necessary
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [rotate, setRotate] = useState(0);

  const handleVideoEnd = () => {
    setShowContent(true); // After the video ends, show the initial content again
  };

  if (!showContent) {
    return (
      <video
        className=" w-full h-[90vh] object-fit"
        src=" https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4"
        autoPlay
        onEnded={handleVideoEnd}
      ></video>
    );
  }

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        className="relative w-full bg-cover bg-center h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
        onClick={() => setShowContent(false)} // Hide the initial content and show the video when this div is clicked
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
        <div className="relative flex items-center justify-center bg-zinc-100 rounded-full w-[15vw] h-[15vw]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl uppercase z-10">
              Play
            </h1>
            <div className="bg-zinc-900 h-2/3 relative rounded-full w-2/3 ]">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="bg-zinc-100 h-10 rounded-full w-10"></div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center bg-zinc-100 rounded-full w-[15vw] h-[15vw]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl uppercase z-10">
              Play
            </h1>

            <div className="bg-zinc-900 h-2/3 relative rounded-full w-2/3 ]">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="bg-zinc-100 h-10 rounded-full w-10"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Eyes;














































// 
// src=" https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4"