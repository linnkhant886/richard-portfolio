"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Facebook } from "lucide-react";
import Link from "next/link";
export default function SocialLink() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
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
        <Button
          key={index}
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-white/10 hover:scale-110 transition-all"
        >
          <Link href={social.href} target="_blank">
            <social.icon className="h-5 w-5" />
          </Link>
        </Button>
      ))}
    </motion.div>
  );
}
