import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Maximize2, 
  RotateCcw, 
  Sun, 
  Moon, 
  Sunset, 
  Layers, 
  Eye, 
  Sparkles, 
  Compass, 
  Info,
  CheckCircle2
} from 'lucide-react';

export default function ThreeStudioViewer() {
  const mountRef = useRef(null);
  const [lightingMode, setLightingMode] = useState('dusk'); // 'day', 'dusk', 'night'
  const [materialTheme, setMaterialTheme] = useState('marble'); // 'marble', 'walnut', 'concrete'
  const [wireframeMode, setWireframeMode] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);

  const sceneRefs = useRef({
    scene: null,
    camera: null,
    renderer: null,
    buildingGroup: null,
    materials: {},
    lights: {}
  });

  const hotspots = [
    {
      id: 'glazing',
      title: 'Acoustic Double-Glazed Curtain Wall',
      pos: [2.5, 1.8, 1.2],
      detail: 'Ultra-clear acoustic insulated glazing with concealed thermally broken champagne-anodized aluminum mullions.'
    },
    {
      id: 'terrace',
      title: 'Cantilevered Teak Sky Terrace',
      pos: [-2.2, 2.6, 0.8],
      detail: 'A 4.2m post-tensioned cantilever deck with sustainably harvested plantation teak and frameless glass balustrades.'
    },
    {
      id: 'atrium',
      title: 'Monolithic Central Marble Core',
      pos: [0, 1.5, 0],
      detail: 'Book-matched Calacatta Gold marble structural shear wall extending across both levels with integrated HVAC return air slots.'
    },
    {
      id: 'lighting',
      title: 'Linear Architectural Cove System',
      pos: [1.8, 3.4, -1.2],
      detail: 'Concealed 2400K-3000K tunable warm dimming LED troughs engineered for shadow-free perimeter ceiling illumination.'
    }
  ];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x131418);
    scene.fog = new THREE.FogExp2(0x131418, 0.04);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(6.5, 4.2, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Lighting Setup
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    const sunLight = new THREE.DirectionalLight(0xffecd2, 2.2);
    sunLight.position.set(8, 12, 6);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    const duskLight = new THREE.DirectionalLight(0xff9944, 2.8);
    duskLight.position.set(-8, 5, 6);
    duskLight.castShadow = true;
    scene.add(duskLight);

    const interiorWarm = new THREE.PointLight(0xffc580, 2.5, 12);
    interiorWarm.position.set(0, 2.2, 0);
    scene.add(interiorWarm);

    // Building Root Group
    const buildingGroup = new THREE.Group();
    scene.add(buildingGroup);

    // Dynamic Materials
    const marbleMat = new THREE.MeshStandardMaterial({
      color: 0xf0eee9,
      roughness: 0.15,
      metalness: 0.1
    });

    const walnutMat = new THREE.MeshStandardMaterial({
      color: 0x5a3d28,
      roughness: 0.45,
      metalness: 0.05
    });

    const concreteMat = new THREE.MeshStandardMaterial({
      color: 0x8a8d93,
      roughness: 0.85,
      metalness: 0.05
    });

    const goldTrim = new THREE.MeshStandardMaterial({
      color: 0xc5a880,
      roughness: 0.25,
      metalness: 0.95
    });

    const darkFrame = new THREE.MeshStandardMaterial({
      color: 0x1f2127,
      roughness: 0.3,
      metalness: 0.8
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xdde6ed,
      transparent: true,
      opacity: 0.35,
      roughness: 0.05,
      transmission: 0.85,
      ior: 1.52
    });

    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x1a2e3b,
      roughness: 0.1,
      metalness: 0.8
    });

    // 1. Base Plinth & Water Reflection Basin
    const plinthGeo = new THREE.BoxGeometry(9.5, 0.4, 9.5);
    const plinth = new THREE.Mesh(plinthGeo, concreteMat);
    plinth.position.y = -0.2;
    plinth.receiveShadow = true;
    buildingGroup.add(plinth);

    const waterGeo = new THREE.BoxGeometry(4.2, 0.15, 3.8);
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.position.set(-2.2, 0.02, 2.2);
    buildingGroup.add(water);

    // 2. Main Ground Floor Pavilion
    const slab1Geo = new THREE.BoxGeometry(6.5, 0.25, 6);
    const slab1 = new THREE.Mesh(slab1Geo, marbleMat);
    slab1.position.set(0, 0.15, 0);
    slab1.castShadow = true;
    slab1.receiveShadow = true;
    buildingGroup.add(slab1);

    // Structural Marble Core
    const coreGeo = new THREE.BoxGeometry(1.6, 3.8, 1.8);
    const core = new THREE.Mesh(coreGeo, marbleMat);
    core.position.set(-0.5, 1.9, -0.4);
    core.castShadow = true;
    core.receiveShadow = true;
    buildingGroup.add(core);

    // Ground Floor Glass Enclosure
    const gfGlassGeo = new THREE.BoxGeometry(5.8, 1.7, 5.2);
    const gfGlass = new THREE.Mesh(gfGlassGeo, glassMat);
    gfGlass.position.set(0.2, 1.1, 0.1);
    buildingGroup.add(gfGlass);

    // Ground Floor Slender Steel Columns
    const colCoords = [
      [2.7, 1.0, 2.4],
      [-2.5, 1.0, 2.4],
      [2.7, 1.0, -2.4],
      [-2.5, 1.0, -2.4]
    ];
    colCoords.forEach(([cx, cy, cz]) => {
      const colGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.8, 16);
      const colMesh = new THREE.Mesh(colGeo, darkFrame);
      colMesh.position.set(cx, cy, cz);
      colMesh.castShadow = true;
      buildingGroup.add(colMesh);
    });

    // 3. First Floor Cantilever Slab
    const slab2Geo = new THREE.BoxGeometry(7.2, 0.28, 5.4);
    const slab2 = new THREE.Mesh(slab2Geo, marbleMat);
    slab2.position.set(-0.4, 2.05, 0.2);
    slab2.castShadow = true;
    slab2.receiveShadow = true;
    buildingGroup.add(slab2);

    // Teak Terrace Deck
    const terraceGeo = new THREE.BoxGeometry(2.4, 0.08, 3.6);
    const terrace = new THREE.Mesh(terraceGeo, walnutMat);
    terrace.position.set(-2.4, 2.2, 0.4);
    buildingGroup.add(terrace);

    // Glass Railing on Terrace
    const railingGeo = new THREE.BoxGeometry(2.4, 0.6, 0.04);
    const railing = new THREE.Mesh(railingGeo, glassMat);
    railing.position.set(-2.4, 2.5, 2.2);
    buildingGroup.add(railing);

    // Upper Level Glass Suite
    const ufGlassGeo = new THREE.BoxGeometry(4.2, 1.6, 3.8);
    const ufGlass = new THREE.Mesh(ufGlassGeo, glassMat);
    ufGlass.position.set(0.8, 2.9, 0.1);
    buildingGroup.add(ufGlass);

    // Cantilevered Floating Roof Canopy with Gold Under-Bevel
    const roofGeo = new THREE.BoxGeometry(8, 0.22, 6.2);
    const roof = new THREE.Mesh(roofGeo, marbleMat);
    roof.position.set(-0.2, 3.8, 0.2);
    roof.castShadow = true;
    buildingGroup.add(roof);

    const roofFasciaGeo = new THREE.BoxGeometry(8.06, 0.06, 6.26);
    const roofFascia = new THREE.Mesh(roofFasciaGeo, goldTrim);
    roofFascia.position.set(-0.2, 3.92, 0.2);
    buildingGroup.add(roofFascia);

    // Architectural Louvers / Vertical Timber Battens
    for (let l = 0; l < 12; l++) {
      const louverGeo = new THREE.BoxGeometry(0.04, 1.5, 0.25);
      const louver = new THREE.Mesh(louverGeo, walnutMat);
      louver.position.set(1.4 + l * 0.15, 2.9, 2.02);
      buildingGroup.add(louver);
    }

    // Ground Grid Helper
    const grid = new THREE.GridHelper(20, 20, 0xc5a880, 0x22252c);
    grid.position.y = -0.41;
    scene.add(grid);

    // Store refs for state changes
    sceneRefs.current = {
      scene,
      camera,
      renderer,
      buildingGroup,
      materials: {
        marbleMat,
        walnutMat,
        concreteMat,
        goldTrim,
        darkFrame,
        glassMat
      },
      slabs: [slab1, slab2, roof, core],
      lights: {
        ambient,
        sunLight,
        duskLight,
        interiorWarm
      }
    };

    // Orbit Controls Simulation
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let spherical = { radius: 10, theta: 0.7, phi: 1.1 };

    const updateCameraFromSpherical = () => {
      camera.position.x = spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
      camera.position.y = spherical.radius * Math.cos(spherical.phi);
      camera.position.z = spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
      camera.lookAt(0, 1.8, 0);
    };

    updateCameraFromSpherical();

    const onMouseDown = (e) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      spherical.theta -= deltaX * 0.008;
      spherical.phi = Math.max(0.2, Math.min(Math.PI / 2 - 0.05, spherical.phi - deltaY * 0.008));

      updateCameraFromSpherical();
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e) => {
      e.preventDefault();
      spherical.radius = Math.max(5, Math.min(16, spherical.radius + e.deltaY * 0.01));
      updateCameraFromSpherical();
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });

    // Animation Loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (autoRotate && !isDragging) {
        spherical.theta += 0.0025;
        updateCameraFromSpherical();
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update lighting theme
  useEffect(() => {
    const { lights, scene } = sceneRefs.current;
    if (!lights || !scene) return;

    if (lightingMode === 'dusk') {
      scene.background = new THREE.Color(0x1a151b);
      scene.fog.color = new THREE.Color(0x1a151b);
      lights.ambient.intensity = 0.4;
      lights.sunLight.intensity = 0.8;
      lights.duskLight.intensity = 3.2;
      lights.interiorWarm.intensity = 3.0;
    } else if (lightingMode === 'night') {
      scene.background = new THREE.Color(0x0c0d10);
      scene.fog.color = new THREE.Color(0x0c0d10);
      lights.ambient.intensity = 0.2;
      lights.sunLight.intensity = 0.1;
      lights.duskLight.intensity = 0.4;
      lights.interiorWarm.intensity = 4.2;
    } else {
      // Day
      scene.background = new THREE.Color(0x1a1c22);
      scene.fog.color = new THREE.Color(0x1a1c22);
      lights.ambient.intensity = 0.8;
      lights.sunLight.intensity = 2.8;
      lights.duskLight.intensity = 0.5;
      lights.interiorWarm.intensity = 1.0;
    }
  }, [lightingMode]);

  // Update Material
  useEffect(() => {
    const { materials, slabs } = sceneRefs.current;
    if (!materials || !slabs) return;

    slabs.forEach(mesh => {
      if (materialTheme === 'marble') {
        mesh.material.color.setHex(0xf0eee9);
        mesh.material.roughness = 0.15;
      } else if (materialTheme === 'walnut') {
        mesh.material.color.setHex(0x523924);
        mesh.material.roughness = 0.5;
      } else {
        // Concrete
        mesh.material.color.setHex(0x7e8188);
        mesh.material.roughness = 0.85;
      }
      mesh.material.needsUpdate = true;
    });
  }, [materialTheme]);

  // Toggle Wireframe
  useEffect(() => {
    const { buildingGroup } = sceneRefs.current;
    if (!buildingGroup) return;

    buildingGroup.traverse(child => {
      if (child.isMesh && child.material) {
        child.material.wireframe = wireframeMode;
      }
    });
  }, [wireframeMode]);

  return (
    <section id="3d-studio" className="relative py-28 px-4 sm:px-6 lg:px-12 bg-[#0E0F12] border-t border-b border-white/5 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-8 left-12 watermark-text text-8xl md:text-9xl opacity-30 select-none">
        3D Studio
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#C5A880] mb-3">
              <span className="w-8 h-[1px] bg-[#C5A880]"></span>
              Spatial Virtual Configurator
            </div>
            <h2 className="text-3xl md:text-5xl font-editorial tracking-tight text-white">
              Interactive 3D Architectural Pavilion
            </h2>
            <p className="text-neutral-400 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
              Explore spatial fluidity and material alchemy in real time. Inspect finishes, switch lighting environments, or toggle architectural wireframes to examine structural precision.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-neutral-400 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#C5A880] animate-spin-slow" />
              Orbit: Drag to Rotate • Scroll to Zoom
            </span>
          </div>
        </div>

        {/* 3D Canvas Viewport + Control HUD */}
        <div className="relative w-full h-[580px] md:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-[#131418] shadow-2xl">
          {/* Three.js Container */}
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Floating HUD Top Bar */}
          <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-2 bg-[#18191E]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-white font-mono-num font-medium">REALTIME WEBGL ENGINE</span>
              <span className="text-neutral-400">| 60 FPS</span>
            </div>

            {/* Quick Actions */}
            <div className="pointer-events-auto flex items-center gap-2 bg-[#18191E]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`px-3 py-1 text-xs rounded-full transition flex items-center gap-1.5 ${
                  autoRotate ? 'bg-[#C5A880] text-black font-medium' : 'text-neutral-400 hover:text-white'
                }`}
                title="Toggle Auto Rotation"
              >
                <RotateCcw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin-slow' : ''}`} />
                {autoRotate ? 'Auto-Rotate ON' : 'Paused'}
              </button>

              <button
                onClick={() => setWireframeMode(!wireframeMode)}
                className={`px-3 py-1 text-xs rounded-full transition flex items-center gap-1.5 ${
                  wireframeMode ? 'bg-[#C5A880] text-black font-medium' : 'text-neutral-400 hover:text-white'
                }`}
                title="Toggle Wireframe Blueprint"
              >
                <Layers className="w-3.5 h-3.5" />
                {wireframeMode ? 'Blueprint Active' : 'Solid Surfaces'}
              </button>
            </div>
          </div>

          {/* Floating HUD Bottom Toolbar */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-none">
            {/* Lighting Modes */}
            <div className="pointer-events-auto flex items-center gap-1 bg-[#18191E]/90 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 px-3 font-mono-num">Lighting:</span>
              <button
                onClick={() => setLightingMode('day')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition ${
                  lightingMode === 'day' ? 'bg-white/15 text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                Daylight
              </button>
              <button
                onClick={() => setLightingMode('dusk')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition ${
                  lightingMode === 'dusk' ? 'bg-[#C5A880]/20 text-[#DFC49F] border border-[#C5A880]/30' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Sunset className="w-3.5 h-3.5 text-[#C5A880]" />
                Golden Dusk
              </button>
              <button
                onClick={() => setLightingMode('night')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition ${
                  lightingMode === 'night' ? 'bg-indigo-900/40 text-indigo-200 border border-indigo-500/30' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
                Nocturne
              </button>
            </div>

            {/* Material Finishes */}
            <div className="pointer-events-auto flex items-center gap-1 bg-[#18191E]/90 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 px-3 font-mono-num">Finishes:</span>
              <button
                onClick={() => setMaterialTheme('marble')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  materialTheme === 'marble' ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Statuario Marble
              </button>
              <button
                onClick={() => setMaterialTheme('walnut')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  materialTheme === 'walnut' ? 'bg-[#785338] text-amber-100 font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Smoked Walnut
              </button>
              <button
                onClick={() => setMaterialTheme('concrete')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  materialTheme === 'concrete' ? 'bg-neutral-600 text-white font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Monolithic Concrete
              </button>
            </div>
          </div>
        </div>

        {/* Hotspots Architectural Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          {hotspots.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveHotspot(activeHotspot === item.id ? null : item.id)}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                activeHotspot === item.id 
                  ? 'bg-[#18191E] border-[#C5A880] shadow-lg shadow-[#C5A880]/10' 
                  : 'bg-[#14151A] border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono-num text-[#C5A880]">0{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
