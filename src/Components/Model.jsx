import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

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
      <motion.primitive
        ref={ref}
        object={scene}
        scale={[1.2, 1.2, 1.2]} // Adjust the scale to fix the size
        position={[props.positionX, -0.9, 0]}
        // animate={{ x: props.positionX }}
        transition={{ duration: 1 }} // Adjust the duration of the transition as needed
        {...props}
      />
    );
  }

  const [value, setValue] = useState(0.1);

  return (
    <div className="flex flex-col h-full w-full align-middle items-center m-auto justify-center">
      <button
        className="bg-white p-2"
        onClick={() => setValue((prev) => prev - 1)}
      >
        left
      </button>
      <button
        className="bg-white p-2"
        onClick={() => setValue((prev) => prev + 1)}
      >
        right
      </button>
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 50, position: [0, 2, 5] }} // Adjust the camera position for fixed zoom
        resize={{ scroll: true }}
        className="flex flex-row h-full w-full align-middle items-center m-auto justify-center"
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 0]} intensity={1} />
        <Tmodel positionX={value} />
      </Canvas>
    </div>
  );
}

export default Model;
