"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Database as DbIcon, 
  BrainCircuit, 
  Layers,
  Server,
  Lock,
  Settings,
  Lightbulb
} from "lucide-react";

const skillCategories = [
  {
    title: "Front-End",
    icon: <Layers className="w-5 h-5 text-blue-400" />,
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "MUI", "shadcn/ui", "Zustand"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "Back-End",
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    skills: ["Node.js", "Express.js", "Next.js", "REST APIs", "JWT", "Redux"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "Database",
    icon: <DbIcon className="w-5 h-5 text-orange-400" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Supabase", "SQL"],
    gradient: "from-orange-500/10 to-amber-500/10",
    border: "group-hover:border-orange-500/50"
  },
  {
    title: "Authentication",
    icon: <Lock className="w-5 h-5 text-red-400" />,
    skills: ["NextAuth", "Clerk Auth", "JWT", "Supabase Auth"],
    gradient: "from-red-500/10 to-rose-500/10",
    border: "group-hover:border-red-500/50"
  },
  {
    title: "AI / Machine Learning",
    icon: <BrainCircuit className="w-5 h-5 text-purple-400" />,
    skills: ["Gemini API", "OpenRouter", "OCR", "PDF.js"],
    gradient: "from-purple-500/10 to-indigo-500/10",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "Development Tools",
    icon: <Settings className="w-5 h-5 text-zinc-400" />,
    skills: ["Git", "GitHub", "Vercel", "Supabase", "Postman", "Stripe"],
    gradient: "from-zinc-500/10 to-slate-500/10",
    border: "group-hover:border-zinc-500/50"
  }
];

const softSkills = ["Problem-solving", "Collaboration", "Fast Learner", "Attention to Detail"];

export default function Skills() {
  return (
    <div className="relative">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 mb-8 ml-10"
      >
        <div className="h-px w-8 bg-purple-500"></div>
        <h2 className="text-sm uppercase tracking-[0.3em] text-purple-500 font-semibold">Technical Arsenal</h2>
      </motion.div>

      <motion.section
        id="skills"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12 relative pl-10"
      >
        {/* Vertical Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent opacity-50"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className={`relative h-full bg-zinc-900/40 border-white/5 p-6 overflow-hidden transition-all duration-500 ${category.border} hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-zinc-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 text-xs font-medium bg-zinc-800/50 text-zinc-300 rounded-md border border-white/5 hover:border-white/20 hover:text-white hover:bg-zinc-700/50 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 text-zinc-100 font-semibold">
            <Lightbulb size={20} className="text-yellow-500" />
            <h3>Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-zinc-400 hover:text-zinc-100 hover:border-white/20 transition-all"
              >
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
