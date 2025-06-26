'use client';

import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Scene from '@/components/Scene';

export default function Home() {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 2, 8], fov: 60 }}
        style={{ height: '100vh', width: '100vw' }}
      >
        {/* Suspense automatique via drei */}
        <Scene />
      </Canvas>

      {/* Loader trois/drei (barre d’avancement) */}
      <Loader />
    </>
  );
}