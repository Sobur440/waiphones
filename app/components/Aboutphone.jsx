import { ContactShadows, Environment, Float, Gltf } from "@react-three/drei";

const Aboutphone = () => {
  return (
    <>
      <directionalLight position={[7, 7, 0]} intensity={0.8} />
      <Float floatIntensity={3} speed={2}>
        <Gltf
          src="models/apple_iphone_15_pro_max_black.glb"
          position={[0, 0, 0]}
          scale={3.5}
        />
        <Environment preset="warehouse" />
      </Float>
    </>
  );
};

export default Aboutphone;
