import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // used to create 3D models

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor='black' /> {/* Adds little more light to computer table (like hemisphere) */}
      {/*spotLight provides more light*/}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1} // controls the light on the desk
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.75} /> {/* light on desktop (like if a tube light is glowing in-front)*/}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.65}
        position={isMobile ? [-4.5, -3.4, -2.2] : [0, -3.55, -0.6]} //[zoom, up-down(-ve: bring down), left-right]
        rotation={[-0.01, -0.2, -0.1]} // there is a limit to rotation(no top down)
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size (to understand if we are using a)
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
      //camera: the angle from which we are looking at
      // fov: field of view :: This is part of scene that can be seen from the position of the camera
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 10, 5], fov: 25 }} //camera.position:[x, y, z]
      gl={{ preserveDrawingBuffer: true }}
    >
    {/* Suspense is a React component that allows a loader which shows loading when loading the 3D models */}
      <Suspense fallback={<CanvasLoader />}>
      {/* The angle in wich we see is limited... i.e we cannot see top-down*/}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
