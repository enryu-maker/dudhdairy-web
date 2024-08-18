import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../Images/Animation.json";
import axios from "axios";

export default function Products() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-dudhdairy.vercel.app/product/products"
        );
        setProducts(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false on error as well
      }
    };
    console.log(products);
    fetchData();
  }, []);

  // Display loading screen while fetching data
  if (loading) {
    return (
      <div className="w-full h-screen flex bg-blue-500 flex-col justify-center items-center align-middle m-auto">
        <div>
          <Lottie
            options={defaultOptions}
            width={100}
            height={300}
            className="bg-blue-500 align-middle w-40 h-40"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen h-fit bg-blue-500 pt-14">
      <div className="flex h-full bg-blue-500 flex-wrap justify-evenly gap-5 py-4">
        {products?.map((product, index) => (
          <div key={index} className="flex flex-wrap justify-evenly gap-5 py-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              key={product.id}
              className="h-fit w-80 flex rounded-2xl shadow-2xl bg-white p-6 flex-col justify-evenly align-middle text-center"
            >
              <div>
                <p className="text-2xl">{product.name}</p>
              </div>

              <hr className="text-blue-500 bg-blue-500 "></hr>
              <div className="h-[250px] w-full flex justify-center">
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
                  <Tmodel
                    gltfPath={product.glb_file}
                    // scale={
                    // product.id === 1 ? [0.14, 0.155, 0.1] : [1.4, 1.4, 1.4]
                    // }
                  />
                </Canvas>
              </div>
              <div className="text-justify flex flex-col justify-start text-sm font-light h-[200px]">
                <p>{product.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
