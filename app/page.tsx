"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import SocialLink from "./component/SocialLink";
import BackgroundElement from "./component/BackgroundElement";

export default function PortfolioPage() {
  return (
    <div className=" bg-black text-white relative overflow-hidden">
      <BackgroundElement />
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="outline" className="mb-4">
              Welcome to my portfolio
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            Yonatan Richard
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 mb-12 leading-relaxed"
          >
            I’m an enthusiastic and motivated junior developer eager to learn
            and grow in the world of full-stack development. With a strong
            foundation in both front-end and back-end technologies, I’m
            passionate about building functional, user-friendly applications and
            continuously improving my skills.
          </motion.p>

          {/* Interactive Play Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <Button
              size="lg"
              className="rounded-full p-8 hover:scale-110 transition-transform"
            >
              <Play className="h-8 w-8" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <SocialLink />
        </div>
      </div>

      
    </div>
  );
}
