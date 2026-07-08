/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Stars, Environment, Line, Text } from '@react-three/drei';
import * as THREE from 'three';

const BankNode = ({ position, color, label }: { position: [number, number, number]; color: string; label: string }) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.1;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.2} />
      </Sphere>
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.2}
        color="#666"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKOBj2Juo.woff"
      >
        {label}
      </Text>
    </group>
  );
};

const DataPulse = ({ start, end, delay = 0 }: { start: [number, number, number]; end: [number, number, number]; delay?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  const startVec = useMemo(() => new THREE.Vector3(...start), [start]);
  const endVec = useMemo(() => new THREE.Vector3(...end), [end]);

  useFrame((state) => {
    if (ref.current) {
      const t = (state.clock.getElapsedTime() * 0.5 + delay) % 1;
      ref.current.position.lerpVectors(startVec, endVec, t);
      ref.current.scale.setScalar(Math.sin(t * Math.PI) * 0.5 + 0.5);
    }
  });

  return (
    <Sphere ref={ref} args={[0.08, 16, 16]}>
      <meshBasicMaterial color="#C5A059" transparent opacity={0.8} />
    </Sphere>
  );
};

export const NetworkScene: React.FC = () => {
  const nodes: {pos: [number, number, number], label: string}[] = [
    { pos: [0, 1.5, 0], label: "Global Aggregator" },
    { pos: [-3, -1, 0], label: "Institution A" },
    { pos: [0, -2, 0], label: "Institution B" },
    { pos: [3, -1, 0], label: "Institution C" },
  ];

  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          {nodes.map((node, i) => (
            <BankNode 
              key={i} 
              position={node.pos} 
              color={i === 0 ? "#C5A059" : "#1E293B"} 
              label={node.label} 
            />
          ))}

          {/* Connections */}
          {nodes.slice(1).map((node, i) => (
            <group key={i}>
              <Line
                points={[nodes[0].pos, node.pos]}
                color="#C5A059"
                lineWidth={0.5}
                transparent
                opacity={0.3}
              />
              <DataPulse start={node.pos} end={nodes[0].pos} delay={i * 0.3} />
              <DataPulse start={nodes[0].pos} end={node.pos} delay={i * 0.3 + 0.5} />
            </group>
          ))}
        </Float>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

const SecurityVaultContent = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (cubeRef.current) {
      cubeRef.current.rotation.x = Math.PI / 4 + t * 0.1;
      cubeRef.current.rotation.y = Math.PI / 4 + t * 0.15;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.x = t * 0.2;
      ringsRef.current.rotation.y = t * 0.1;
      ringsRef.current.rotation.z = t * 0.05;
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(t) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <spotLight position={[5, 10, 5]} angle={0.15} penumbra={1} intensity={2} color="#C5A059" />
      <Environment preset="studio" />
      
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <group>
          {/* Abstract Secure Enclave Representation */}
          <mesh ref={cubeRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} wireframe />
          </mesh>
          <mesh ref={sphereRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color="#C5A059" metalness={0.9} roughness={0.1} emissive="#C5A059" emissiveIntensity={0.2} />
          </mesh>
          
          {/* Orbital Rings */}
          <group ref={ringsRef}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[1.5, 0.02, 16, 100]} />
              <meshBasicMaterial color="#C5A059" transparent opacity={0.4} />
            </mesh>
            <mesh rotation={[0, Math.PI / 2, 0]}>
              <torusGeometry args={[1.8, 0.015, 16, 100]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
            </mesh>
          </group>
        </group>
      </Float>
    </>
  );
};

export const SecurityVaultScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <SecurityVaultContent />
      </Canvas>
    </div>
  );
};
