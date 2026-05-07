"use client";

import { motion } from "framer-motion";
import SocialLink from "../SocialLink";
const sideBarItems = [
  { title: "Introduction", id: "intro" },
  { title: "Skills", id: "skills" },
  { title: "Education", id: "education" },
];
interface SidebarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
  setActiveSection: (id: string) => void;
}

export default function Sidebar({
  activeSection,
  scrollToSection,
  setActiveSection,
}: SidebarProps) {
  return (
    <div className="hidden md:flex ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.9 }}
        className="w-[25%] fixed h-screen bg-transparent backdrop-blur-xl p-6 pt-28 border-r border-white/5"
      >
        <div className="space-y-1 text-center mb-10">
          <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold">About Me</h2>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Profile Overview
          </p>
        </div>

        <div className="space-y-2 flex  flex-col ">
          {sideBarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                scrollToSection(item.id);
              }}
              className={` px-4 py-2 rounded-lg transition-colors `}
            >
              {activeSection === item.id && <span className="mr-2">✓</span>}
              {item.title}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="fixed bottom-0 left-10  p-6">
        <SocialLink />
      </div>
    </div>
  );
}
