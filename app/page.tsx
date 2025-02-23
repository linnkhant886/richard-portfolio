"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, FileText } from "lucide-react";
import SocialLink from "./component/SocialLink";
import BackgroundElement from "./component/BackgroundElement";
import Link from "next/link";

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
            <Badge variant="outline" className="mb-4 ">
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
            className="text-xl md:text-2xl  mb-8"
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

          {/* resume Play Button */}
          <div className=" flex flex-col md:flex-row  gap-6 items-center mb-10 justify-center ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button
                size="lg"
                variant="outline"
                
                className="group relative overflow-hidden border-white/20 hover:border-white/40"
                onClick={() => window.open("/myResume.pdf", "_blank")}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:opacity-100 opacity-0 transition-opacity" />
                <FileText className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                  boxShadow: [
                    "0 0 20px 2px rgba(59, 130, 246, 0.2)",
                    "0 0 30px 4px rgba(59, 130, 246, 0.1)",
                    "0 0 20px 2px rgba(59, 130, 246, 0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* View Profile Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className=""
            >
              <Link href="/about" className="inline-block group">
                <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <motion.div
                    className="flex items-center gap-2 text-xl font-medium"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    View My Profile <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Social Links */}
          <SocialLink />
        </div>
      </div>
    </div>
  );
}
