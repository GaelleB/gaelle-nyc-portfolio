'use client';

import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Scene() {
    const characterRef = useRef<THREE.Mesh>(null!);
    const posX = useRef(0);                // position du perso sur X

    /* ───────── Scroll listener ───────── */
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
        // on prend vertical scroll pour avancer vers la droite
        posX.current += e.deltaY * 0.02;   // ajuste le *0.02* pour la vitesse
        };

        /* passive:true = performant, mais pas de preventDefault (ok ici) */
        window.addEventListener('wheel', handleWheel, { passive: true });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    /* ───────── Maj à chaque frame ───────── */
    useFrame(() => {
        if (characterRef.current) {
        characterRef.current.position.x = posX.current;
        }
    });

    /* ───────── Scène ───────── */
    return (
        <>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

        {/* Sol */}
        <mesh receiveShadow rotation-x={-Math.PI / 2}>
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color="#3a3a3c" />
        </mesh>

        {/* Personnage */}
        <mesh ref={characterRef} position={[0, 0.5, 0]} castShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#f4b400" />
        </mesh>

        {/* Empire State */}
        <mesh position={[10, 5, -5]} castShadow>
            <boxGeometry args={[2, 10, 2]} />
            <meshStandardMaterial color="#d6d6d6" />
        </mesh>

        {/* Métro */}
        <mesh position={[25, 1, 0]} castShadow>
            <boxGeometry args={[3, 2, 3]} />
            <meshStandardMaterial color="#1f1f20" />
        </mesh>
        </>
    );
}