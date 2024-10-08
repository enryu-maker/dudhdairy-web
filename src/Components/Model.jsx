import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Carousel } from "@kkx64/react-simple-carousel";

function Model() {
  function Ground() {
    return (
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 10]} />
        <meshStandardMaterial color="hsl(217, 91.2%, 59.8%)" />
      </mesh>
    );
  }

  function Tmodel({
    gltfPath,
    rotationSpeed = 0.015,
    scale = [1.4, 1.4, 1.4],
    position = [0, -1.5, 0],
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
      <primitive ref={ref} object={scene} scale={scale} position={position} />
    );
  }

  const [value, setValue] = React.useState(0.1);

  return (
    <div className="h-[92vh] w-full px-4">
      <Carousel className="h-[92vh] w-full">
        <div className="flex flex-row justify-around h-full w-full p-10 ">
          <div className="w-full h-full flex flex-col justify-end space-y-2 px-20 pb-20 ">
            <div className="backdrop-blur-lg backdrop-brightness-90 rounded-t-lg p-4">
              {/* <p className="text-7xl text-white text-start font-Alkatra">
                dudh<span className="text-black ">dairy</span>
              </p> */}
              <p className="text-8xl text-white text-start">Fresh MILK</p>
              {/* <p className="text-3xl text-white text-start">100% Natural</p> */}
            </div>

            <div className="backdrop-blur-lg backdrop-brightness-90 rounded-lg p-4">
              <p className="text-xl text-white text-start">
                At Dudhdairy, we take pride in delivering the freshest milk
                directly to your doorstep. Our milk is sourced from healthy,
                well-cared-for cows, ensuring that every glass you pour is rich,
                creamy, and full of natural goodness.
              </p>
            </div>
            <div className="backdrop-blur-lg backdrop-brightness-90 rounded-lg p-4">
              <p className="text-xl text-white text-start">
                Our commitment to quality means that our milk is 100% natural,
                free from any artificial additives or preservatives. We believe
                in keeping things pure and simple, just the way nature intended.
                This ensures that you and your family enjoy the best, most
                wholesome milk available.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <Canvas
              dpr={[1, 2]}
              camera={{ fov: 15, position: [-8, 4, -10] }} // Adjust the camera position for fixed zoom
              resize={{ scroll: true }}
              shadows
              className="flex flex-row -mx-40 h-full w-full align-middle items-center m-auto justify-center"
            >
              <OrbitControls enableRotate={true} enableZoom={false} />
              <Ground />
              <ambientLight intensity={2} />
              <directionalLight
                position={[-50, 4, -10]}
                intensity={2}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
              />
              <directionalLight
                position={[-50, 4, 40]}
                intensity={2}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
              />
              <directionalLight
                position={[-50, 4, -40]}
                intensity={0}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
              />
              {/* <gridHelper args={[100, 100, 0xffffff, 0xffffff]} /> */}
              <Tmodel gltfPath="./butter_milk.glb" scale={[0.14, 0.155, 0.1]} />
            </Canvas>
          </div>
        </div>
        <div className="flex flex-row justify-around h-full w-full p-10 ">
          <div className="w-full h-full flex flex-col justify-end space-y-2 px-20 pb-20 ">
            <div className="backdrop-blur-lg backdrop-brightness-90 rounded-t-lg p-4">
              <p className="text-8xl text-white text-start">Fresh MILK</p>
            </div>

            <div className="backdrop-blur-lg backdrop-brightness-90 rounded-lg p-4">
              <p className="text-xl text-white text-start">
                At Dudhdairy, we take pride in delivering the freshest milk
                directly to your doorstep. Our milk is sourced from healthy,
                well-cared-for cows, ensuring that every glass you pour is rich,
                creamy, and full of natural goodness.
              </p>
            </div>
            <div className="backdrop-blur-lg backdrop-brightness-90 rounded-lg p-4">
              <p className="text-xl text-white text-start">
                Our commitment to quality means that our milk is 100% natural,
                free from any artificial additives or preservatives. We believe
                in keeping things pure and simple, just the way nature intended.
                This ensures that you and your family enjoy the best, most
                wholesome milk available.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <Canvas
              dpr={[1, 2]}
              camera={{ fov: 40, position: [0, 0, 5] }} // Adjust the camera position for fixed zoom
              resize={{ scroll: true }}
              shadows
              className="flex flex-row -mx-40 h-full w-full align-middle items-center m-auto justify-center"
            >
              <OrbitControls enableRotate={true} enableZoom={false} />
              {/* <Ground /> */}
              <ambientLight intensity={2} />
              <directionalLight
                position={[3, 10, 0]}
                intensity={5}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
              />
              <Tmodel gltfPath="./milk_Bottle.glb" />
            </Canvas>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Model;
