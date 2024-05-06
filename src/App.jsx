import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  // const [isCursorActive, setCursorActive] = useState(false);
  // const [cursorSize, setCursorSize] = useState(150);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const cursorSize = isCursorActive ? 300 : 100;

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const x = e.clientX - cursorSize / 2;
  //     const y = e.clientY - cursorSize / 2;

  //     setMousePosition({ x, y });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, [mousePosition, isCursorActive]);

  useGSAP(() => {
    // gsap.to("#circle", {
    //   x: mousePosition.x,
    //   y: mousePosition.y,
    //   width: cursorSize,
    //   height: cursorSize,
    //   filter: isCursorActive ? "blur(40px)" : "blur(0px)",
    // });

    gsap.to(".move",{
      x:"-105%",
      duration:5,
      repeat:-1,
      ease:"linear"
    })
  }, []);

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center ">
      <div className="movebox whitespace-nowrap  relative h-32 w-[80%] overflow-hidden">
        <div className="left-overaly absolute inset-0 w-[40%] left-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="right-overaly absolute h-full w-[40%] right-0 bg-gradient-to-r from-transparent to-black z-10"></div>
      <h1 className="move font-semibold text-9xl mr-8 inline-block text-white">PAKISTAN</h1>
      <h1 className="move font-semibold text-9xl mr-8 inline-block text-white">PAKISTAN</h1>
      <h1 className="move font-semibold text-9xl mr-8 inline-block text-white">PAKISTAN</h1>
      <h1 className="move font-semibold text-9xl mr-8 inline-block text-white">PAKISTAN</h1>
      <h1 className="move font-semibold text-9xl mr-8 inline-block text-white">PAKISTAN</h1>
      <h1 className="move font-semibold text-9xl mr-8 inline-block text-white">PAKISTAN</h1>
      <h1 className="move font-semibold text-9xl mr-8 inline-block text-white">PAKISTAN</h1>
      </div>
    </div>
  );
};

export default App;
