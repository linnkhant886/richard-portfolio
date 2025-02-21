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
} from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function IntroSection() {
  return (
    <div className="relative ">
      <div className="absolute dot-circle "></div>
      <h1 className="mb-4 text-3xl ml-10  ">Introduction</h1>

      <motion.section
        id="intro"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="space-y-8 relative pl-10 "
      >
        <div className="absolute inset-0 w-0.5  bg-white/20"></div>

        <div className=" flex flex-col md:flex-row gap-10 items-center md:items-start ">
          <Card className="bg-zinc-900/50 border-white/10 p-4 space-y-4">
            <Image
              src={"/profile.jpg"}
              alt="Profile"
              width={400}
              height={400}
            />
          </Card>
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold">⚡Yonatan Richard</h1>
            <p className="text-xl text-gray-400">Full-Stack Developer</p>
            <p className="text-gray-400 leading-relaxed">
              Passionate about building modern web applications with Next.js.
              I&apos;m a quick learner, eager to contribute, and looking for
              exciting internship opportunities to apply and expand my full
              stack development skills.
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <div className="flex items-center gap-2">
                <GitBranch className="text-blue-500" />
                <span className="text-sm">Open to Work</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-purple-500" />
                <span className="text-sm">Available for Freelance</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="space-y-4  ">
          <h3 className="text-xl font-semibold">Interests</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { icon: Gamepad2, label: "Games" },
              { icon: Music, label: "Music" },
              { icon: Code2, label: "Coding" },
              { icon: Film, label: "Movies" },
              { icon: Monitor, label: "Design" },
              { icon: Cpu, label: "Tech" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-6 h-6" />
                <span className="text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
