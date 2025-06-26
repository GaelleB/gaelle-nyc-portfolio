// app/page.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Scene from '@/components/Scene';
import CVPanel from '@/components/CVPanel';
import { useState } from 'react';

export default function Home() {
  const [showCV, setShowCV] = useState(false);

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 2, 8], fov: 60 }}
        style={{ height: '100vh', width: '100vw' }}
      >
        <Scene setShowCV={setShowCV} />
      </Canvas>

      {/* Affichage de l’overlay en-dehors du Canvas */}
      <CVPanel open={showCV} setOpen={setShowCV} />

      <Loader />
    </>
  );
}