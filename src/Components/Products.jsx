import React, { useState } from "react";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";

function Products() {
  const [isExpanded, setIsExpanded] = useState(false);

  function Tmodel({
    gltfPath,
    rotationSpeed = 0.004,
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

    // Use useFrame to rotate the model
    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += rotationSpeed;
      }
    });

    return (
      <primitive ref={ref} object={scene} scale={scale} position={position} />
    );
  }

  return (
    <div className="bg-white w-full h-full border-t-2 border-b-2 border-solid border-blue-500">
      <div className="flex justify-center text-center py-6">
        <p className="text-4xl py-2">Our Products</p>
      </div>
      <div className="flex flex-wrap justify-evenly gap-5 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="h-fit w-80 flex flex-col justify-between align-middle text-center"
        >
          <div>
            <p className="text-2xl">Fresh Milk</p>
          </div>
          <div className="h-[200px] min-h-[200px] w-full flex justify-center">
            <Canvas
              dpr={[1, 2]}
              camera={{ fov: 15, position: [-8, 4, -10] }}
              resize={{ scroll: true }}
              shadows
              className="flex flex-row -mx-40 h-full w-full align-middle items-center m-auto justify-center"
            >
              <OrbitControls enableRotate={true} enableZoom={false} />
              <ambientLight intensity={1.8} />
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

              <Tmodel gltfPath="./butter_milk.glb" scale={[0.14, 0.155, 0.1]} />
            </Canvas>
          </div>
          <div className="text-justify text-sm font-light h-[150px]">
            Experience the pure taste of freshness with our Fresh Milk Bottle.
            Sourced from local farms known for their quality, our milk is
            delivered directly to your doorstep, ensuring every sip is as fresh
            as morning dew. Packed with essential nutrients and vitamins, it's
            perfect for your morning cereal, baking recipes, or simply enjoyed
            on its own. Embrace the goodness of nature with each pour.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="h-fit w-80 flex flex-col justify-between align-middle text-center"
        >
          <div>
            <p className="text-2xl">Lassi</p>
          </div>
          <motion.div className="h-[200px] min-h-[200px] w-full flex justify-center">
            <Canvas
              dpr={[1, 2]}
              camera={{ fov: 15, position: [-8, 4, -10] }}
              resize={{ scroll: true }}
              shadows
              className="flex flex-row -mx-40 h-full w-full align-middle items-center m-auto justify-center"
            >
              <OrbitControls enableRotate={true} enableZoom={false} />
              <ambientLight intensity={1.8} />
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

              <Tmodel gltfPath="./LASSI.glb" scale={[0.6, 0.65, 0.7]} />
            </Canvas>
          </motion.div>
          <div className="text-justify text-sm font-light h-[150px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde hic
            nostrum quisquam ex mollitia odit, incidunt itaque aspernatur
            voluptates! Optio maiores alias aliquam modi cupiditate ex vero
            aspernatur repellat ea!
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeIn" }}
          className="h-fit w-80 flex flex-col justify-between align-middle text-center"
        >
          <div>
            <p className="text-2xl">Butter Milk</p>
          </div>
          <div className="h-[200px] min-h-[200px] w-full flex justify-center">
            <Canvas
              dpr={[1, 2]}
              camera={{ fov: 15, position: [-8, 4, -10] }}
              resize={{ scroll: true }}
              shadows
              className="flex flex-row -mx-40 h-full w-full align-middle items-center m-auto justify-center"
            >
              <OrbitControls enableRotate={true} enableZoom={false} />
              <ambientLight intensity={1.8} />
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

              <Tmodel gltfPath="./milk_bottle.glb" />
            </Canvas>
          </div>
          <div className="text-justify text-sm font-light h-[150px]">
            bring you a wholesome dairy experience. Our buttermilk is churned to
            perfection, offering a creamy texture and a rich, tangy flavor that
            will invigorate your senses with every sip
          </div>
        </motion.div>
      </div>
      {/* <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap justify-evenly gap-5 py-4">
              <div className="h-fit w-80 flex flex-col justify-between align-middle text-center">
                <div>
                  <p className="text-2xl">Milk</p>
                </div>
                <div className="h-[200px] min-h-[200px] w-full flex justify-center">
                  <Canvas
                    dpr={[1, 2]}
                    camera={{ fov: 15, position: [-8, 4, -10] }}
                    resize={{ scroll: true }}
                    shadows
                    className="flex flex-row -mx-40 h-full w-full align-middle items-center m-auto justify-center"
                  >
                    <OrbitControls enableRotate={true} enableZoom={false} />
                    <ambientLight intensity={1.8} />
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
                    <Tmodel
                      gltfPath="./butter_milk.glb"
                      scale={[0.14, 0.155, 0.1]}
                    />
                  </Canvas>
                </div>
                <div className="text-justify text-sm font-light h-[150px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  hic nostrum quisquam ex mollitia odit, incidunt itaque
                  aspernatur voluptates! Optio maiores alias aliquam modi
                  cupiditate ex vero aspernatur repellat ea!
                </div>
              </div>
              <div className="h-fit w-80 flex flex-col justify-between align-middle text-center">
                <div>
                  <p className="text-2xl">Milk</p>
                </div>
                <div className="h-full w-full bg-black"></div>
                <div className="text-justify text-sm font-light h-[150px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  hic nostrum quisquam ex mollitia odit, incidunt itaque
                  aspernatur voluptates! Optio maiores alias aliquam modi
                  cupiditate ex vero aspernatur repellat ea!
                </div>
              </div>
              <div className="h-fit w-80 flex flex-col justify-between align-middle text-center">
                <div>
                  <p className="text-2xl">Milk</p>
                </div>
                <div className="h-full w-full bg-black"></div>
                <div className="text-justify text-sm font-light h-[150px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  hic nostrum quisquam ex mollitia odit, incidunt itaque
                  aspernatur voluptates! Optio maiores alias aliquam modi
                  cupiditate ex vero aspernatur repellat ea!
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <div className="flex justify-center py-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white py-2 px-8 rounded-2xl"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <a href="/products">Discover More</a>
        </motion.button>
      </div>
    </div>
  );
}

export default Products;
