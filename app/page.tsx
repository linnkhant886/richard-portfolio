"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, FileText, Sparkles, Code2, Rocket } from "lucide-react";
import Link from "next/link";
import BackgroundElement from "@/components/BackgroundElement";
import SocialLink from "@/components/SocialLink";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col justify-center">
      <BackgroundElement />
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700" />

      <div className="relative z-10 container mx-auto px-6 py-20 mt-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wider uppercase text-zinc-400">Available for Opportunities</span>
            </div>
          </motion.div>

          {/* Hero Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-8xl font-black tracking-tighter"
            >
              <span className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                Yonatan
              </span>{" "}
              <span className="text-white relative inline-block">
                Richard
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-[4px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" 
                />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-3 text-xl md:text-3xl text-zinc-400 font-light tracking-wide"
            >
              <Code2 className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />
              <h2>Full Stack Developer</h2>
              <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
            </motion.div>
          </div>

          {/* Hero Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            I architect digital experiences that blend <span className="text-white font-medium">technical precision</span> with <span className="text-white font-medium">visual elegance</span>. 
            Passionate about building scalable applications that solve real-world problems.
          </motion.p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <a href="/resume.pdf" download="Yonatan_Richard_Resume.pdf" className="relative">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200 h-14 px-8 text-base font-bold rounded-xl flex items-center gap-3"
                >
                  <FileText size={20} />
                  Download Resume
                  <Download size={18} className="text-zinc-500 group-hover:translate-y-1 transition-transform" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/about">
                <Button
                  variant="ghost"
                  size="lg"
                  className="h-14 px-8 text-base font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl flex items-center gap-2 group"
                >
                  Explore Profile
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Social Proof/Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="pt-12"
          >
            <div className="flex flex-col items-center gap-6">
              <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Connect With Me</span>
              <SocialLink />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-10 left-10 opacity-[0.02] text-9xl font-black pointer-events-none select-none hidden lg:block">
        BUILDING THE FUTURE
      </div>
    </div>
  );
}
