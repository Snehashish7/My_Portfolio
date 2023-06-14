import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]); //the imgUrl prop is being passed down to the Ball component from its parent component, and it is being used to set the texture of the Decal component inside the mesh component.

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        {/* Adding Shading effect: */}
        <meshStandardMaterial 
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]} //This sets the rotation of the Decal component in the 3D space. Here, it is rotated 2 full circles around the x-axis and slightly rotated around the z-axis.
          scale={1}
          map={decal} //This sets the texture of the Decal component. The decal texture is being passed to the component as a prop from the parent component.
          flatShading //makes the object appear smoother by shading the faces based on their angles.
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => { //The BallCanvas component is a React functional component that renders a 3D canvas with the ball from the Ball component.
  return (
    <Canvas
      // frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/*Suspense: used to handle loading the canvas and ball components. */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense> 
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

/*

The code imports several React and Three.js components from various libraries.

The Ball function is a React functional component that renders a 3D ball with an image texture mapped onto it.

The useTexture hook from @react-three/drei is used to load the texture image specified in props.imgUrl.

The Float component applies a floating animation effect to its child components.

The ambientLight and directionalLight components create global ambient and directional light sources respectively.

The mesh component creates a 3D mesh object, in this case an icosahedron with a scale of 2.75.

The meshStandardMaterial component creates a material for the mesh with a white color, flat shading, and a polygon offset factor of -5.

The Decal component is used to add the texture image as a decal on the surface of the 3D ball.

The BallCanvas component is a React functional component that renders a 3D canvas with the ball from the Ball component.

The Canvas component from @react-three/fiber is used to create a Three.js canvas.

The frameloop property is set to 'demand' to only render the canvas when requested.

The dpr property specifies the device pixel ratio of the canvas.

The gl property is used to preserve the drawing buffer of the canvas.

The OrbitControls component from @react-three/drei is used to add orbit controls to the canvas.

The Suspense component is used to handle loading the canvas and ball components.

The Preload component from @react-three/drei is used to preload all assets used in the scene.

The BallCanvas component is exported as the default export of the module.
*/

/*
Canvas:


The Canvas component from the @react-three/fiber library is a wrapper around the Three.js library that allows developers to easily create 3D graphics and animations on the web using the React framework.
The Canvas component provides a way to create a Three.js scene, define cameras and lights, and add objects to the scene using a declarative syntax similar to React's.
Under the hood, the Canvas component creates a WebGL canvas and a Three.js Scene object, which is used to store all the objects that will be rendered. It also creates a Three.js Camera object,
which is used to control the view of the scene. By default, the Canvas component uses a PerspectiveCamera that simulates the way objects appear to the human eye, but developers can also choose
to use an OrthographicCamera if they want to create a more technical or abstract look.

In summary, the Canvas component from @react-three/fiber provides a way to create a Three.js canvas with React, 
making it easy to create complex 3D scenes and animations on the web.
*/
