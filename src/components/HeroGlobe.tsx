"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface HeroGlobeProps {
  activeKeyword: string | null;
}

export const HeroGlobe: React.FC<HeroGlobeProps> = ({ activeKeyword }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const keywordRef = useRef<string | null>(activeKeyword);

  useEffect(() => {
    keywordRef.current = activeKeyword;
  }, [activeKeyword]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Globe Container Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Inner Dark Core Globe Sphere
    const globeRadius = 75;
    const coreGeo = new THREE.SphereGeometry(globeRadius - 0.5, 64, 64);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x050505,
      transparent: true,
      opacity: 0.95,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // 4. Dot Matrix Globe Surface (Thousands of Gold Dots)
    const dotCount = 2800;
    const dotPositions: number[] = [];
    const dotColors: number[] = [];
    const baseScales: number[] = [];

    const goldBase = new THREE.Color("#D6A63C");
    const goldBright = new THREE.Color("#F0C75E");
    const goldMetallic = new THREE.Color("#FFE09A");

    // Fibonacci sphere algorithm for uniform distribution
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < dotCount; i++) {
      const y = 1 - (i / (dotCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const px = x * globeRadius;
      const py = y * globeRadius;
      const pz = z * globeRadius;

      dotPositions.push(px, py, pz);

      // Color variation
      const randColor = Math.random();
      const color = randColor > 0.8 ? goldMetallic : randColor > 0.4 ? goldBright : goldBase;
      dotColors.push(color.r, color.g, color.b);

      baseScales.push(Math.random() * 0.5 + 0.7);
    }

    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.Float32BufferAttribute(dotPositions, 3));
    dotGeo.setAttribute("color", new THREE.Float32BufferAttribute(dotColors, 3));

    // Particle Texture for circular soft glowing dots
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.4, "rgba(240, 199, 94, 0.8)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const dotMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const dotCloud = new THREE.Points(dotGeo, dotMat);
    globeGroup.add(dotCloud);

    // 5. Blockchain Network Nodes & Connection Lines
    const nodeCount = 36;
    const nodePositions: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const idx = Math.floor((i / nodeCount) * dotCount);
      const x = dotPositions[idx * 3];
      const y = dotPositions[idx * 3 + 1];
      const z = dotPositions[idx * 3 + 2];
      nodePositions.push(new THREE.Vector3(x, y, z));
    }

    // Line Connections between nearby nodes
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xd6a63c,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const lineGeo = new THREE.BufferGeometry();
    const lineIndices: number[] = [];
    const linePositions: number[] = [];

    nodePositions.forEach((p) => {
      linePositions.push(p.x, p.y, p.z);
    });

    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 65) {
          lineIndices.push(i, j);
        }
      }
    }
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeo.setIndex(lineIndices);
    const networkLines = new THREE.LineSegments(lineGeo, lineMat);
    globeGroup.add(networkLines);

    // 6. Orbital Rings (Web3 Cyber Rings)
    const ringGroup = new THREE.Group();
    
    // Outer Ring 1
    const ringGeo1 = new THREE.RingGeometry(globeRadius + 14, globeRadius + 15, 96);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xd6a63c,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    ringMesh1.rotation.y = Math.PI / 6;
    ringGroup.add(ringMesh1);

    // Outer Ring 2
    const ringGeo2 = new THREE.RingGeometry(globeRadius + 24, globeRadius + 24.5, 96);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xf0c75e,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.y = Math.PI / 4;
    ringGroup.add(ringMesh2);

    globeGroup.add(ringGroup);

    // 7. Mouse Parallax & Interaction State
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = (x / width - 0.5) * 2;
      mouseY = (y / height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 8. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Automatic slow globe rotation
      globeGroup.rotation.y += 0.0025;
      ringMesh1.rotation.z += 0.001;
      ringMesh2.rotation.z -= 0.0015;

      // Smooth mouse parallax
      targetRotationY = mouseX * 0.4;
      targetRotationX = mouseY * 0.3;

      globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y) * 0.05;
      globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.05;

      // Dynamic Keyword Reaction Handling
      const currentKw = keywordRef.current;
      if (currentKw === "computing") {
        // COMPUTING POWER: Illuminate & pulse rapidly
        dotMat.size = 2.8 + Math.sin(elapsedTime * 8) * 0.6;
        lineMat.opacity = 0.5 + Math.sin(elapsedTime * 10) * 0.2;
      } else if (currentKw === "deflation") {
        // DEFLATION: Contract line opacity and focus core glow
        dotMat.size = 1.8;
        lineMat.opacity = 0.15;
        globeGroup.scale.setScalar(0.96 + Math.sin(elapsedTime * 3) * 0.02);
      } else if (currentKw === "community") {
        // COMMUNITY: Brighten network lines spread out
        dotMat.size = 2.4;
        lineMat.opacity = 0.6;
        ringMat1.opacity = 0.6;
      } else if (currentKw === "reward") {
        // REWARD: Gold pulse animation wave
        dotMat.size = 3.0 + Math.sin(elapsedTime * 5) * 0.8;
        lineMat.opacity = 0.4;
      } else if (currentKw === "ecosystem") {
        // ECOSYSTEM: All nodes connect brightly
        dotMat.size = 2.6;
        lineMat.opacity = 0.7;
        ringMat1.opacity = 0.5;
        ringMat2.opacity = 0.4;
      } else {
        // DEFAULT STATE
        dotMat.size = 2.2 + Math.sin(elapsedTime * 2) * 0.2;
        lineMat.opacity = 0.25;
        ringMat1.opacity = 0.35;
        ringMat2.opacity = 0.2;
        globeGroup.scale.setScalar(1);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center">
      {/* Background Soft Golden Halo */}
      <div 
        className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full blur-[100px] opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(214,166,60,0.4) 0%, rgba(240,199,94,0.1) 50%, transparent 70%)"
        }}
      />
      {/* 3D WebGL Canvas Mounting Point */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* Subtle Bottom Glow Shadow */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-4 bg-[#D6A63C]/20 blur-xl rounded-full pointer-events-none" />
    </div>
  );
};
