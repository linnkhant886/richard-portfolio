"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-6 bg-black text-white">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold"
      >
        ⚡ Richard
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:flex gap-6"
      >
        {navItems.map((item) => (
          <Link key={item.name} href={item.path} passHref>
            <Button
              variant="ghost"
              className={`text-white hover:text-primary hover:bg-white/10 `}
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </motion.div>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 right-6 bg-black border border-white/20 rounded-lg shadow-lg p-4 md:hidden"
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <Button
                variant="ghost"
                className="block w-full text-left text-white hover:text-primary hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
