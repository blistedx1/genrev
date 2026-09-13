import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroScene({ slideIndex = 0 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x111215, 0.035);

    const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || navigator.maxTouchPoints > 1);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.8, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xc5a880, 2.4);
    goldKeyLight.position.set(5, 8, 4);
    scene.add(goldKeyLight);

    const blueFillLight = new THREE.PointLight(0x4a6fa5, 1.4, 20);
    blueFillLight.position.set(-6, 3, -2);
    scene.add(blueFillLight);

    const warmPoint = new THREE.PointLight(0xdfc49f, 2.2, 12);
    warmPoint.position.set(0, 2.5, 1);
    scene.add(warmPoint);

    // Architectural Group
    const archGroup = new THREE.Group();
    scene.add(archGroup);

    // Materials
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x1a1c22,
      roughness: 0.25,
      metalness: 0.85
    });

    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xc5a880,
      roughness: 0.3,
      metalness: 0.95
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.9,
      ior: 1.5
    });

    // Floor Grid / Reflective Ground
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0c0d0f,
      roughness: 0.35,
      metalness: 0.6
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.2;
    archGroup.add(floor);

    // Grid lines on floor
    const gridHelper = new THREE.GridHelper(30, 30, 0xc5a880, 0x242730);
    gridHelper.position.y = -1.19;
    archGroup.add(gridHelper);

    // Cantilevered Architectural Beams & Columns
    for (let i = -3; i <= 3; i += 2) {
      // Columns
      const colGeo = new THREE.BoxGeometry(0.18, 5, 0.18);
      const col = new THREE.Mesh(colGeo, darkMetalMat);
      col.position.set(i * 1.8, 1.3, -2);
      archGroup.add(col);

      // Gold Column Caps
      const capGeo = new THREE.BoxGeometry(0.24, 0.1, 0.24);
      const capTop = new THREE.Mesh(capGeo, goldTrimMat);
      capTop.position.set(i * 1.8, 3.8, -2);
      archGroup.add(capTop);

      const capBot = new THREE.Mesh(capGeo, goldTrimMat);
      capBot.position.set(i * 1.8, -1.15, -2);
      archGroup.add(capBot);
    }

    // Overhead Cantilever Roof Slabs
    const roofSlabGeo = new THREE.BoxGeometry(14, 0.2, 8);
    const roofSlab = new THREE.Mesh(roofSlabGeo, darkMetalMat);
    roofSlab.position.set(0, 3.9, -1);
    archGroup.add(roofSlab);

    // Floating Glass Facade Panels
    const glassPanelGeo = new THREE.BoxGeometry(3.2, 4.8, 0.05);
    const glassPanel1 = new THREE.Mesh(glassPanelGeo, glassMat);
    glassPanel1.position.set(-1.8, 1.2, -1.8);
    archGroup.add(glassPanel1);

    const glassPanel2 = new THREE.Mesh(glassPanelGeo, glassMat);
    glassPanel2.position.set(1.8, 1.2, -1.8);
    archGroup.add(glassPanel2);

    // Geometric Sculptural Chandelier / Parametric Ring
    const torusGeo = new THREE.TorusGeometry(1.2, 0.04, 16, 100);
    const ringMesh1 = new THREE.Mesh(torusGeo, goldTrimMat);
    ringMesh1.position.set(0, 2.2, 0);
    ringMesh1.rotation.x = Math.PI / 3;
    archGroup.add(ringMesh1);

    const torusGeo2 = new THREE.TorusGeometry(0.8, 0.03, 16, 80);
    const ringMesh2 = new THREE.Mesh(torusGeo2, goldTrimMat);
    ringMesh2.position.set(0, 2.2, 0);
    ringMesh2.rotation.y = Math.PI / 4;
    archGroup.add(ringMesh2);

    // Floating Atmospheric Particle Field
    const particleCount = isMobile ? 36 : 110;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 14;
      positions[i + 1] = Math.random() * 5 - 1;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xc5a880,
      size: 0.04,
      transparent: true,
      opacity: 0.6
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    archGroup.add(particles);

    // Mouse Tracking for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = (x / rect.width - 0.5) * 2;
      mouseY = -(y / rect.height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation based on mouse
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      camera.position.x = targetX * 1.5;
      camera.position.y = 1.8 + targetY * 0.8;
      camera.lookAt(0, 1.5, 0);

      // Gentle rotation of the gold rings
      ringMesh1.rotation.z += 0.004;
      ringMesh2.rotation.x += 0.006;

      // Pulse warm light
      warmPoint.intensity = 1.8 + Math.sin(elapsedTime * 2) * 0.4;

      // Shift slight rotation by slide index
      archGroup.rotation.y = THREE.MathUtils.lerp(archGroup.rotation.y, (slideIndex % 4) * 0.25, 0.05);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [slideIndex]);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-90 transition-opacity duration-1000" 
      aria-hidden="true"
    />
  );
}
