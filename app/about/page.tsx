"use client";

import React from "react";

import Sidebar from "../component/about/Sidebar";
import IntroSection from "../component/about/IntroSection";
import Skills from "../component/about/Skills";
import Education from "../component/about/Education";
import BackgroundElement from "../component/BackgroundElement";
import { useScrollSections } from "../hooks/useScrollSection";

export default function AboutPage() {
  const { activeSection, introRef, skillsRef, educationRef, scrollToSection ,setActiveSection } =
    useScrollSections();
  return (
    <div className="flex relative min-h-screen bg-black text-white">
      {/* Fixed Sidebar */}
      <div className=" absolute inset-0">
        <BackgroundElement />
      </div>
      <Sidebar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Scrollable Content */}
      <div className="  md:ml-[15%] w-[65%] flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Introduction Section */}
          <div ref={introRef} id="intro">
            <IntroSection />
          </div>
          {/* Skills Section */}
          <div ref={skillsRef} id="skills">
            <Skills />
          </div>
          {/* Education Section */}
          <div ref={educationRef} id="education">
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}
