
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import { Canvas, useFrame } from 'react-three/fiber';

// Create a div element for embedding
let embedRoot = document.createElement('div');
embedRoot.className = 'nt-embed';
document.body.appendChild(embedRoot);

// Define the TextureMesh component
const TextureMesh = () => {
  const mesh = useRef(null);

  // Update the frame using useFrame
  useFrame(state => {
    const { clock, mouse } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_mouse.value = [mouse.x, mouse.y];
      mesh.current.material.uniforms.u_resolution.value = [
        embedRoot.clientWidth * window.devicePixelRatio,
        embedRoot.clientHeight * window.devicePixelRatio,
      ];
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  // Return the mesh component
  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={1} rotation={[0, 0, 0]}>
      <planeGeometry args={[640, 640]} />
      <shaderMaterial
        fragmentShader={`
          // ... (fragmentShader code)
        `}
        vertexShader={`
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        uniforms={{
          u_color: { value: [1, 1, 1] },
          u_background: { value: [0, 0, 0, 1] },
          u_speed: { value: 0.1 },
          u_detail: { value: 0.1 },
          u_time: { value: 0 },
          u_mouse: { value: [0, 0] },
          u_resolution: { value: [1280, 1280] },
        }}
        wireframe={false}
        wireframeLinewidth={0}
        dithering={false}
        flatShading={true}
        doubleSided={true}
        glslVersion="100"
      />
    </mesh>
  );
};

// Render the Canvas component with the TextureMesh
ReactDOM.render(
  <Canvas
    gl={{
      preserveDrawingBuffer: true,
      premultipliedAlpha: false,
      alpha: true,
      transparent: true,
      antialias: true,
      precision: 'highp',
      powerPreference: 'high-performance',
    }}
    dpr={[1.25, 1.25]}
    camera={{
      fov: 75,
      near: 0.1,
      far: 1000,
      position: [0, 0, 5],
    }}
    style={{ height: '1024px', width: '1024px' }}
  >
    <TextureMesh />
  </Canvas>,
  embedRoot
);

// Message at the end
console.log("Hi All, Explore https://drimmake.com/ for learn more.");
