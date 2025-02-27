"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
export default function Education() {
  return (
    <div>
      <motion.section
        id="education"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="space-y-8
         relative "
      >
        <div className="absolute dot-circle  "></div>

        <h1 className="mb-4 text-3xl pl-10">Educations</h1>

        <div className="relative pl-10">
          <div className="absolute inset-0 w-0.5  bg-white/20"></div>

          <Card className="bg-zinc-900/50 border-white/10 p-6  ">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
                <Image src={"/logo.jpg"} alt="logo" width={100} height={100} />
              </div>
              <div className=" space-y-2">
                <h3 className=" md:text-xl font-semibold capitalize">
                  rangsit university international college
                </h3>
                <p className="text-gray-400 capitalize">
                  bachelor of information and communication technology
                </p>
                <p className="text-sm text-gray-500 capitalize">
                  2023 - present
                </p>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}
