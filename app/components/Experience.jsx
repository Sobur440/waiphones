import {
  CameraControls,
  Environment,
  Gltf,
  MeshReflectorMaterial,
  PerspectiveCamera,
  Stage,
  useGLTF,
  useKeyboardControls,
} from "@react-three/drei";
import { button, useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import Aboutphone from "./Aboutphone";

const Experience = () => {
  const controls = useRef();
  const [count, setCount] = useState(0);

  const rightPressed = useKeyboardControls((state) => state.right);
  const leftPressed = useKeyboardControls((state) => state.left);

  const positions = [
    [0, 4.898587196589413e-16, 8, 0, 0, 0],
    [
      1.6226228806621974, 1.487447514739095, -2.3536086322572167,
      0.17480833640110535, 1.2282885314270175, 0.16582857885754523,
    ],
    [
      5.308540119764592, -0.449074932422381, -0.15348213129199315,
      -0.05474085601621594, 0.11743344341935698, 0.09607522821938941,
    ],
  ];

  const transitions = () => {
    controls.current.setLookAt(...positions[count], true);
  };

  useEffect(() => {
    setCount((c) => {
      let newCount = c;
      if (rightPressed) {
        newCount += 1;
      }
      if (leftPressed) {
        newCount -= 1;
      }

      return Math.max(0, Math.min(newCount, 2));
    });
  }, [rightPressed, leftPressed]);

  useEffect(() => {
    transitions();
  }, [rightPressed, leftPressed]);

  return (
    <>
      <PerspectiveCamera position={[0, 0, 8]} fov={30} makeDefault />
      <CameraControls
        ref={controls}
        mouseButtons={{
          left: 0,
          right: 0,
          middle: 0,
          wheel: 0,
        }}
        touches={{
          one: 0,
          two: 0,
          three: 0,
        }}
      />
      <Stage intensity={0.5} preset={"upfront"} environment={"forest"}>
        <Gltf
          src="models/apple_iphone_15_pro_max_black.glb"
          position={[0, 0, 0]}
          scale={6}
          rotation-y={Math.PI}
        />
      </Stage>

      {/* <Aboutphone /> */}

      {/* <Environment preset="city" /> */}

      <mesh rotation-x={-Math.PI / 2} position-y={-2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          color="#171720"
          resolution={1024}
          roughness={0.6}
          mixStrength={3}
        />
      </mesh>
      {/* Apple iPhone 15 Pro Max Black" (https://skfb.ly/oLpPT) by polyman is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). */}
    </>
  );
};

export default Experience;
