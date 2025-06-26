'use client';

import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Scene({ setShowCV }: { setShowCV: (v: boolean) => void }) {
    const characterRef = useRef<THREE.Mesh>(null!);
    const posX = useRef(0);
    const hasTriggered = useRef(false);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
        posX.current += e.deltaY * 0.02;
        };
        window.addEventListener('wheel', handleWheel, { passive: true });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    useFrame(() => {
        if (characterRef.current) {
        characterRef.current.position.x = posX.current;
        }

        if (!hasTriggered.current && posX.current > 9 && posX.current < 12) {
        setShowCV(true);
        hasTriggered.current = true;
        }
    });

    return (
        <>
        {/* Lumières + décor */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

        {/* Sol */}
        <mesh rotation-x={-Math.PI / 2}>
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color="#3a3a3c" />
        </mesh>

        {/* Personnage */}
        <mesh ref={characterRef} position={[0, 0.5, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#f4b400" />
        </mesh>

        {/* Empire State (point de repère à x=10) */}
        <mesh position={[10, 5, -5]}>
            <boxGeometry args={[2, 10, 2]} />
            <meshStandardMaterial color="#d6d6d6" />
        </mesh>

        {/* Métro à x=25 */}
        <mesh position={[25, 1, 0]}>
            <boxGeometry args={[3, 2, 3]} />
            <meshStandardMaterial color="#1f1f20" />
        </mesh>
        </>
    );
}