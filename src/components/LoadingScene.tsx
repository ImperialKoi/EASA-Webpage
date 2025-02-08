import { useRef, useEffect } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

function House({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (mesh.current) {
      mesh.current.geometry = new THREE.BoxGeometry(2, 2, 2);
      mesh.current.material = new THREE.MeshStandardMaterial({
        color: '#ffffff',
        roughness: 0.5,
        metalness: 0.1,
      });
    }
  }, []);

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

function Dragon() {
  const group = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useFrame(({ clock }) => {
    if (group.current) {
      const t = clock.getElapsedTime();
      group.current.position.z = Math.sin(t) * 10 - 20;
      group.current.position.y = Math.cos(t) * 2 + 5;
      group.current.rotation.y = Math.sin(t) * 0.5;
    }
  });

  return (
    <group ref={group} position={[0, 5, -20]}>
      <mesh>
        <coneGeometry args={[1, 4, 4]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[3, 1, 1]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
    </group>
  );
}

function LoadingScene() {
  const { camera } = useThree();
  
  useFrame(({ clock }) => {
    camera.position.z = Math.sin(clock.getElapsedTime() * 0.1) * 5 + 15;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 5, 15]} />
      <OrbitControls enableZoom={false} enablePan={false} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Street */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[50, 100]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Houses on both sides */}
      {Array.from({ length: 10 }).map((_, i) => (
        <group key={i}>
          <House position={[-6, 0, i * -5]} />
          <House position={[6, 0, i * -5]} />
        </group>
      ))}
      
      {/* Dragon */}
      <Dragon />
      
      {/* Festive lights */}
      {Array.from({ length: 20 }).map((_, i) => (
        <pointLight
          key={i}
          position={[
            Math.sin(i) * 5,
            3,
            i * -5
          ]}
          intensity={0.5}
          color={`hsl(${i * 20}, 100%, 50%)`}
        />
      ))}
    </>
  );
}

export default LoadingScene