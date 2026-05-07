"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundElement() {
  const [dots, setDots] = useState<{ top: string; left: string; opacity: number; duration: number }[]>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 40 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.4,
      duration: Math.random() * 4 + 3,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* Star Field */}
      <div className="absolute w-full h-full">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full"
            style={{ top: dot.top, left: dot.left, opacity: dot.opacity }}
            animate={{
              opacity: [dot.opacity, 1, dot.opacity],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
