'use client'

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Nav() {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
      ];

    return (
        <nav className=" sticky top-0 z-10 flex justify-between items-center p-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold"
        >
          ⚡ Richard
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-6"
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <Button
                variant="ghost"
                className="text-white hover:text-primary hover:bg-white/10"
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </motion.div>
      </nav>
    )
}
