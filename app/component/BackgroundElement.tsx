"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundElement() {
  const [dots, setDots] = useState<{ top: string; left: string; opacity: number; duration: number }[]>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.3,
      duration: Math.random() * 3 + 2,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-full h-full">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ top: dot.top, left: dot.left, opacity: dot.opacity }}
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
}
