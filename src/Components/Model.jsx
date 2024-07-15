import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { GridHelper } from "three";

function Model() {
  function Tmodel(props) {
    const { scene } = useGLTF("./milk_carton.glb");
    const ref = useRef();

    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += 0.02; // Adjust the speed of rotation as needed
      }
    });

    return (
      <primitive ref={ref} object={scene} position={[0, 0, 0]} {...props} />
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
      <Canvas dpr={[1, 2]} camera={{ fov: 10 }} resize={{ scroll: true }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 0]} intensity={1} />
        <OrbitControls
          enableZoom={true}
          enableRotate={true}
          enablePan={true}
          // minPolarAngle={Math.PI / 2}
          // maxPolarAngle={Math.PI / 2}
        />
        {/* <gridHelper args={[10, 10]} /> */}
        <Tmodel scale={1} />
      </Canvas>
    </div>
  );
}

export default Model;
