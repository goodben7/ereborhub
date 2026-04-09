"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const GRID_SIZE = 100;
const MAX_PATHS = 6;

interface Point { x: number; y: number; }

interface CircuitPath {
  id: string;
  d: string;
  points: Point[];
  color: string;
  pulseType: 'strong' | 'soft';
  layer: 'foreground' | 'background';
  speed: number;
}

// 1. Single Circuit Line Component
const CircuitLine = ({ path, cycleId }: { path: CircuitPath; cycleId: number }) => {
  const isStrong = path.pulseType === 'strong';
  const isForeground = path.layer === 'foreground';

  // Adaptive timing based on pulse and layer
  const drawDuration = isStrong ? 0.8 : 1.2;
  const holdDuration = 1.0;

  return (
    <motion.g key={`${path.id}-${cycleId}`}>
      {/* Path Glow Definition */}
      <defs>
        <filter id={`glow-${path.id}`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation={isForeground ? "3" : "6"} result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id={`grad-${path.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={path.color} stopOpacity={isForeground ? 0.8 : 0.3} />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity={isForeground ? 0.4 : 0.1} />
        </linearGradient>
      </defs>

      {/* The Glow Blur Layer (Behind) */}
      <motion.path
        d={path.d}
        fill="none"
        stroke={path.color}
        strokeWidth={isForeground ? 4 : 8}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1, 1],
          opacity: [0, isForeground ? 0.15 : 0.05, 0]
        }}
        transition={{
          duration: drawDuration + holdDuration,
          times: [0, 0.4, 1],
          ease: "easeInOut",
        }}
        className="blur-[8px]"
      />

      {/* The Sharp Circuit Line */}
      <motion.path
        d={path.d}
        fill="none"
        stroke={`url(#grad-${path.id})`}
        strokeWidth={isForeground ? 1.5 : 1}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#glow-${path.id})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1, 1],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: drawDuration + holdDuration,
          times: [0, 0.4, 1],
          ease: "easeInOut",
        }}
      />

      {/* Connection Nodes */}
      {path.points.map((pt, i) => (
        <motion.circle
          key={`${path.id}-node-${i}`}
          cx={pt.x}
          cy={pt.y}
          r={isForeground ? 2.5 : 1.5}
          fill={path.color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 0.6,
            delay: (i / path.points.length) * drawDuration,
            ease: "backOut"
          }}
        />
      ))}
    </motion.g>
  );
};

export function BackgroundSquares() {
  const [paths, setPaths] = useState<CircuitPath[]>([]);
  const [cycleId, setCycleId] = useState(0);

  // Mouse Parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const parallaxX = useTransform(springX, [-0.5, 0.5], ["-10px", "10px"]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], ["-10px", "10px"]);

  // 1. Path Generation Logic
  const generatePath = useCallback((pulseType: 'strong' | 'soft'): CircuitPath => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1920;
    const h = typeof window !== "undefined" ? window.innerHeight : 1080;
    const cols = Math.ceil(w / GRID_SIZE);
    const rows = Math.ceil(h / GRID_SIZE);

    let x = Math.floor(Math.random() * cols) * GRID_SIZE;
    let y = Math.floor(Math.random() * rows) * GRID_SIZE;

    // 4-8 segments per path
    const segmentCount = Math.floor(Math.random() * 5) + (pulseType === 'strong' ? 4 : 2);
    const points: Point[] = [{ x, y }];
    let d = `M ${x} ${y}`;

    for (let i = 0; i < segmentCount; i++) {
      const isHorizontal = Math.random() > 0.5;
      const dir = Math.random() > 0.5 ? 1 : -1;

      if (isHorizontal) x += dir * GRID_SIZE;
      else y += dir * GRID_SIZE;

      // Keep within grid bounds
      x = Math.max(0, Math.min(x, (cols - 1) * GRID_SIZE));
      y = Math.max(0, Math.min(y, (rows - 1) * GRID_SIZE));

      points.push({ x, y });
      d += ` L ${x} ${y}`;
    }

    const randomColor = Math.random() > 0.15 ? '#2563EB' : '#EF4444'; // Rare red accent
    const layer = Math.random() > 0.3 ? 'foreground' : 'background';

    return {
      id: Math.random().toString(36).substr(2, 9),
      d,
      points,
      color: randomColor,
      pulseType,
      layer,
      speed: 0.8 + Math.random() * 0.4
    };
  }, []);

  // 2. Heartbeat Rhythm Loop
  useEffect(() => {
    let active = true;

    const pulseCycle = async () => {
      if (!active) return;

      // Pulse 1: Strong (Lub)
      const isMobile = window.innerWidth < 768;
      const count1 = isMobile ? (Math.floor(Math.random() * 1) + 1) : (Math.floor(Math.random() * 2) + 3);
      setPaths(Array.from({ length: Math.min(count1, MAX_PATHS) }).map(() => generatePath('strong')));
      setCycleId(prev => prev + 1);

      await new Promise(r => setTimeout(r, 200)); // Pause

      // Pulse 2: Soft (Dub)
      const count2 = isMobile ? 1 : (Math.floor(Math.random() * 2) + 1);
      setPaths(prev => [
        ...prev.slice(-(MAX_PATHS - count2)),
        ...Array.from({ length: count2 }).map(() => generatePath('soft'))
      ]);
      setCycleId(prev => prev + 1);

      await new Promise(r => setTimeout(r, 2000)); // Rest phase
      if (active) pulseCycle();
    };

    pulseCycle();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      active = false;
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [generatePath, mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-white">
      {/* 1. Permanent Ground Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="grid-infra" width={GRID_SIZE} height={GRID_SIZE} patternUnits="userSpaceOnUse">
            <path d={`M ${GRID_SIZE} 0 L 0 0 0 ${GRID_SIZE}`} fill="none" stroke="black" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-infra)" />
      </svg>

      {/* 2. Parallaxed Circuit Layer */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute inset-0"
      >
        <svg className="w-full h-full">
          <AnimatePresence>
            {paths.map((path) => (
              <CircuitLine key={`${path.id}-${cycleId}`} path={path} cycleId={cycleId} />
            ))}
          </AnimatePresence>
        </svg>
      </motion.div>

      {/* 3. Polish Layers */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[0.5px]" />

      {/* Dynamic Gradients (Atmosphere) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/5 blur-[160px] rounded-full" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-400/5 blur-[160px] rounded-full" />
      </div>
    </div>
  );
}
