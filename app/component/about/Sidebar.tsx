"use client";

import { motion } from "framer-motion";
import { useState } from "react";
const sideBarItems = [
  { title: "Introduction", id: "intro" },
  { title: "Skills", id: "skills" },
  { title: "Education", id: "education" },
];
export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 fixed h-screen bg-zinc-900/50 backdrop-blur-xl border-r border-white/10 p-6"
      >
        <h2 className="text-2xl font-bold mb-2">ABOUT ME</h2>
        <p className="text-sm text-gray-400 mb-8">My Profile At A Glance</p>

        <nav className="space-y-2">
          {sideBarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeSection === item.id
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:bg-white/5"
              }`}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </motion.div>
    </div>
  );
}
