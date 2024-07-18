import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AxesHelper } from "three";

function Hero() {
  function LightWithHelper({ position, intensity }) {
    const lightRef = useRef();

    return (
      <>
        <directionalLight
          ref={lightRef}
          position={position}
          intensity={intensity}
          castShadow
          receiveShadow
          shadow-mapSize-width={4096} // Increase the shadow map size for better quality
          shadow-mapSize-height={4096}
          shadow-radius={10} // Increase the radius for softer shadows
          //   shadow-bias={-0.0005} // Adjust the bias to prevent shadow acne
        >
          <orthographicCamera
            attach="shadow-camera"
            left={-20}
            right={20}
            top={20}
            bottom={-20}
            near={0.1}
            far={50}
          />
        </directionalLight>
        <primitive object={new AxesHelper(5)} position={position} />
      </>
    );
  }

  function Ground1() {
    return (
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 50]} />
        <meshStandardMaterial color="hsl(217, 91.2%, 59.8%)" />
      </mesh>
    );
  }
  function Ground2() {
    return (
      <mesh
        rotation={[Math.PI / 1, 0, 0]}
        position={[0, -1.5, 50]}
        receiveShadow
      >
        <planeGeometry args={[100, 50]} />
        <meshStandardMaterial color="hsl(217, 91.2%, 59.8%)" />
      </mesh>
    );
  }
  function Ground3() {
    const { scene } = useGLTF("./bg1.glb");

    // Traverse the scene and update material color to blue
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set("#3b82f6");
      }
    });

    return (
      <primitive object={scene} position={[0, 0, 10]} rotation={[0, 0, 0]} />
    );
  }

  function Model({
    gltfPath,
    rotationSpeed = 0.015,
    scale = 0.3,
    position = [-4, 0.1, 1],
  }) {
    const { scene } = useGLTF(gltfPath);
    const ref = useRef();

    // Ensure the model casts shadows
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return (
      <primitive
        ref={ref}
        object={scene}
        scale={scale}
        position={position}
        rotation={[0, -1, 0]}
      />
    );
  }

  return (
    <div className="h-full w-full bg-blue-500">
      <div className="w-full h-full">
        <Canvas
          dpr={[1, 2]}
          camera={{ fov: 15, position: [1, 5, -35], rotation: [10, 10, 10] }}
          shadows
        >
          <OrbitControls
            enableRotate={true}
            enableZoom={true}
            enablePan={true}
          />
          {/* <Ground1 />
          <Ground2 /> */}
          <Ground3 />
          <LightWithHelper position={[-20, 10, 0]} intensity={0.5} />
          <LightWithHelper position={[-20, 10, 30]} intensity={0.5} />
          <LightWithHelper position={[10, 10, -30]} intensity={0.5} />
          <ambientLight intensity={1} />
          <Model gltfPath={"./butter_milk.glb"} />
        </Canvas>
      </div>
    </div>
  );
}

export default Hero;
