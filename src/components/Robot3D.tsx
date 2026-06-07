"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

type Pointer = { x: number; y: number };

function Robot({ pointer }: { pointer: React.RefObject<Pointer> }) {
  const gltf = useLoader(GLTFLoader, "/models/robot.glb");
  const root = useRef<THREE.Group>(null);
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  const scene = useMemo(() => {
    gltf.scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh) return;
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      mats.forEach((mm) => {
        const m = mm as THREE.MeshStandardMaterial;
        if (!m?.color) return;
        const lum = (m.color.r + m.color.g + m.color.b) / 3;
        if (lum > 0.32) {
          m.color.set("#ccff00");
          m.emissive = new THREE.Color("#7e9c00");
          m.emissiveIntensity = 0.15;
          m.metalness = 0.4;
          m.roughness = 0.4;
        } else {
          m.color.set("#0d0d0d");
          m.emissive = new THREE.Color("#000000");
          m.metalness = 0.25;
          m.roughness = 0.7;
        }
        m.needsUpdate = true;
      });
    });
    return gltf.scene;
  }, [gltf]);

  useEffect(() => {
    const m = new THREE.AnimationMixer(scene);
    const clip =
      THREE.AnimationClip.findByName(gltf.animations, "Idle") ?? gltf.animations[0];
    if (clip) m.clipAction(clip).play();
    mixer.current = m;
    return () => {
      m.stopAllAction();
      mixer.current = null;
    };
  }, [scene, gltf.animations]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
    const g = root.current;
    if (!g) return;
    g.position.y = -1.95 + Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    const ty = pointer.current.x * 0.55;
    const tx = pointer.current.y * 0.22;
    g.rotation.y += (ty - g.rotation.y) * 0.05;
    g.rotation.x += (tx - g.rotation.x) * 0.05;
  });

  return <primitive ref={root} object={scene} scale={0.85} position={[0, -1.95, 0]} />;
}

export default function Robot3D() {
  const pointer = useRef<Pointer>({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0.5, 6.2], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 6, 5]} intensity={2.4} />
      <directionalLight position={[-5, 2, -3]} intensity={0.6} color="#ccff00" />
      <pointLight position={[-3, 1, 4]} intensity={18} color="#ccff00" />
      <Suspense fallback={null}>
        <Robot pointer={pointer} />
      </Suspense>
    </Canvas>
  );
}
