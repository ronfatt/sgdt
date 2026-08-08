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

    let width = container.clientWidth;
    let height = container.clientHeight;
    const isMobile = window.innerWidth < 768;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = isMobile ? 260 : 240;

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Globe Container Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Inner Dark Core Globe Sphere
    const globeRadius = isMobile ? 65 : 75;
    const coreGeo = new THREE.SphereGeometry(globeRadius - 0.5, 48, 48);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x050505,
      transparent: true,
      opacity: 0.95,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // 4. Dot Matrix Globe Surface
    const dotCount = isMobile ? 1800 : 2800;
    const dotPositions: number[] = [];
    const dotColors: number[] = [];

    const goldBase = new THREE.Color("#D6A63C");
    const goldBright = new THREE.Color("#F0C75E");
    const goldMetallic = new THREE.Color("#FFE09A");

    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < dotCount; i++) {
      const y = 1 - (i / (dotCount - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const px = Math.cos(theta) * radiusAtY * globeRadius;
      const py = y * globeRadius;
      const pz = Math.sin(theta) * radiusAtY * globeRadius;

      dotPositions.push(px, py, pz);

      const randColor = Math.random();
      const color = randColor > 0.8 ? goldMetallic : randColor > 0.4 ? goldBright : goldBase;
      dotColors.push(color.r, color.g, color.b);
    }

    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.Float32BufferAttribute(dotPositions, 3));
    dotGeo.setAttribute("color", new THREE.Float32BufferAttribute(dotColors, 3));

    // Canvas Texture for glowing circular dots
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
      size: isMobile ? 2.0 : 2.2,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const dotCloud = new THREE.Points(dotGeo, dotMat);
    globeGroup.add(dotCloud);

    // 5. Node Connection Lines
    const nodeCount = isMobile ? 24 : 36;
    const nodePositions: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const idx = Math.floor((i / nodeCount) * dotCount);
      const x = dotPositions[idx * 3];
      const y = dotPositions[idx * 3 + 1];
      const z = dotPositions[idx * 3 + 2];
      nodePositions.push(new THREE.Vector3(x, y, z));
    }

    const lineMat = new THREE.LineBasicMaterial({
      color: 0xd6a63c,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const lineGeo = new THREE.BufferGeometry();
    const lineIndices: number[] = [];
    const linePositions: number[] = [];

    nodePositions.forEach((p) => linePositions.push(p.x, p.y, p.z));

    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < (isMobile ? 55 : 65)) {
          lineIndices.push(i, j);
        }
      }
    }
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeo.setIndex(lineIndices);
    const networkLines = new THREE.LineSegments(lineGeo, lineMat);
    globeGroup.add(networkLines);

    // 6. Orbital Cyber Rings
    const ringGroup = new THREE.Group();
    const ringGeo1 = new THREE.RingGeometry(globeRadius + 12, globeRadius + 13, 64);
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

    globeGroup.add(ringGroup);

    // 7. Mouse / Touch Parallax
    let mouseX = 0;
    let mouseY = 0;

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        mouseX = ((touch.clientX - rect.left) / width - 0.5) * 2;
        mouseY = ((touch.clientY - rect.top) / height - 0.5) * 2;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // 8. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      globeGroup.rotation.y += 0.0025;
      ringMesh1.rotation.z += 0.001;

      globeGroup.rotation.y += (mouseX * 0.3 - globeGroup.rotation.y) * 0.05;
      globeGroup.rotation.x += (mouseY * 0.2 - globeGroup.rotation.x) * 0.05;

      const currentKw = keywordRef.current;
      if (currentKw === "computing") {
        dotMat.size = 2.6 + Math.sin(elapsedTime * 8) * 0.5;
        lineMat.opacity = 0.5;
      } else if (currentKw === "deflation") {
        dotMat.size = 1.6;
        lineMat.opacity = 0.15;
      } else if (currentKw === "community") {
        dotMat.size = 2.4;
        lineMat.opacity = 0.6;
      } else if (currentKw === "reward") {
        dotMat.size = 2.8 + Math.sin(elapsedTime * 5) * 0.6;
      } else if (currentKw === "ecosystem") {
        dotMat.size = 2.5;
        lineMat.opacity = 0.7;
      } else {
        dotMat.size = isMobile ? 2.0 : 2.2;
        lineMat.opacity = 0.25;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[500px] lg:h-[620px] flex items-center justify-center">
      <div 
        className="absolute w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full blur-[90px] opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(214,166,60,0.4) 0%, rgba(240,199,94,0.1) 50%, transparent 70%)"
        }}
      />
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40 sm:w-64 h-3 bg-[#D6A63C]/20 blur-xl rounded-full pointer-events-none" />
    </div>
  );
};
