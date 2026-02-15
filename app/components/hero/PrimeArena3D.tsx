"use client";

import { Canvas } from "@react-three/fiber";
import { Text3D, OrbitControls, Center } from "@react-three/drei";

export default function PrimeArena3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      className="h-[300px] w-full md:h-[400px]"
    >
      {/* Lumières */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#8b5cf6" />

      <Center>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={1.2}
          height={0.3}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.03}
        >
          PRIME ARENA
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#a855f7"
            emissiveIntensity={0.8}
          />
        </Text3D>
      </Center>

      {/* Animation douce */}
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
}