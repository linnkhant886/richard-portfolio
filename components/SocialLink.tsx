"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Facebook } from "lucide-react";
import Link from "next/link";

export default function SocialLink() {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7,
        staggerChildren: 0.1, 
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.2, // Slightly larger scale on hover
      rotate: 10, // Subtle rotation on hover
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex justify-center gap-6"
    >
      {[
        { icon: Github, href: "https://github.com/linnkhant886" },
        {
          icon: Linkedin,
          href: "https://www.linkedin.com/in/yonatan-richard-a05701287/",
        },
        { icon: Instagram, href: "https://www.instagram.com/yonatan_r1ch3d/" },
        { icon: Mail, href: "mailto:linookhant886@gmail.com" },
        {
          icon: Facebook,
          href: "https://www.facebook.com/profile.php?id=100008534252429",
        },
      ].map((social, index) => (
        <motion.div
          key={index}
          variants={iconVariants}
          whileHover="hover" 
          className="relative" 
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-white/10 hover:text-green-500 transition-all relative z-10"
          >
            <Link href={social.href} target="_blank">
              <social.icon
                className="h-5 w-5 transition-colors duration-300 "
              />
            </Link>
          </Button>
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0 }}
            whileHover={{ scale: 2 }} // Expand glow on hover
          />
        </motion.div>
      ))}
    </motion.div>
  );
}