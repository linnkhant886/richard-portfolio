"use client";

import React from "react";

import Sidebar from "../component/about/Sidebar";
import IntroSection from "../component/about/IntroSection";
import Skills from "../component/about/Skills";
import Education from "../component/about/Education";

// Sidebar navigation items

// Skills data

export default function AboutPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Fixed Sidebar */}

      <div>
        <Sidebar />
      </div>

      {/* Scrollable Content */}
      <div className="ml-10 flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Introduction Section */}
          <IntroSection />

          {/* Skills Section */}
          <Skills />

          {/* Education Section */}
          <Education />
        </div>
      </div>
    </div>
  );
}
