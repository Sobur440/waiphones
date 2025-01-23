import { useProgress } from "@react-three/drei";
import { useEffect, useRef } from "react";

const LoadingScreen = () => {
  const { progress, active } = useProgress();
  const overlay = useRef();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        alert("Use the left and right arrow keys to view the phone");
      }, 500);
    }
  }, [progress]);

  return (
    <div
      className={`absolute z-[99] w-full h-screen bg-black text-white flex justify-center items-center ${
        progress === 100 ? "hidden" : ""
      } `}
      ref={overlay}
    >
      {Math.floor(progress)}%
    </div>
  );
};

export default LoadingScreen;
