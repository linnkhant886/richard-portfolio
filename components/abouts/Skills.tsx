"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    frontEnd: {
      title: "Front-End",
      tools: ["JavaScript", "React", "Tailwind CSS", "shadcn", "Zustand"],
    },
    backEnd: {
      title: "Back-End",
      tools: ["Node.js", "Express.js", "Next.js"],
    },
    database: {
      title: "Database",
      tools: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    tools: {
      title: "Tools",
      tools: ["Stripe", "GitHub", "Vercel"],
    },
  };
  return (
    <div>
      <motion.section
        id="skills"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="space-y-8 relative  "
      >

      <div className="absolute dot-circle "></div>
 
        <h1 className="mb-4 text-3xl pl-10 ">Skills</h1>

        <div className="grid md:grid-cols-2 gap-8 relative pl-10  ">
          <div className="absolute inset-0 w-0.5  bg-white/20"></div>

            {Object.values(skills).map((skill, index) => (
              <Card
                key={index}
                className="bg-zinc-900/50 border-white/10 p-6  space-y-4 min-h-[200px]   "
              >
                <h3 className="text-xl  text-center font-semibold">
                  {skill.title}
                </h3>
                <div className="grid grid-cols-3 gap-4 ">
                  {skill.tools.map((tool, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center p-3 rounded-lg bg-white/5 hover:bg-white/10 hover:text-primary transition-colors"
                    >
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
      </motion.section>
    </div>
  );
}
