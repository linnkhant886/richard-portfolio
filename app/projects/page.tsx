"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import Image from "next/image";
import BackgroundElement from "@/components/BackgroundElement";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  techStack: string[];
  sourceUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Restaurant POS system",
    description:
      "Built a full-stack POS system with Next.js, including a back-office dashboard for restaurant management and a customer-facing QR code ordering feature.",
    image: "/pos.jpg",
    features: [
      "Back-Office Dashboard",
      "QR Code Ordering",
      "Secure Authentication",
    ],
    techStack: [
      " Next.js (Full-Stack)",
      " NextAuth ",
      "PostgreSQL",
      " Material-UI ",
      "Prisma",
    ],
    sourceUrl: "https://github.com/linnkhant886/restaurant-pos",
    liveUrl: "https://restaurant-pos-lac.vercel.app/",
  },
  {
    id: 2,
    title: "Home Rental System",
    description:
      "A full-stack home rental platform for listing properties, managing bookings, and processing payments securely.",
    image: "/homeRental.jpg",
    features: [
      "Property Listing & Management",
      "Booking Reservations & Favoriting",
      "Secure Payments & Income Tracking",
    ],
    techStack: [
      "Next.js",
      "Clerk Auth",
      "Tailwind CSS & shadcn",
      "Supabase",
      "Stripe API",
    ],
    sourceUrl: "https://github.com/linnkhant886/home-rental-pj",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A sleek, modern portfolio website showcasing projects and skills with smooth animations and a responsive design.",
    image: "/portfolio.jpg",
    features: ["Project Showcase", "Animated Transitions", "Responsive Design"],
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "shadcn"],
    sourceUrl: "https://github.com/linnkhant886/richard-portfolio",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Job Finding App",
    description:
      "A full-stack job-finding application allowing users to create, read, update, and delete job postings while browsing available opportunities.",
    image: "/jobfinder.jpg",
    features: [
      "Job CRUD Operations",
      "Job Search & Filtering",
      "State Management with Redux",
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
    sourceUrl: "https://github.com/linnkhant886/Jobster",
    liveUrl: "https://crudjobster.netlify.app/landing",
  },
];

export default function ProjectsPage() {
  const [expandedId, setExpandedId] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Prevent scroll position change on hover
  const handleMouseEnter = (id: number) => {
    const currentScroll = window.scrollY;
    setExpandedId(id);
    // Maintain scroll position
    setTimeout(() => window.scrollTo(0, currentScroll), 0);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8" ref={containerRef}>
      <BackgroundElement />
      <div className="max-w-6xl mx-auto space-y-12 ">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-400">
            A showcase of my development journey and technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8   ">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <Card
                className="bg-zinc-900/50 border-white/10 overflow-hidden transition-all duration-300 relative"
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={() => setExpandedId(null)}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 blur-xl" />
                </div>

                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  {/* Expandable Content */}
                  <div className="relative">
                    <AnimatePresence>
                      {expandedId === project.id && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 1 }}
                          className="mt-4 space-y-4"
                        >
                          <div className="flex flex-wrap gap-2 mt-3">
                            {project.techStack.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="bg-white/5 hover:bg-white/10"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-gray-400">{project.description}</p>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-gray-400">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between gap-2 items-center mt-4">
                    <div className="flex w-full gap-2">
                      <Button
                        variant="outline"
                        size="lg"
                        className="bg-white/5  w-full hover:bg-white/10"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.sourceUrl, "_blank");
                        }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        SOURCE
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="bg-white/5 w-full hover:bg-white/10"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.liveUrl, "_blank");
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        LIVE
                      </Button>
                    </div>

                    <motion.div
                      animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
