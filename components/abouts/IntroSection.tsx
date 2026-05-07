"use client";
import Image from "next/image";
import {
  Gamepad2,
  Music,
  Code2,
  Film,
  Monitor,
  Cpu,
  GitBranch,
  Award,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function IntroSection() {
  return (
    <div className="relative">
      <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 mb-8 ml-10"
      >
        <div className="h-px w-8 bg-blue-500"></div>
        <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold">Introduction</h2>
      </motion.div>

      <motion.section
        id="intro"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="space-y-12 relative pl-10"
      >
        {/* Vertical Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-50"></div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Profile Image with Premium Styling */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Card className="relative bg-zinc-900/90 border-white/10 p-2 overflow-hidden rounded-2xl">
              <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] overflow-hidden rounded-xl">
                <Image
                  src="/profile22.jpg"
                  alt="Yonatan Richard"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </Card>
            
            {/* Status Badge */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-zinc-900 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              <span className="text-xs font-medium text-gray-300">Available for Projects</span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-2 text-blue-400"
              >
                <Sparkles size={16} />
                <span className="text-sm font-medium uppercase tracking-wider">About Me</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              >
                Yonatan Richard
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-zinc-400 font-light"
              >
                Full-Stack Developer
              </motion.p>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-zinc-400 leading-relaxed text-lg max-w-2xl"
            >
              Passionate about crafting high-performance, modern web applications with <span className="text-white">Next.js</span> and <span className="text-white">TypeScript</span>. 
              I&apos;m a quick learner, dedicated to writing clean code, and currently seeking 
              impactful internship opportunities to contribute and refine my full-stack expertise.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <div className="group flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                <GitBranch className="text-blue-500 w-4 h-4" />
                <span className="text-sm font-medium text-blue-200">Open to Internships</span>
              </div>
              <div className="group flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-colors">
                <Award className="text-purple-500 w-4 h-4" />
                <span className="text-sm font-medium text-purple-200">Available for Work</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Interests Grid */}
        <div className="space-y-6">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl font-semibold flex items-center gap-2"
          >
            <Monitor size={20} className="text-blue-500" />
            Interests & Passions
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Gamepad2, label: "Gaming", color: "text-red-400" },
              { icon: Music, label: "Music", color: "text-blue-400" },
              { icon: Code2, label: "Coding", color: "text-green-400" },
              { icon: Film, label: "Movies", color: "text-yellow-400" },
              { icon: Monitor, label: "Design", color: "text-purple-400" },
              { icon: Cpu, label: "Tech", color: "text-cyan-400" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all group shadow-lg"
              >
                <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium tracking-wider uppercase text-zinc-500 group-hover:text-white transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
