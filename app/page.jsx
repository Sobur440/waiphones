"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { CameraControls, KeyboardControls, View } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import Aboutphone from "./components/Aboutphone";

export default function Home() {
  const map = useMemo(
    () => [
      { name: "right", keys: ["ArrowRight"] },
      { name: "left", keys: ["ArrowLeft"] },
    ],
    []
  );

  const main = useRef();
  const heroRef = useRef();
  const aboutRef = useRef();

  useEffect(() => {
    alert("Press the left and right arrow keys to view the phone");
  }, []);

  return (
    <main ref={main}>
      <KeyboardControls map={map}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 30 }}
          className="canvas"
          eventSource={main}
        >
          <View track={heroRef}>
            <Experience />
          </View>

          <View track={aboutRef}>
            <Aboutphone />
          </View>
        </Canvas>
      </KeyboardControls>

      {/*  */}

      <section ref={heroRef} className="w-full h-full">
        <p className="text-[4rem] relative z-[2] font-mono font-extrabold left-[2rem] top-[10rem]">
          Iphone 16 pro max
        </p>
      </section>

      <section className="flex max-w-[80%] mx-auto justify-between">
        <div className="mt-[1rem]">
          <h2 className="text-[2.3rem] mb-[1.3rem] ">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="max-w-[30rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consectetur, exercitationem quae illum est laboriosam. Repudiandae
            praesentium officiis porro natus libero corporis, delectus
            accusantium. Perspiciatis ipsa temporibus, dolore nihil facere omnis
            tenetur voluptate quam totam doloremque facilis doloribus aliquam
            dignissimos? Tenetur quo explicabo harum qui? Quam pariatur dolor
            repellendus doloremque.
          </p>
        </div>
        <div ref={aboutRef} className="h-[20rem] w-[45rem]"></div>
      </section>
    </main>
  );
}
