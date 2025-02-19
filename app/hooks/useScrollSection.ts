// useScrollSections.js
import { useState, useRef } from "react";

export function useScrollSections() {
  const [activeSection, setActiveSection] = useState("intro");
  const introRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    switch (id) {
      case "intro":
        if (introRef.current) {
          introRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "skills":
        if (skillsRef.current) {
          skillsRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "education":
        if (educationRef.current) {
          educationRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        break;
    }
  };

  return {
    activeSection,
    setActiveSection,
    introRef,
    skillsRef,
    educationRef,
    scrollToSection,
  };
}
