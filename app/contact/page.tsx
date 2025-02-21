"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendHorizontal, Sparkles } from "lucide-react";
import BackgroundElement from "../component/BackgroundElement";
import SocialLink from "../component/SocialLink";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <div className=" bg-black text-white relative overflow-hidden px-4">
      <BackgroundElement />
      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-10 relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8 space-y-4"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            CONTACT
          </h1>
          <p className="text-gray-400">Reach Out And Collaborate With Me</p>
        </motion.div>

        <SocialLink />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-zinc-900/50 mx-auto mt-6 border-white/10 backdrop-blur-xl max-w-[600px] p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative group"
                >
                  <Input
                    placeholder="Your Name"
                    className="bg-zinc-800/50 border-white/10 h-12 px-4 focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative group"
                >
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-zinc-800/50 border-white/10 h-12 px-4 focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="relative group"
                >
                  <Textarea
                    placeholder="Your Message"
                    className="bg-zinc-800/50 border-white/10 min-h-[150px] p-4 focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center"
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 rounded-lg overflow-hidden transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="animate-spin">⚪</span>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <SendHorizontal className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </div>
                  )}
                  <motion.div
                    className="absolute inset-0 -z-10"
                    animate={{
                      background: [
                        "radial-gradient(circle at center, rgba(59, 130, 246, 0.5) 0%, transparent 50%)",
                        "radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Sparkles className="w-8 h-8 text-blue-500 opacity-50" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-10"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Sparkles className="w-6 h-6 text-purple-500 opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}
